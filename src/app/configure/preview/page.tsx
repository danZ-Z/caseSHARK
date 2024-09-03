'use client';

import { useSearchParams } from 'next/navigation';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Suspense } from 'react';
import Steps from '@/components/Steps';
import { Check, ChevronsRight } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

// Component to handle rendering based on search parameters
function CaseDetails() {
  const searchParams = useSearchParams();
  
  const imageId = searchParams.get('imageId');
  const width = parseInt(searchParams.get('width') || '320', 10);
  const height = parseInt(searchParams.get('height') || '200', 10);
  const x = parseInt(searchParams.get('x') || '0', 10);
  const y = parseInt(searchParams.get('y') || '0', 10);
  const color = searchParams.get('color') || 'Black';
  const model = searchParams.get('model') || 'Iphone 11';
  const material = searchParams.get('material') || 'Silicone';
  const finish = searchParams.get('finish') || 'Smooth Finish';
  const price = parseInt(searchParams.get('price') || '14', 10);

  const imageUrl = `https://utfs.io/f/${imageId}`;

  const parameters = new URLSearchParams({
    price: price.toString(),
  });

  return (
    <div className='flex flex-col lg:flex-row py-20 justify-center'>
      <div className='flex justify-center h-[30rem] w-full lg:w-[21rem] '>
        <img 
          src={`${
            color === "Black" ? '/case_template_black_white_edges.png' :
            color === "Rose" ? '/case_template_rose_white_edges.png' :
            color === "Blue" ? '/case_template_blue_white_edges.png' : ""
          }`}
          alt="case_template" 
          className='flex h-[30rem] w-auto pointer-events-none'
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: `${width}px ${height}px`,
            backgroundPosition: `${x}px ${y}px`,
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='flex w-full px-10 flex-col'>
          <h2 className='font-bold text-3xl'>Your {model} case </h2>
          <div className='flex items-center py-2'>
            <Check className="text-blue-500 w-7 h-7 mr-2"/>
            <p className='text-lg'>In stock and ready to ship</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-2xl'>Summary</h2>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row text-lg border-b items-center'>
                <h2 className='font-semibold'>Color:</h2>
                <p className='ml-2'>{color}</p>
              </div>
              <div className='flex flex-row text-lg border-b items-center'>
                <h2 className='font-semibold'>Material:</h2>
                <p className='ml-2'>{material}</p>
              </div>
              <div className='flex flex-row text-lg border-b items-center'>
                <h2 className='font-semibold'>Finish:</h2>
                <p className='ml-2'>{finish}</p>
              </div>
            </div>

            <h2 className='font-bold text-2xl'>Highlights</h2>

            <ul className="flex flex-col gap-2  text-xl">
              <li className="flex gap-3">High-quality durable material</li>
              <li className="flex gap-3">Resistant to scratchmarks and fingerprints</li>
              <li className="flex gap-3">3 year warranty</li>
              <li className="flex gap-3">Wireless charging</li>
            </ul>

          </div>
        </div>

        <div className='w-full px-10 pt-5 md:p-0 md:text-right flex flex-col gap-2 text-lg'>
          <div className='w-full h-full flex flex-col border-b gap-5'>
            <h2 className='font-bold text-3xl'>Check your order</h2>
            <div className='flex flex-col gap-1 '>
              {material === "Soft Polycarbonate" && <p>Soft Polycarbonate - 5.00€</p>}
              {finish === "Textured Finish" && <p>Textured Finish - 3.00€</p>}
            </div>
          </div>
          <div className='flex flex-col gap-5 '>
            <p className='font-semibold'>Final price - {price}.00€</p>
            <div className='flex justify-end'>
              <Link
                href={`/configure/checkout/?${parameters.toString()}`}
                className={buttonVariants({
                  size: 'lg',
                  className: 'flex mx-auto md:m-0 items-center gap-1'
                })}
              >
                Check out<ChevronsRight className="ml-5 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Page component that wraps CaseDetails with Suspense
const Page = () => {
  return (
    <div className="flex justify-center grainy-light">
      <MaxWidthWrapper>
        <Steps />
        <Suspense fallback={<div>Loading...</div>}>
          <CaseDetails />
        </Suspense>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
