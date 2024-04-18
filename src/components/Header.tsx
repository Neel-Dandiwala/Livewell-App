import React from "react";
import Image from "next/image";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({ }) => {
  return (
    <header class="bg-white relative w-full">
      <discl 
        class="mx-auto flex max-w-8xl items-center justify-center p-3 lg:px-8 bg-primary"
      >
        <p class="text-sm font-semibold leading-6 text-gray-900"> 🍁Canadian based. Canadian owned.🍁 </p>
      </discl>
      <nav
        class="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <Image
              class="h-8 w-auto"
              src="/livewell-logo-black.svg"
              alt=""
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        
        <div class="hidden lg:flex lg:gap-x-12">
          {/* <div class="relative">
            <button
              type="button"
              class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              aria-expanded="false"
            >
              Product
            </button>

          </div> */}

          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
            Doctors
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
            Patient
          </a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
            Chat
          </a>
        </div>
        <div class=" lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
