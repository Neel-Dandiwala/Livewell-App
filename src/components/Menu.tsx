import React from "react";
import Image from "next/image";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  return (
    <menu className="fixed left-0 w-48 h-full bg-white">

        <nav
          className="flex flex-col items-center justify-between space-y-4"
          aria-label="Global"
        >
          
          
          {/* Vertical Navigation Links */}
          <div className="flex flex-col items-center gap-y-2">
            <a href="/doctors" className="text-md font-semibold leading-6 p-10 text-gray-900">
              Doctors
            </a>
            <a href="/patients" className="text-md font-semibold leading-6 p-10 text-gray-900">
              Patient
            </a>
            <a href="/chatbox" className="text-md font-semibold leading-6 p-10 text-gray-900">
              Chat
            </a>
          </div>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </nav>

    </menu>
  );
};

export default Menu;
