import React from "react";

export default function Header() {
  return (
  <div style={{ display: 'flex', height: '10vh', backgroundColor: 'white' }}>
    <div style={{ flex: 1, padding: '20px', borderRight: '1px solid #ccc' }}>
    <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Obzen</span>
            <img className="h-8 w-auto" src="https://obzen.com/img/logo_red.png" alt="" />
          </a>
        </div>
      <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        <span style={{ float: 'right', fontSize: '18px' }}> {new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  </div>
  );
}
