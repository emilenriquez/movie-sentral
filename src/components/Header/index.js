import MenuItem from "./MenuItem";
import {GoHome, GoInfo } from "react-icons/go";


export default function header() {
  return (
    <div className="flex justify-between items-center mx-auto max-w-lg sm:max-w-7xl px-4">
      {/* MENU ITEMS */}
      <div className="flex py-4">
        <MenuItem title="HOME" link="/" Icon={GoHome} />
        <MenuItem title="About" link="/about" Icon={GoInfo} />
      </div>

      {/* LOGO */}
      <div>
        <span className="bg-amber-200 rounded px-2 py-1 text-black font-extrabold mr-1">MOVIE</span>
        <span className="italic text-amber-400  text-1xl">sentral</span>
      </div>

    </div>
  )
}
