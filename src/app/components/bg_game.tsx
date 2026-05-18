"use client";
import { useEffect, useRef, useState } from "react";

type GameObject = {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
};

export default function ShooterGame() {

  const [isTabActive, setIsTabActive] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const visible = !document.hidden;

      setIsTabActive(visible);

      if (visible) {
        console.log("User returned to the tab");
      } else {
        console.log("User switched tabs");
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  let bulletCooldown = 0;
  

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

    const backgroundImage = new window.Image();
    backgroundImage.src = "/game_background.png";

    const playerImage = new window.Image();
    playerImage.src = "/player.png";

    const enemyImage = new window.Image();
    enemyImage.src = "/asteroid.png";

    const canDrawImage = (image: HTMLImageElement) =>
      image.complete && image.naturalWidth > 0;

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
      y: canvas.height - 180,

      width: 150,
      height: 150,

      // Movement speed per frame
      speed: 6,
    };

    // =====================================================
    // BULLETS ARRAY
    // =====================================================
    // Every bullet fired gets pushed into this array.
    // =====================================================

    const bullets: GameObject[] = [];

    // =====================================================
    // ENEMIES ARRAY
    // =====================================================
    // Stores all active enemies.
    // =====================================================

    const enemies: GameObject[] = [];

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
            150
          ),

        // Spawn above screen
        y: -150,

        width: 150,
        height: 150,

        // Random enemy speed
        speed: 1 + Math.random() * 0.5,
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

      if (canDrawImage(backgroundImage)) {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // ctx.fillStyle = "black";

      // ctx.fillRect(
      //   0,
      //   0,
      //   canvas.width,
      //   canvas.height
      // );

      // =====================================================
      // DRAW PLAYER
      // =====================================================

      ctx.fillStyle = "lime";

      if (canDrawImage(playerImage)) {
        ctx.drawImage(
          playerImage,
          player.x,
          player.y,
          player.width,
          player.height
        );
      } else {
        ctx.fillRect(player.x, player.y, player.width, player.height);
      }

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

        if (canDrawImage(enemyImage)) {
          ctx.drawImage(
            enemyImage,
            enemy.x,
            enemy.y,
            enemy.width,
            enemy.height
          );
        } else {
          ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        }
      });
    };

    // =====================================================
    // GAME LOOP
    // =====================================================
    // Runs forever using requestAnimationFrame.
    // =====================================================

    // =====================================================
    // AI TAKE OVER
    // =====================================================
    // The AI That runs when the ugame state is set to "notControlled"
    // =====================================================

    const selctRandomEnemy = () => {

    }

    const AI_takeOver = () => {
      if (!enemies[1]) return
        if (bulletCooldown === 0) {
          if (player.x < enemies[1].x) {
            player.x +=  player.speed;
          } else {
            player.x -=  player.speed;
          }
        }

      console.log(bulletCooldown);
      if (bulletCooldown === 0) {

        if (player.x  < (enemies[1].x + 3) && player.x  > (enemies[1].x - 3)) {
          bulletCooldown = 100;
          bullets.push({
            x: player.x + player.width / 2 - 2,
            y: player.y,
            width: 4,
            height: 10,
            speed: 8,
          });
        }
        ctx.fillStyle = "yellow";
        bullets.forEach((bullet) => {
          ctx.fillRect(
            bullet.x,
            bullet.y,
            bullet.width,
            bullet.height
          );
        });
      } else {
        bulletCooldown--;
        if(bulletCooldown <= 0){
          bulletCooldown = 0;
        }
      }

    };

    let animationFrameId: number;
      const gameLoop = () => {
          update();
          draw();
          AI_takeOver();

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
