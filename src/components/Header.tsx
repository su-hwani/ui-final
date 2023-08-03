import React from "react";

export default function Header() {
  return (
    <div className="h-20 bg-white pb-4">
      <div className="flex h-5 items-center p-10">
        <div className="flex lg:flex-1">
          <a href="#!" className="-m-1.5 p-1.5">
            <img
              className="h-9 w-auto"
              src="https://obzen.com/img/logo_red.png"
              alt=""
            />
            <span className="sr-only">Obzen</span>
          </a>
        </div>
        <div className="text-2xl font-bold mr-4">
          {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
