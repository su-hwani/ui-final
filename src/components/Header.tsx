import React from "react";

export default function Header() {
  return (
    <div>
      <div style={{ height: '10vh', backgroundColor: 'white', marginTop: '20px' }}>
        <div style={{ display: 'flex', height: '10vh', padding: '30px', borderRight: '1px solid #ccc', alignItems: 'center' }}>
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Obzen</span>
              <img className="h-9 w-auto" src="https://obzen.com/img/logo_red.png" alt="" />
            </a>
          </div>
          <div style={{ fontSize: '22px', fontWeight: 'bold', marginRight: '10px' }}>
            {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #ccc' }}></div> {/* This creates the line */}
    </div>
  );
}
