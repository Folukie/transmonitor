import React from 'react'
import { ChartItem } from '../../constants/navigations'

const CardChart = () => {
  return (
    <div className="  space-y-4">
      {ChartItem.map((item, idx) => (
        <div key={idx} className="bg-white py-6 px-4 space-y-2">
          <p className="font-bold text-sm">{item.name}</p>
          <hr className="bg-green h-1 rounded-md" />
          <p>
            {item.sub1}: <span className="text-yellow  font-bold">20</span>
          </p>
          <p className="text-sm">
            {item.sub2}: <span className="text-green font-bold">80</span>
          </p>
          <p className="text-sm">
            {item.sub3}: <span className="text-blue font-bold">100</span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default CardChart
