'use client'
import React from 'react'

export default function ListPlaceHolder({numberOfItems = 10}) {
  const items = Array.from({ length: numberOfItems }, (value, index) => index);

  return (
    <div role="status" class="max-w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
      {items.map((index) => (
       <div class="flex items-center justify-between pt-4" key={index}>
          <div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
      ))}
        <span class="sr-only">Loading...</span>
    </div>

  )
}
