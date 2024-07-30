import MaxWidthWrapper from "@/components/MaxWidthWrapper"

import Link from "next/link"
import ProductNewArrival from "@/components/NewArrival"
import { listMenuEyeglasses } from "@/routes/navLink"
import { listMenuLSunglasses } from "@/routes/navLink"
import PersonalizedEyecareAndFindOut from "@/components/Personalized"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { personalizedLinks } from "@/routes/personalized"
import { findOutLinks } from "@/routes/findOutLinks"

export default function Home() {
  const buttonBackground : { name: string, link: string }[] = [
    {
      name: 'shop eyeglasses',
      link: listMenuEyeglasses[0].href,
    },
    {
      name: 'shop sunglasses',
      link: listMenuLSunglasses[0].href,
    },
  ]

  const buttonShowMatch : { name: string, href: string }[] = [
    {
      name: "Transitions",
      href: "/",
    },
    {
      name: "Blue-violet light",
      href: "/",
    },
    {
      name: "Prescription sun",
      href: "/",
    },
  ]

  return (
    <MaxWidthWrapper>
      <main className="">
        {/* Background Slider */}
        <div className="flex justify-center relative">
          <video width="1280" height="500" autoPlay muted>
            <source src={'/video.mp4'} type="video/mp4" />
          </video>
          <div className="absolute left-[5%] top-1/2 -translate-y-1/2 max-w-[400px]">
            <h1 className="font-semibold text-3xl">Our summer lineup is here!</h1>
            <p className="text-base py-5">Up to 50% off prescription lenses to start the sunny season with fresh eyes and a fresh style, tailored to your vision.</p>
            <div className="flex justify-between">
              {buttonBackground.map(linkObj => (
                <Link className="uppercase bg-black text-white rounded-lg px-5 py-3 hover:bg-slate-600"
                  key={linkObj.name} href={linkObj.link}>{linkObj.name}</Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Product Arrivals */}
        <ProductNewArrival />
        
        {/* Personalized */}
        <div className="px-5 py-[80px] bg-gradient-to-r from-blue-100 via-slate-300 to-blue-100">
          <div className="w-full flex flex-col items-center mb-10 ">
            <h1 className="py-2 font-medium text-3xl">Personalized eyecare for you.</h1>
            <p>Select one card to find the perfect style or lenses, according to your needs</p>
          </div>
          <PersonalizedEyecareAndFindOut personalizedLinks={personalizedLinks} findOutLinks={[]}/>
        </div>

        {/* Show match */}
        <div className="px-8 py-10 bg-gradient-to-r from-[#E8EFFA] via-[#F1F6FC] to-[#E8EFFA]">
          <h1 className="font-medium text-[30px]">Our lenses</h1>
          <div className="flex justify-between ">
            <div className="basis-1/5 flex flex-col justify-between">
              <div>
                {buttonShowMatch.map(obj => (
                  <div key={obj.name}
                    className={cn('my-[35px]')}
                  >
                    <Link className={cn('text-[20px]', obj.name === 'Transitions' ? 'border-b-[2px] border-slate-500' : 'hover:border-b-[2px] hover:border-slate-500')}
                      href={obj.href}>{obj.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div>
                <Button className="w-full uppercase">discover all lenses</Button>
              </div>
            </div>
            <div className="basis-3/5 ml-5">
              <video className="" width="1280" height="500" autoPlay muted loop>
                <source src={'/videoglass.mp4'} type="video/mp4" />
              </video>
            </div>
            <div className="basis-1/5 flex flex-col justify-between">
              <div>
                <h1 className="text-[25px] font-medium">Transitions</h1>
                <p className="my-5">They quickly darken in sunlight and fade back to clear indoors: protecting you from UV rays and filtering 
                  blue-violet light. Available in prescription and non-prescription glasses.
                </p>
              </div>
              <div className=" w-full">
                <Button className={cn('py-2 px-7 border-2 bg-white text-black hover:bg-white uppercase border-slate-600 hover:border-slate-400 outline-2')}>
                  shop transitions lenses
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* List Brands */}
        <div className="my-10 border-t border-b border-slate-300">
          <div className="flex justify-center">
            <h1 className="pt-8 font-medium text-3xl">Enjoy our premium brands</h1>
          </div>
          <div>
          <Carousel className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="my-5">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem 
                  className=" lg:basis-1/5 flex justify-center items-center"
                  key={index}
                >
                  <Link href={'/'}>
                    <Image className='transition-transform duration-300 ease-in-out hover:scale-110'
                      src={'/imgBrand.svg'} width={240} height={120} alt={'imgBrand-tt'}/>
                  </Link>  
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0"/>
            <CarouselNext className="right-0" />
          </Carousel>
          </div>
        </div>

        {/* List find out more */}
        <PersonalizedEyecareAndFindOut personalizedLinks={[]} findOutLinks={findOutLinks}/>      
      </main>
    </MaxWidthWrapper>
  )
}
