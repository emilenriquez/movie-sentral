import React from 'react'
import CenteredTabs from '@/components/Shared/CenteredTabs'
import { classNames } from '@/utils'

const tabs = [
  { name: 'Manage Stocks', href: '/', current: true },
  { name: 'Manage Categories', href: '#', current: false },
  { name: 'Daily Inventory', href: '/daily-inventory', current: false },
  { name: 'Order Stocks', href: '#', current: false },
  { name: 'Manage Sales', href: '#', current: false },
]

export default function NavBar({className}) {
  return (
    <div className={classNames(
      className,
      'max-w-6xl mx-auto'
    )}>
      <CenteredTabs tabs={tabs} />
    </div>
  )
}
