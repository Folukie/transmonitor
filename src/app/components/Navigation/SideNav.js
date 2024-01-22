import Link from 'next/link'
import React from 'react'
import { Main, Payments, Orders } from '../../constants/navigations'

const SideNav = () => {
  return (
    <nav className="hidden md:block pt-28 relative  h-screen min-h-full overflow-x-hidden overflow-y-auto pl-8 py-8 w-64">
      <div className="space-y-8">
        <button className="bg-green rounded-full p-3 text-sm text-white font-bold">
          GENERATE INVOICE
        </button>

        <div className="space-y-2">
          <p className="text-xs ">Main</p>
          <ul>
            {Main.map((item, idx) => (
              <li key={idx} className=" flex gap-x-3 capitalize text-sm">
                {item.icon} {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xs ">Payments</p>

          <ul className="space-y-4">
            {Payments.map((item, idx) => (
              <li key={idx} className=" flex gap-x-3 capitalize text-sm">
                {item.icon} {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xs ">Orders</p>

          <ul className="space-y-4">
            {Orders.map((item, idx) => (
              <li key={idx} className=" flex gap-x-3 capitalize text-sm">
                {item.icon} {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SideNav
