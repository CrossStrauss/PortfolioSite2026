"use client";

import { useEffect, useRef } from "react";

export default function ShooterGame() {

  // =====================================================
  // REFERENCE TO THE HTML CANVAS ELEMENT
  // =====================================================
  // This gives us direct access to the real DOM canvas
  // so we can use the 2D drawing API.
  // =====================================================

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {

    // =====================================================
    // GET CANVAS + DRAWING CONTEXT
    // =====================================================

    const canvas = canvasRef.current;

    if (!canvas) return;

    // 2D drawing API
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    // =====================================================
    // CANVAS SIZE
    // =====================================================
    // IMPORTANT:
    // CSS size != actual canvas render resolution.
    // We must set BOTH.
    // =====================================================

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // =====================================================
    // GAMEPLAY MARGINS
    // =====================================================
    // We don't want gameplay touching the screen edges.
    // =====================================================

    const GAME_MARGIN = 50;

    // =====================================================
    // KEYBOARD STATE
    // =====================================================
    // We store which keys are currently pressed.
    // Example:
    // keys["a"] === true
    // =====================================================

    const keys: Record<string, boolean> = {};

    // =====================================================
    // PLAYER OBJECT
    // =====================================================
    // Represents the player's ship.
    // =====================================================

    const player = {

      // Start player horizontally centered
      x: canvas.width / 2,

      // Position player near bottom of screen
      y: canvas.height - 80,

      width: 40,
      height: 40,

      // Movement speed per frame
      speed: 4,
    };

    // =====================================================
    // BULLETS ARRAY
    // =====================================================
    // Every bullet fired gets pushed into this array.
    // =====================================================

    const bullets: any[] = [];

    // =====================================================
    // ENEMIES ARRAY
    // =====================================================
    // Stores all active enemies.
    // =====================================================

    const enemies: any[] = [];

    // =====================================================
    // KEYBOARD INPUT
    // =====================================================

    const keyDown = (e: KeyboardEvent) => {

      // Mark key as pressed
      keys[e.key] = true;

      // =====================================================
      // SHOOT BULLET
      // =====================================================

      if (e.code === "Space") {

        bullets.push({

          // Spawn bullet from center of player
          x: player.x + player.width / 2 - 2,

          y: player.y,

          width: 4,
          height: 10,

          speed: 8,
        });
      }
    };

    const keyUp = (e: KeyboardEvent) => {

      // Mark key as released
      keys[e.key] = false;
    };

    // Attach keyboard listeners
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    // =====================================================
    // ENEMY SPAWNING
    // =====================================================

    const spawnEnemy = () => {

      enemies.push({

        // =====================================================
        // RANDOM X POSITION
        // =====================================================
        // We limit spawning so enemies never touch edges.
        // =====================================================

        x:
          GAME_MARGIN +
          Math.random() *
          (
            canvas.width -
            GAME_MARGIN * 2 -
            30
          ),

        // Spawn above screen
        y: -40,

        width: 30,
        height: 30,

        // Random enemy speed
        speed: 1 + Math.random() * 2,
      });
    };

    // Spawn enemy every 2 seconds
    const enemyInterval = setInterval(spawnEnemy, 2000);

    // =====================================================
    // UPDATE FUNCTION
    // =====================================================
    // Handles all game logic.
    // Runs every animation frame.
    // =====================================================

    const update = () => {

      // =====================================================
      // PLAYER MOVEMENT
      // =====================================================

      if (keys["ArrowLeft"] || keys["a"]) {
        player.x -= player.speed;
      }

      if (keys["ArrowRight"] || keys["d"]) {
        player.x += player.speed;
      }

      // =====================================================
      // PLAYER BOUNDARIES
      // =====================================================
      // Prevent player from leaving gameplay area.
      // =====================================================

      if (player.x < GAME_MARGIN) {
        player.x = GAME_MARGIN;
      }

      if (
        player.x + player.width >
        canvas.width - GAME_MARGIN
      ) {
        player.x =
          canvas.width -
          GAME_MARGIN -
          player.width;
      }

      // =====================================================
      // BULLET MOVEMENT
      // =====================================================

      bullets.forEach((bullet, bulletIndex) => {

        // Move bullet upward
        bullet.y -= bullet.speed;

        // Remove bullets offscreen
        if (bullet.y < 0) {
          bullets.splice(bulletIndex, 1);
        }
      });

      // =====================================================
      // ENEMY MOVEMENT
      // =====================================================

      enemies.forEach((enemy, enemyIndex) => {

        // Move enemy downward
        enemy.y += enemy.speed;

        // Remove enemy if offscreen
        if (enemy.y > canvas.height) {
          enemies.splice(enemyIndex, 1);
        }

        // =====================================================
        // COLLISION DETECTION
        // =====================================================
        // Check every bullet against every enemy.
        // =====================================================

        bullets.forEach((bullet, bulletIndex) => {

          const hit =
            bullet.x < enemy.x + enemy.width &&
            bullet.x + bullet.width > enemy.x &&
            bullet.y < enemy.y + enemy.height &&
            bullet.y + bullet.height > enemy.y;

          if (hit) {

            // Remove enemy
            enemies.splice(enemyIndex, 1);

            // Remove bullet
            bullets.splice(bulletIndex, 1);
          }
        });
      });
    };

    // =====================================================
    // DRAW FUNCTION
    // =====================================================
    // Renders everything to the screen.
    // =====================================================

    const draw = () => {

      // Clear previous frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // =====================================================
      // DRAW BACKGROUND
      // =====================================================

      ctx.fillStyle = "black";

      ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      // =====================================================
      // DRAW PLAYER
      // =====================================================

      ctx.fillStyle = "lime";

      ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
      );

      // =====================================================
      // DRAW BULLETS
      // =====================================================

      ctx.fillStyle = "yellow";

      bullets.forEach((bullet) => {

        ctx.fillRect(
          bullet.x,
          bullet.y,
          bullet.width,
          bullet.height
        );
      });

      // =====================================================
      // DRAW ENEMIES
      // =====================================================

      ctx.fillStyle = "red";

      enemies.forEach((enemy) => {

        ctx.fillRect(
          enemy.x,
          enemy.y,
          enemy.width,
          enemy.height
        );
      });
    };

    // =====================================================
    // GAME LOOP
    // =====================================================
    // Runs forever using requestAnimationFrame.
    // =====================================================

    let animationFrameId: number;

    const gameLoop = () => {

      update();
      draw();

      animationFrameId =
        requestAnimationFrame(gameLoop);
    };

    // Start game loop
    gameLoop();

    // =====================================================
    // CLEANUP
    // =====================================================
    // Prevent memory leaks when component unmounts.
    // =====================================================

    return () => {

      cancelAnimationFrame(animationFrameId);

      clearInterval(enemyInterval);

      window.removeEventListener(
        "keydown",
        keyDown
      );

      window.removeEventListener(
        "keyup",
        keyUp
      );
    };

  }, []);

  return (

    // =====================================================
    // FULLSCREEN CONTAINER
    // =====================================================

    <div className="fixed inset-0 bg-black">

      {/* =====================================================
          FULLSCREEN CANVAS
         ===================================================== */}

      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}