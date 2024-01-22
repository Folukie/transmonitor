import {
  AllOrdersIcon,
  AllPaymentsIcon,
  ManualIcon,
  MerchantProfIcon,
  OverviewIcon,
  PendingOrdersIcon,
  RecOrdersIcon,
  RecPaymentsIcon,
  UnRecPaymentsIcon,
} from '../Icons'

export const Main = [{ name: 'overview', icon: <RecPaymentsIcon /> }]

export const Payments = [
  {
    name: 'all payments',
    icon: <AllPaymentsIcon />,
  },
  {
    name: 'reconciled payments',
    icon: <RecPaymentsIcon />,
  },
  {
    name: 'un - reconciled payments',
    icon: <UnRecPaymentsIcon />,
  },
  {
    name: 'manual settlements',
    icon: <ManualIcon />,
  },
]
export const Orders = [
  {
    name: 'all orders',
    icon: <RecPaymentsIcon />,
  },
  {
    name: 'pending orders',
    icon: <UnRecPaymentsIcon />,
  },
  {
    name: 'reconciled orders',
    icon: <RecPaymentsIcon />,
  },
  {
    name: 'merchant profile',
    icon: <AllPaymentsIcon />,
  },
]

export const Transactions = [
  {
    name: 'Daily Transaction Volume',
    number: '2,342',
  },
  {
    name: 'Daily Transaction Value',
    number: '₦4,000,000',
  },
  {
    name: 'Total Transaction Volume',
    number: '452,000',
  },
  {
    name: 'Daily Transaction Value',
    number: '₦4,000,000',
  },
]

export const ChartItem = [
  {
    name: 'Orders',
    sub1: 'Pending Orders',
    sub2: 'Reconcilled Orders',
    sub3: ' Total Orders',
  },
  {
    name: 'Payments',
    sub1: 'Un-reconcilled Payments',
    sub2: 'Reconcilled Payments',
    sub3: ' Total Payments',
  },
]
