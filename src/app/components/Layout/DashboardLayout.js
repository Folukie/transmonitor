import React from 'react'
import Header from '../Navigation/Header'
import SideNav from '../Navigation/SideNav'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="md:flex">
        <SideNav />
        <div className="bg-grey h-screen px-4 py-8 text-primary-dark flex flex-col flex-1 overflow-y-auto ml-0 md:ml-16 w-full md:w-11/12">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
