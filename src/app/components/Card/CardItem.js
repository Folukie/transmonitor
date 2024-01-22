import Image from 'next/image'
import React from 'react'

const CardItem = ({ name, number }) => {
  return (
    <div className="bg-white py-6 px-3 flex justify-between">
      <div className="space-y-2">
        <p className="text-xs">{name}</p>
        <h3>{number}</h3>
      </div>
      <Image src="/images/graph.svg" width={80} height={80} alt="graph icon" />
    </div>
  )
}

export default CardItem
