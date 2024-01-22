/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header = () => {
  return (
    <header className="fixed z-20 w-full bg-white shadow-lg py-5 px-2 md:px-10">
      <div className="flex justify-between">
        <div className="flex space-x-20 items-center">
          <p className="text-blue font-bold text-2xl ">TransMonitor</p>
          <input value="Search" className="hidden md:block" />
        </div>
        <div className="md:flex space-x-14 items-center hidden">
          <p>Support</p>
          <p>FAQ</p>
          <img alt="notification icon" src="/images/notifs.svg" />
          <div className="flex space-x-2">
            <div className="">
              <p className="text-xs text-right">Hello</p>
              <p className="text-sm">Oluwaleke Ojo</p>
            </div>
            <img src="/images/user.png" alt="user icon" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
