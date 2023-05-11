import DarkmodeSwitch from "../DarkmodeSwitch";
import MenuItem from "./MenuItem";
import {GoHome, GoInfo } from "react-icons/go";



export default function header() {
  return (
    <div className="flex justify-between items-center mx-auto max-w-lg sm:max-w-6xl">
      {/* MENU ITEMS */}
      <div className="flex py-4 space-x-4 font-semibold text-teal-900 dark:text-amber-400">
        <MenuItem title="HOME" link="/" Icon={GoHome} />
        <MenuItem title="About" link="/about" Icon={GoInfo} />
      </div>

      {/* LOGO */}
      <div className="flex items-center space-x-2">
        <DarkmodeSwitch className="mr-2" />
        <div className=" transition-colors duration-500 font-mono">
          <span className="bg-purple-900 dark:bg-amber-200 rounded px-2 py-1 text-amber-200 dark:text-black font-extrabold mr-0.5 tracking-wider text-2xl">RaiseTo</span>
          <span className="italic text-lg text-purple-950 dark:text-amber-400">App</span>
        </div>

      </div>

    </div>
  )
}
