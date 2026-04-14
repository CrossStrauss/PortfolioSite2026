import Link from "next/link";

export default function ProjectComp({ linkHref }: { linkHref: string }) {
    return (
        <Link href={linkHref} className="w-[94%] h-[94%] hex flex justify-center items-center">
            <p>Project</p>
        </Link>
    );
}
