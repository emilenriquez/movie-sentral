import Link from "next/link";

export default function MenuItem({title, link, Icon}) {
  return (
    <div className="mx-2 hover:text-teal-600">
      <Link href={link} className="flex ">
        <Icon className="lg:hidden text-2xl" />
        <h2 className="hidden sm:inline sm:ml-2 text-lg uppercase">
          {title}
        </h2>
      </Link>
    </div>
  )
}
