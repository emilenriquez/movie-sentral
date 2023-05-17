'use client'
import { Fragment, useState } from 'react'
import {CiUser as UsersIcon} from 'react-icons/ci';
import { Combobox, Dialog, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const testData =  [
  {
    id: 10,
    sku: 'SKU0010',
    name: 'Caramel Powder',
    description: 'Caramel Powder used for caramel macchiato',
    quantity: 22,
    cost_per_unit: 225,
    price_per_unit: 225,
    unit_of_measure: 'kg',
    reorder_level: 5,
    status: true,
    created_at: '2023-04-28 09:09:09',
    updated_at: '2023-04-28 09:09:09',
    is_deleted: false
  },
  {
    id: 1,
    sku: 'SKU0001',
    name: 'classic milk tea powder',
    description: 'classic milk tea powder',
    quantity: 25,
    cost_per_unit: 285,
    price_per_unit: 0,
    unit_of_measure: 'pcs',
    reorder_level: 10,
    status: true,
    created_at: '2023-04-28 09:09:09',
    updated_at: '2023-04-28 09:09:09',
    is_deleted: false
  },
  {
    id: 2,
    sku: 'SKU0002',
    name: 'pearls',
    description: 'ersao pearls',
    quantity: 33,
    cost_per_unit: 95,
    price_per_unit: 0,
    unit_of_measure: 'pcs',
    reorder_level: 20,
    status: true,
    created_at: '2023-04-28 09:09:09',
    updated_at: '2023-04-28 09:09:09',
    is_deleted: false
  },
  {
    id: 3,
    sku: 'SKU0003',
    name: 'beef',
    description: 'marinated beef',
    quantity: 10000,
    cost_per_unit: 0.375,
    price_per_unit: 0,
    unit_of_measure: 'grams',
    reorder_level: 3000,
    status: true,
    created_at: '2023-04-28 09:09:09',
    updated_at: '2023-04-28 09:09:09',
    is_deleted: false
  },
  {
    id: 4,
    sku: 'SKU0004',
    name: 'full cream milk (arla)',
    description: 'arla full cream milk',
    quantity: 5,
    cost_per_unit: 0.375,
    price_per_unit: 0,
    unit_of_measure: 'pc(s)',
    reorder_level: 10,
    status: true,
    created_at: '2023-04-28 09:09:09',
    updated_at: '2023-04-28 09:09:09',
    is_deleted: false
  },
  {
    id: 5,
    sku: 'SKU0005',
    name: 'Strawberry Syrup',
    description: 'Strawberry Syrup',
    quantity: 5,
    cost_per_unit: 0.375,
    price_per_unit: 0,
    unit_of_measure: 'pc(s)',
    reorder_level: 2,
    status: true,
    created_at: '2023-04-28 09:09:09',
    updated_at: '2023-04-28 09:09:09',
    is_deleted: false
  },
  {
    id: 6,
    sku: 'SKU0006',
    name: 'Corndog',
    description: 'Corn dog hot dog with mozarella cheese',
    quantity: 15,
    cost_per_unit: 0.375,
    price_per_unit: 0,
    unit_of_measure: 'pc(s)',
    reorder_level: 6,
    status: true,
    created_at: '2023-04-28 09:09:09',
    updated_at: '2023-04-28 09:09:09',
    is_deleted: false
  },
  {
    id: 7,
    sku: 'SKU0007',
    name: 'Pita Bread',
    description: 'Pita wrap bread for beef wrap',
    quantity: 20,
    cost_per_unit: 0.375,
    price_per_unit: 0,
    unit_of_measure: 'pc(s)',
    reorder_level: 10,
    status: true,
    created_at: '2023-04-28 09:09:09',
    updated_at: '2023-04-28 09:09:09',
    is_deleted: false
  },
  {
    id: 8,
    sku: 'SKU0008',
    name: 'U cups (L)',
    description: 'U cups large',
    quantity: 143,
    cost_per_unit: 4.5,
    price_per_unit: 0,
    unit_of_measure: 'pc(s)',
    reorder_level: 50,
    status: true,
    created_at: '2023-04-28 09:09:09',
    updated_at: '2023-04-28 09:09:09',
    is_deleted: false
  },
  {
    id: 9,
    sku: 'SKU0009',
    name: 'U cups (M)',
    description: 'U cups Medium',
    quantity: 162,
    cost_per_unit: 4.5,
    price_per_unit: 0,
    unit_of_measure: 'pc(s)',
    reorder_level: 150,
    status: true,
    created_at: '2023-04-28 09:09:09',
    updated_at: '2023-04-28 09:09:09',
    is_deleted: false
  }
];

export default function CommandPalette({data = testData, shouldOpen = false, setShouldOpen}) {
  const [query, setQuery] = useState('');
  // TODO: should be loaded dynamically instead of loading all data at once
  // const searchItems = await data;
  const searchItems = data;

  return (
    <Transition.Root show={shouldOpen} as={Fragment} afterLeave={() => setQuery('')} appear>
      <Dialog as="div" className="relative z-10" onClose={setShouldOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox onChange={(person) => alert('changing...') || (window.location = person.url)}>
                <Combobox.Input
                  className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  onChange={(event) => event.preventDefault() || setQuery(event.target.value)}
                />

                {searchItems.length && (
                  <Combobox.Options
                    static
                    className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                  >
                    {searchItems.map((data) => (
                      <Combobox.Option
                        key={data.id}
                        value={data.name}
                        className={({ active }) =>
                          classNames(
                            'cursor-default select-none rounded-md px-4 py-2',
                            active && 'bg-indigo-600 text-white'
                          )
                        }
                      >
                        {data.name}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}

                {query !== '' && searchItems.length === 0 && (
                  <div className="px-4 py-14 text-center sm:px-14">
                    <UsersIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                    <p className="mt-4 text-sm text-gray-900">No people found using that search term.</p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
