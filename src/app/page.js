'use client' /* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import DashboardLayout from './components/Layout/DashboardLayout'
import CardItem from './components/Card/CardItem'
import { Transactions } from './constants/navigations'
import CardChart from './components/Card/CardChart'
import Chart from './components/Card/Chart'
import { useState } from 'react'
import PaymentsTable from './components/Table/PaymentsTable'
import { TableData } from './constants/table'

export default function Home() {
  const [monthsRange, setMonthsRange] = useState('1')
  const handleMonthsRange = (number) => {
    setMonthsRange(number)
  }
  const day = new Date().getDate()
  const year = new Date().getFullYear()

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const currentMonth = months[new Date().getMonth()]

  return (
    <DashboardLayout>
      <div className="mt-20 space-y-7">
        <div className="grid md:grid-cols-4 space-y-3 md:space-y-0 md:space-x-3">
          {Transactions.map((transaction, idx) => (
            <CardItem
              name={transaction.name}
              number={transaction.number}
              key={idx}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-6">
          <div className="relative w-3/4 bg-white p-5">
            <div className="flex items-center justify-between gap-5">
              <h1 className="text-[#4F4F4F] xl:text-[18px] text-[15px] font-bold text-left fulldate">
                Today: {day} {currentMonth} {year}
              </h1>
              <div className="absolute right-5 flex items-center justify-center gap-5">
                <select
                  id="myDropdown"
                  className="text-[#7F8FA4] text-[12px] border border-[#7F8FA4] rounded-md p-[10px] bg-transparent "
                  name="numbers"
                  value={monthsRange}
                  onChange={(e) => setMonthsRange(e.target.value)}
                >
                  <option value="1">1 Jan - 1 Jun</option>
                  <option value="2">1 Jul - 1 Dec</option>
                </select>
                <div className="flex items-center justify-center gap-[13.28px]"></div>
              </div>
            </div>
            <Chart range={monthsRange} />
          </div>
          <CardChart />
        </div>
        <PaymentsTable data={TableData} />
      </div>
    </DashboardLayout>
  )
}
