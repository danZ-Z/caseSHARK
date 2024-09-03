"use client"
import React, { useState, useEffect, useLayoutEffect } from 'react';
import PhotoToCase from './PhotoToCase';

const images = [
  '/scroll_gallery/case1.jpg', '/scroll_gallery/case2.jpg', '/scroll_gallery/case3.jpg',
  '/scroll_gallery/case4.jpg', '/scroll_gallery/case5.jpg', '/scroll_gallery/case6.jpg',
];


const InfiniteScrollGallery: React.FC = () => {
  const [columns, setColumns] = useState(3);

  const chunkArray = (array: string[], chunkSize: number): string[][] => {
    const result: string[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setColumns(3);
      } else if (window.innerWidth >= 768) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const chunkedImages = chunkArray(images, Math.ceil(images.length / columns));

  useLayoutEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [columns]);

  return (
    <div className="relative w-full h-[1000px] overflow-hidden mt-40 ">

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-100 pointer-events-none z-10"></div>
      
      
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-100 pointer-events-none z-10"></div>

      <div className={`grid ${columns === 3 ? 'grid-cols-3' : columns === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
        {chunkedImages.map((chunk, colIndex) => (
          <div key={colIndex} className={`flex flex-col space-y-2 
          ${columns===3 ? (colIndex === 0 ? 'animate-scroll1-3' : colIndex === 1 ? 'animate-scroll2-3' : 'animate-scroll3-3')
            : columns===2 ? (colIndex === 0 ? 'animate-scroll1-2' : colIndex === 1 ? 'animate-scroll2-2' : 'animate-scroll3-2')
            : columns===1 ? ('animate-scroll2-1') : ('animate-scroll2-1')
          }`}>
            {chunk.map((src, index) => (
              <div key={index} className="w-full">
                <PhotoToCase imgSrc={src} className='rounded-3xl mb-2 bg-[left_50%_top_40%]' />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={`grid ${columns === 3 ? 'grid-cols-3' : columns === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
        {chunkedImages.map((chunk, colIndex) => (
          <div key={colIndex} className={`flex flex-col space-y-2 
            ${columns===3 ? (colIndex === 0 ? 'animate-scroll1-3' : colIndex === 1 ? 'animate-scroll2-3' : 'animate-scroll3-3')
              : columns===2 ? (colIndex === 0 ? 'animate-scroll1-2' : colIndex === 1 ? 'animate-scroll2-2' : 'animate-scroll3-2')
              : columns===1 ? ('animate-scroll2-1') : ('animate-scroll2-1')
            }`}>
            {chunk.map((src, index) => (
              <div key={index} className="w-full">
                <PhotoToCase imgSrc={src} className='rounded-3xl mb-2 bg-[left_50%_top_40%]'/>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollGallery;
