import { Icons } from "@/components/Icons";
import InfiniteScrollGallery from "@/components/InfiniteScrollGallery";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PhotoToCase from "@/components/PhotoToCase";
import { buttonVariants } from "@/components/ui/button";
import { Check, ChevronsRight, Star } from "lucide-react";
import Link from "next/link";


export default function Home() {

  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper>
        <div className="flex flex-col mx-auto px-6 lg:px-0 lg:pt-4 text-center">

            <h2 className="w-fit font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight !leading-tight mt-16 ">
              Create your <span className="bg-blue-500 text-white p-0">custom case</span> 
              {' '}with your image</h2>

            <div className="mx-auto mt-10 text-2xl">
              You can make your phone special with just a few clicks. 
              With <span className="font-semibold">case<span className="text-blue-500">shark</span></span>, 
              you protect more than just your phone. You protect your memories with it.
            </div>

            <ul className="flex flex-col items-center mt-8 gap-2 font-medium text-xl">
                <li className="flex gap-3">
                  <Check className="text-blue-500"/>
                  High-quality material</li>
                <li className="flex gap-3">
                  <Check className="text-blue-500"/>
                  Iphone 11 and newer supported</li>
                <li className="flex gap-3">
                  <Check className="text-blue-500"/>
                  3 year warranty</li>
            </ul>

            <div className="flex mx-auto mt-5 gap-0.5">
                <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
            </div>
            

            <div className="flex mx-auto mt-3 -space-x-3">
                <img 
                src='/user1.jpg'
                alt="user1"
                className="w-10 h-10 rounded-full ring-2 ring-blue-100"/>
                <img 
                src='/user2.jpg'
                alt="user2"
                className="w-10 h-10 rounded-full ring-2 ring-blue-100"/>
                <img 
                src='/user3.jpg'
                alt="user3"
                className="w-10 h-10 rounded-full ring-2 ring-blue-100"/>
            </div>

              <p className="mt-3"><span className="font-semibold">500+</span> happy customers</p>

        </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className="md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center my-10">
              <img className="h-[28rem] w-64 bg-[url('/main_case.jpg')] bg-center mr-0 md:mr-5 shadow-2xl rounded-md"/>
              <img 
                src="/plus.png" 
                alt="plus"
                className="w-auto h-24 mr-5 hidden xl:block" />
              <img 
                src="/case_template.png" 
                alt="case_template"
                className="h-[30rem] w-auto mr-5 hidden xl:block "/>
              <img 
                src="/arrow_for_case.png" 
                alt="arrow_case"
                className="w-auto h-20 mt-10 md:mr-5 md:mt-0 rotate-90 md:rotate-0 z-10" />
              <PhotoToCase 
                imgSrc="/main_case.jpg" 
                className="h-[30rem] md:min-w-min mt-10 md:mt-0 bg-[left_50%_top_45%]"/>
        </div>

        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 grainy-dark">
        <MaxWidthWrapper>
          <div>
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <h2 className="w-fit font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight !leading-tight mr-5 text-center order-2 lg:order-0">
                What our{' '}
                <span className="relative">
                  customers <Icons.underline className="absolute inset-x-0 bottom-0 text-blue-500"/>
                  </span>{' '}
                  think</h2>
              <img src="/shark.png" alt="shark" className="w-auto h-40 order-0 lg:order-2"/>
            </div>
              <div className="grid max-w-2xl grid-cols-1 lg:grid-cols-2 lg:max-w-none gap-5  px-4 pt-10 mx-auto lg:mx-0">
                <div className="flex flex-col gap-8">
                  <div className="flex">
                    <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                    <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                    <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                    <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                    <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                  </div>
                  <div className="text-xl leading-8">
                    <p>&quot;This case is something I&apos;ve been looking for for a long time. 
                      It is not only about the <span className="bg-black text-white p-0.5">quality of the case itself</span>, 
                      but also about the image on the back. 
                      I&apos;ve had this case for over a year now and can&apos;t even tell 
                      the difference between the new case and this one. I just love it.&quot;</p>
                  </div>
                  <div className="flex items-center">
                    <img 
                        src='/user3.jpg'
                        alt="user3"
                        className="w-12 h-12 rounded-full"/>
                        <div className="flex flex-col ml-5">
                          <p className="font-semibold">Laura</p>
                          <div className="flex items-center">
                            <Check className="text-blue-500 w-5 h-5 mr-2"/>
                            <p className="text-zinc-500">
                              Verified User
                            </p>
                          </div>
                        </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex">
                    <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                    <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                    <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                    <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                    <Star className="h-5 w-5 text-blue-500 fill-blue-500"/>
                  </div>
                  <div className="text-xl leading-8">
                    <p>&quot;I have a construction job and normally have my phone 
                      along with my keys or other things that led to some 
                      big scrachmark on my old cases, but now that problem goes 
                      away and I have <span className="bg-black text-white p-0.5">exactly zero scratchmarks</span> on this case. 5 out of 5.&quot;</p>
                  </div>
                  <div className="flex items-center">
                    <img 
                        src='/user2.jpg'
                        alt="user2"
                        className="w-12 h-12 rounded-full"/>
                        <div className="flex flex-col ml-5">
                          <p className="font-semibold">Madison</p>
                          <div className="flex items-center">
                            <Check className="text-blue-500 w-5 h-5 mr-2"/>
                            <p className="text-zinc-500">
                              Verified User
                            </p>
                          </div>
                        </div>
                  </div>
                </div>
              </div>

            <InfiniteScrollGallery/>
          </div>
          
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col text-center px-6 lg:px-0">
            <h2 className="w-fit font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight !leading-tight mt-16 ">
                Take your favorite photo and get <span className="bg-blue-500 text-white p-0">your own case</span> now</h2>

            <ul className="flex flex-col items-center mt-8 gap-2 font-medium text-xl">
                <li className="flex gap-3">
                  <Check className="text-blue-500"/>
                  High-quality durable material</li>
                <li className="flex gap-3">
                  <Check className="text-blue-500"/>
                  Resistant to scratchmarks and fingerprints</li>
                <li className="flex gap-3">
                  <Check className="text-blue-500"/>
                  3 year warranty</li>
                <li className="flex gap-3">
                  <Check className="text-blue-500"/>
                  Wireless charging</li>
            </ul>

            <div className="text-center mt-10 mb-24">
              <div className="flex justify-center mb-10">
                <PhotoToCase 
                imgSrc="/main_case.jpg" 
                className="h-[30rem] mt-10 md:mt-0 bg-[left_50%_top_45%]"/>
              </div>
              <Link
                      href='/configure/upload'
                      className={buttonVariants({
                          size: 'lg',
                          className: 'flex items-center gap-1'
                          })}>
                          Create Case<ChevronsRight className="ml-5 h-5 w-5" />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
