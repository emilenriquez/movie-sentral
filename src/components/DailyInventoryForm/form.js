'use client'

export default async function InventoryForm({data = []}) {
  const stocks = await data;
  return (
    <ul role="list" className="mx-auto divide-y divide-indigo-900 max-w-xl">
        {stocks.map((stock) => (
          <li key={stock.id} className="flex items-center justify-between gap-x-3 py-2">
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">{stock.name}</p>
                <p
                  className={
                    'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                  }
                >
                  {stock.category_name}
                </p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
                aria-describedby="price-currency"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-500 sm:text-sm" id="price-currency">
                  {stock.unit_of_measure}
                </span>
              </div>
            </div>
            </div>
          </li>
        ))}
      </ul>
  )
}
