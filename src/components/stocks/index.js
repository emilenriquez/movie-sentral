'use client'

import CommandPalette from '@/components/CommandPalette';
import { Suspense, useState } from 'react';
import {CiSearch} from 'react-icons/ci'
import { getStocks } from '@/services/stocksService'
import List from './list';
import ListPlaceHolder from '@/components/Shared/PlaceHolders/ListPlaceHolder';

function Stocks() {
  console.log('getStocks', getStocks);
  const [shouldOpenSearch, setShouldOpenSearch] = useState(false);
  const stocks = getStocks();


  const handleClose = () => {
    setShouldOpenSearch(false);
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg">
      {/* <Suspense fallback='loading...'> */}
        {/* <CommandPalette shouldOpen={shouldOpenSearch} setShouldOpen={handleClose} /> */}
      {/* </Suspense> */}


      <div className="mx-auto max-w-7xl">
        <div className="dark:bg-gray-900 py-10 rounded-lg">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">Stocks</h1>
                <p className="mt-2 text-sm text-slate-800 dark:text-gray-300">
                  Stocks List
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex space-x-4">
                <button
                  type="button"
                  className="transition-all duration-100 block rounded-md bg-blue-300 hover:bg-blue-400 dark:bg-amber-500 px-3 py-2 text-center text-sm font-semibold text-slate-900 dark:text-white hover:text-slate-100  dark:hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Receive Stocks
                </button>

                <button
                  type="button"
                  className="transition-all duration-100 block rounded-md bg-amber-400 hover:bg-amber-300 dark:bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-slate-900 dark:text-white hover:text-slate-100  dark:hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Stock Transfer
                </button>
                {/* <button className='rounded-lg text-2xl hover:text-amber-400' onClick={() => setShouldOpenSearch(true)} >
                  <CiSearch />
                </button> */}
              </div>
            </div>
            <div className="mt-8 flow-root transition-color duration-500">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <Suspense fallback={<ListPlaceHolder />}>
                    <List promise={stocks} />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stocks;