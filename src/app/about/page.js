import Image from 'next/image'

export default function ABOUT() {
  return (
    <main className='mt-3 space-y-6'>
      <h1 className=' text-slate-900 dark:text-amber-200 font-light italic text-3xl tracking-wide'> About </h1>
      <div className='space-y-4 dark:font-thin text-justify'>
        <p>
          <b>restoApp</b> with inventory tracking is a software platform designed to help restaurant owners and managers manage all aspects of their restaurant operations, including inventory management.
          This system enables restaurant staff to track inventory levels, monitor ingredient usage, and set up alerts for low stock items.
        </p>

        <p>
          At its core, <b>restoApp</b> with inventory tracking is designed to streamline restaurant operations and improve efficiency.
          It helps restaurant staff to identify and reduce waste, lower food costs, and optimize inventory levels.
          This results in better cost control, increased profitability, and more efficient use of staff time.
        </p>

        <p>
          One of the key features of <b>restoApp</b> with inventory tracking is real-time inventory tracking.
          This feature enables restaurant staff to monitor ingredient usage and stock levels, which helps to reduce waste and minimize the risk of running out of key ingredients during peak service hours.
          The system can also generate automatic alerts when inventory levels fall below a specified threshold, ensuring that restaurant staff are aware of low stock levels and can take appropriate action to restock inventory.
        </p>

        <p>
          Another important feature of <b>restoApp</b> with inventory tracking is the ability to manage recipes and menus.
          This feature allows restaurant owners and managers to easily add and edit menu items, as well as adjust recipes and ingredient quantities to reflect changing inventory levels.
          This ensures that menu items are always available and that food costs are optimized.
        </p>

        <p>
          Overall, <b>restoApp</b> with inventory tracking is an essential tool for any restaurant looking to improve its efficiency, reduce waste, and increase profitability.
          By providing real-time inventory tracking, recipe management, and menu optimization, this system can help restaurant owners and managers to streamline their operations, reduce costs, and provide better service to their customers.
        </p>
      </div>
    </main>
  )
}
