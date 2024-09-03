'use client';

import { useSearchParams } from 'next/navigation';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Rnd } from 'react-rnd';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import Steps from '@/components/Steps';
import { ScrollArea } from "@/components/ui/scroll-area"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Selector from '@/components/Selector';
import { Toggle } from '@/components/ui/toggle';
import HandleComponent from '@/components/HandleComponent';
import { Button } from '@/components/ui/button';
import { ChevronsRight } from 'lucide-react';



function CaseDetails () {

  interface Dimensions {
    width: number;
    height: number;
  }

  const searchParams = useSearchParams();
  const imageId = searchParams.get('id');

  const imageUrl = `https://utfs.io/f/${imageId}`;

  const [dimensions, setDimensions] = useState<Dimensions>({ width: 320, height: 200 });
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [selectedToggleMaterial, setSelectedToggleMaterial] = useState<string>("Silicone");
  const [selectedToggleFinish, setSelectedToggleFinish] = useState<string>("Smooth Finish");
  const [selectedToggleColor, setSelectedToggleColor] = useState<string>("Black");
  const [finalPrice, setFinalPrice] = useState<number>(14)
  const [selectedPhone, setSelectedPhone] = useState<string>("iPhone 11")


  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setDimensions({ width: img.width / 4, height: img.height / 4 });
    };
    img.src = imageUrl;
  }, [imageUrl]);

  useEffect(() => {
    {
      selectedToggleMaterial === "Silicone" && selectedToggleFinish === "Smooth Finish" ?
      setFinalPrice(14) :
      selectedToggleMaterial === "Soft Polycarbonate" && selectedToggleFinish === "Smooth Finish" ?
      setFinalPrice(19) :
      selectedToggleMaterial === "Silicone" && selectedToggleFinish === "Textured Finish" ?
      setFinalPrice(17) :
      selectedToggleMaterial === "Soft Polycarbonate" && selectedToggleFinish === "Textured Finish"  ?
      setFinalPrice(22) : null
    }
  })

  const handleFinalProduct = () => {
    const parameters = new URLSearchParams({
      imageId: imageId!,
      width: dimensions.width.toString(),
      height: dimensions.height.toString(),
      x: position.x.toString(),
      y: position.y.toString(),
      color: selectedToggleColor || '',
      model: selectedPhone || '',
      material: selectedToggleMaterial || '',
      finish: selectedToggleFinish || '',
      price: finalPrice.toString(),
    })
    
    window.location.href = `/configure/preview/?${parameters.toString()}`

  }

  return (
    <div className='flex relative z-20'>
          <div className='flex flex-col lg:flex-row w-full justify-center my-0 lg:my-20'>
            <div className='flex justify-center overflow-hidden bg-zinc-100 h-[36rem] w-full max-w-3xl border-2 border-dashed rounded-2xl border-gray-400 p-12'>
              <div className='relative z-0 '>
              <img src={`
                    ${
                          selectedToggleColor === "Black" ? '/case_template_black.png' :
                          selectedToggleColor === "Rose" ? '/case_template_rose.png' :
                          selectedToggleColor === "Blue" ? '/case_template_blue.png' :
                          ""
                          }
                    `} alt="case_template" className='h-[30rem] w-auto pointer-events-none relative z-20' />
                <Rnd
                  size={{ width: dimensions.width, height: dimensions.height }}
                  position={position}
                  onDragStop={(e, d) => {
                    setPosition({ x: d.x, y: d.y });
                    
                  }}
                  onResizeStop={(e, direction, ref, delta, newPosition) => {
                    setDimensions({
                      width: parseInt(ref.style.width, 10),
                      height: parseInt(ref.style.height, 10),
                    });
                    setPosition(newPosition);
                  }}
                  lockAspectRatio
                  resizeHandleComponent={{
                    bottomRight: <HandleComponent/>,
                    bottomLeft: <HandleComponent/>,
                    topRight: <HandleComponent/>,
                    topLeft: <HandleComponent/>
                  }}
                >
                  <Image
                    src={imageUrl}
                    fill
                    alt='your image'
                    className='pointer-events-none border-2 border-blue-500'
                  />
                </Rnd>
              </div>
            </div>
            <div className='flex flex-col h-[36rem] max-w-3xl'>
              <ScrollArea className="w-full h-full bg-white px-6 pt-8">
                    <h2 className='tracking-tight font-bold text-3xl'>
                      Customize your case
                    </h2>
                    <div className='w-full h-px bg-zinc-200 my-6'/>
                    <div className='flex flex-col mx-px gap-5'>
                      <div className='flex flex-col'>
                        <p className='font-semibold text-sm mb-4'>Color:{' '}
                          {
                            `${selectedToggleColor}`
                          }</p>
                        <div className='flex'>
                          <RadioGroup className="flex" defaultValue="black">
                              <RadioGroupItem 
                                className={`bg-black border-4  border-white ${selectedToggleColor === "Black" ? 'border-none' : ''}`} 
                                value="black" 
                                onClick={() => setSelectedToggleColor("Black")}/>
                              <RadioGroupItem 
                                className={`bg-red-900 border-4  border-white ${selectedToggleColor === "Rose" ? 'border-none' : ''}`}
                                value="blue" 
                                onClick={() => setSelectedToggleColor("Rose")}/>
                              <RadioGroupItem 
                                className={`bg-blue-900 border-4  border-white ${selectedToggleColor === "Blue" ? 'border-none' : ''}`}
                                value="red" 
                                onClick={() => setSelectedToggleColor("Blue")}/>
                          </RadioGroup>
                        </div>
                      </div>
                      <div className='flex flex-col'>
                        <p className='font-semibold text-sm mb-4'>Model</p>
                        <Selector selectedPhone={setSelectedPhone} />
                      </div>
                      <div className='flex flex-col'>
                        <p className='font-semibold text-sm mb-4'>Material</p>
                        <Toggle 
                          className={`rounded-sm border-2 py-6 pl-5 ${selectedToggleMaterial === "Silicone" ? 'border-blue-500' : ''}`}
                          variant="outline"
                          onClick={() => setSelectedToggleMaterial("Silicone")}
                          >
                            <div className='flex flex-row w-full justify-between'>
                              <p>Silicone</p>
                              <p>0.00€</p>
                            </div>
                        </Toggle>
                        <Toggle 
                          className={`rounded-sm border-2 py-9 pl-5 mt-4 ${selectedToggleMaterial === "Soft Polycarbonate" ? 'border-blue-500' : ''}`}
                          variant="outline"
                          onClick={() => setSelectedToggleMaterial("Soft Polycarbonate")}
                          >
                            <div className='flex flex-row w-full justify-between'>
                              <div className='flex flex-col items-start justify-start'>
                                <p>Soft Polycarbonate</p>
                                <p className='opacity-50 flex justify-start text-left'>Scratch-resistant coating</p>
                              </div>
                              <p className='flex items-center'>5.00€</p>
                            </div>
                        </Toggle>
                      </div>
                      <div className='flex flex-col'>
                        <p className='font-semibold text-sm mb-4'>Finish</p>
                        <Toggle 
                          className={`rounded-sm border-2 py-6 pl-5 ${selectedToggleFinish === "Smooth Finish" ? 'border-blue-500' : ''}`}
                          variant="outline"
                          onClick={() => setSelectedToggleFinish("Smooth Finish")}
                          >
                            <div className='flex flex-row w-full justify-between'>
                              <p>Smooth Finish</p>
                              <p>0.00€</p>
                            </div>
                        </Toggle>
                        <Toggle 
                          className={`rounded-sm border-2 py-8 pl-5 mb-6 mt-4 ${selectedToggleFinish === "Textured Finish"  ? 'border-blue-500' : ''}`}
                          variant="outline"
                          onClick={() => setSelectedToggleFinish("Textured Finish" )}
                          >
                            <div className='flex flex-row w-full justify-between'>
                              <div className='flex flex-col items-start'>
                                <p>Textured Finish</p>
                                <p className='opacity-50'>Soft grippy texture</p>
                              </div>
                              <p className='flex items-center'>3.00€</p>
                            </div>
                        </Toggle>
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white pointer-events-none z-10"/>

              </ScrollArea>
              <div className='flex flex-row items-center bg-white py-4 px-6 mx-px'>
                <p className='font-semibold w-20 text-center'>{`${finalPrice}.00€`}</p>
                <Button onClick={handleFinalProduct} className="ml-5 px-4 py-2 bg-blue-500 text-white w-full">
                  Continue
                  <ChevronsRight className='ml-4'/>
                </Button>
              </div>
            </div>
          </div>
        </div>
  )
}

const Page = () => {
  
  return (
    <div className="flex justify-center grainy-light">
      <MaxWidthWrapper>
        <Steps/>
        <Suspense fallback={<div>Loading...</div>}>
          <CaseDetails/>
          </Suspense>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
