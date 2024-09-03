"use client"
import { useEffect, useState } from "react";

const Steps = () => {

    const [finalIdentifier, setFinalIdentifier] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const urlParts = window.location.href.split('/');
          const identifier = urlParts[urlParts.length - urlParts.length + 4];
          const finalUrlParts = identifier.split('?')
          setFinalIdentifier(finalUrlParts[0])
        }
      });

    return (
        <div>
            <ol className="flex flex-col lg:flex-row bg-white border border-t-0" >
                <li className="flex-1 border-b lg:border-r lg:border-b-0">
                    <div className="flex flex-row lg:flex-col justify-between relative">
                        <div className="flex flex-row items-center gap-2 py-4 px-6 h-32">
                            <div className="min-w-24 flex justify-center">
                                <img src="/steps/shark1_step.png" alt="shark1_step"  className="w-[4.5rem]"/>
                            </div>
                            <div className="flex flex-col text-sm">
                                <p className="font-semibold">Step 1: Add image</p>
                                <p>Choose an image for your case</p>   
                            </div>
                        </div>
                        <div className={`absolute left-0 top-0 w-1 h-full lg:bottom-0 lg:top-auto lg:w-full lg:h-1
                            ${
                                finalIdentifier === 'upload' ? (
                                    'bg-gray-700'
                                ) : ( 
                                    'bg-blue-500'
                                )
                            }`}/>
                    </div>
                </li>
                <li className="flex-1 border-b lg:border-r">
                    <div className="flex flex-row lg:flex-col justify-between relative">
                        <div className="flex flex-row items-center gap-2 py-4 px-6 h-32">
                            <img src="/steps/shark2_step.png" alt="shark2_step"  className="w-24 h-auto"/>
                            <div className="flex flex-col text-sm">
                                <p className="font-semibold">Step 2: Customize design</p>
                                <p>Make your case yours</p>   
                            </div>
                        </div>
                        <div className={`absolute left-0 top-0 w-1 h-full lg:bottom-0 lg:top-auto lg:w-full lg:h-1
                            ${
                                finalIdentifier === 'upload' ? (
                                    'bg-gray-400'
                                ) : finalIdentifier === 'design' ? (
                                    'bg-gray-700'
                                ) : (
                                    'bg-blue-500'
                                )
                            }`}/>
                    </div>
                </li>
                <li className="flex-1">
                    <div className="flex flex-row lg:flex-col justify-between relative">
                        <div className="flex flex-row items-center gap-2 py-4 px-6 h-32">
                            <img src="/steps/shark3_step.png" alt="shark3_step"  className="w-24 h-auto"/>
                            <div className="flex flex-col text-sm">
                                <p className="font-semibold">Step 3: Summary</p>
                                <p>Review your final design</p>   
                            </div>
                        </div>
                        <div className={`absolute left-0 top-0 w-1 h-full lg:bottom-0 lg:top-auto lg:w-full lg:h-1
                            ${
                                finalIdentifier === 'upload' ? (
                                    'bg-gray-400'
                                ) : finalIdentifier === 'design' ? (
                                    'bg-gray-400'
                                ) : (
                                    'bg-gray-700'
                                )
                            }`}/>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default Steps