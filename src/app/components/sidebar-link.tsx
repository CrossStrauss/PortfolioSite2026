import Link from "next/link"

type SidebarLinkProps = {
  projectType: string,
  link: string
}


export default function SidebarLink({ projectType, link }: SidebarLinkProps) {
    return (
        <Link href={`/${link}`} className="w-[50%] group flex items-center py-2 cursor-pointer flex justify-between">
           <span className="text-lg text-white">{projectType}</span> 
           <span className="text-lg text-white group-hover:translate-x-2 transition-all duration-100">&#10230;</span>
        </Link>
    )
} 