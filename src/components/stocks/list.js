'use client'

export default async function List({promise}) {
  const stocks = await promise;


  return (
    <table className="min-w-full divide-y divide-gray-700">
      <thead>
        <tr>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-white sm:pl-0">
            SKU
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white">
            Name
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white">
            Quantity
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white">
            Reorder Level
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        {stocks.map((stock) => (
          <tr key={stock.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-white sm:pl-0">
              {stock.sku}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-800 dark:text-gray-300">{stock.name}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-800 dark:text-gray-300">{stock.quantity} ({stock.unit_of_measure})</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-800 dark:text-gray-300">{stock.reorder_level}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a href="#" className="text-indigo-400 hover:text-indigo-300">
                Edit<span className="sr-only">, {stock.name}</span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}










async function Stocks({ promise }) {
  const [shouldOpenSearch, setShouldOpenSearch] = useState(false);
  const stocks = getStocks();

  return (
    <table className="min-w-full divide-y divide-gray-700">
      <thead>
        <tr>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-white sm:pl-0">
            SKU
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white">
            Name
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white">
            Quantity
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white">
            Reorder Level
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        {stocks.map((stock) => (
          <tr key={stock.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-white sm:pl-0">
              {stock.sku}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-800 dark:text-gray-300">{stock.name}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-800 dark:text-gray-300">{stock.quantity} ({stock.unit_of_measure})</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-800 dark:text-gray-300">{stock.reorder_level}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a href="#" className="text-indigo-400 hover:text-indigo-300">
                Edit<span className="sr-only">, {stock.name}</span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}