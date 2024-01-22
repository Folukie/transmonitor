import React from 'react'
import { AreaChart } from '@tremor/react'
import { chartdata, chartdata2 } from '../../constants/chart'

const customTooltip = (props) => {
  const { payload, active } = props
  if (!active || !payload) return null
  return (
    <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div className={`w-1 flex flex-col bg-blue  rounded`} />
          <div className="space-y-1">
            <p className="text-tremor-content">{category.dataKey}</p>
            <p className="font-medium text-tremor-content-emphasis">
              {category.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

const Chart = ({ range }) => {
  return (
    <>
      <AreaChart
        className="h-72 w-full mt-4"
        data={range == '1' ? chartdata : chartdata2}
        index="date"
        categories={['Running']}
        colors={['#0294FF']}
        yAxisWidth={0}
        customTooltip={customTooltip}
        showAnimation={true}
        animationDuration={5}
      />
    </>
  )
}

export default Chart
