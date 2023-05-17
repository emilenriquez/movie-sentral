import dayjs from 'dayjs';
import { useRouter, useSearchParams } from 'next/navigation';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi2'

export default function StockDatePicker({date = Date.now(),  onNext, onPrevious}) {
  const router = useRouter();
  const format = 'YYYY-MM-DD';


  const navigate =(opt) => {
    const day = opt === 'next' ? dayjs(date).add(1, 'day') : dayjs(date).subtract(1, 'day');
    router.push(`/daily-inventory?date=${day.format(format)}`)
  };

  return (
    <div className='flex justify-between text-slate-700 dark:text-slate-300'>
      <HiChevronLeft onClick={() => navigate('prev')} className='cursor-pointer dark:text-slate-200 hover:text-amber-600 transition-colors duration-500' />
        {dayjs(date).format(format)}
      <HiChevronRight onClick={() => navigate('next')} className='cursor-pointer dark:text-slate-200 hover:text-amber-600 transition-colors duration-500' />
    </div>
  )
}
