import React from 'react'
import Table from './Table'

const PaymentsTable = ({ data }) => {
  return (
    <Table
      data={data}
      columns={[
        {
          name: 'Item Type',
          selector: (row) => row.type,
        },
        {
          name: 'Price',
          selector: (row) => row.price,
        },
        {
          name: 'Transaction No',
          selector: (row) => row.no,
        },
        {
          name: 'Time',
          selector: (row) => row.time,
        },
        {
          name: 'Status',
          selector: (row) => (
            <button
              className={`${
                row.status.toLowerCase() === 'reconcilled'
                  ? 'border-green text-green'
                  : 'border-yellow text-yellow'
              }  border rounded-full px-3 py-1`}
            >
              {row.status}
            </button>
          ),
        },
      ]}
    />
  )
}

export default PaymentsTable
