'use client'
import React from 'react'
import Clock from '@/components/Shared/Clock'
import DailyInventoryForm from '@/components/DailyInventoryForm'
import { useHydrated } from 'react-hydration-provider'

export default function DailyInventory() {
  const isHydrated = useHydrated()

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg">
      <div className="mx-auto max-w-7xl">
        <div className="dark:bg-gray-900 py-5 rounded-lg">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-start">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">Daily Inventory</h1>
                <p className="mt-2 text-sm text-slate-800 dark:text-gray-300">
                  Log daily actual inventory counts
                </p>
              </div>
              <div className='text-right align-top'>
                {isHydrated && <Clock />}
              </div>
            </div>
            <div className="mt-8 flow-root transition-color duration-500">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <DailyInventoryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
