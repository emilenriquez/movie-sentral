
import { Suspense } from 'react';
import InventoryForm from './form';
import StockDatePicker from './stockdatepicker'
import { useSearchParams } from 'next/navigation';
import { getStocks } from '@/services/stocksService';
import ListPlaceHolder from '../Shared/PlaceHolders/ListPlaceHolder';


export default function DailyInventoryForm() {
  const stocks = getStocks();
  const searchParams = useSearchParams();
  const date = searchParams.get('date') || Date.now()



  return (
    <>
      <div className='max-w-xl mx-auto'> <StockDatePicker date={date} /> </div>
      <Suspense fallback={<ListPlaceHolder />}>
        <InventoryForm data={stocks} />
      </Suspense>
    </>
  )
}
