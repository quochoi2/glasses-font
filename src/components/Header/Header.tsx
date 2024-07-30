'use client'
import { cn } from "@/lib/utils"
import { headerLinks, saleLinks } from "@/routes/navLink"
import Image from "next/image"
import Link from "next/link" 

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import style from './header.module.css'
import Navbar from "./NavigationMenu"

const Header = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000 })
  )

  return (  
    <header className="">
      <div className="flex justify-between">
        <div>
          <Image className="object-cover max-w-[200px] max-h-[100px]" 
            src={'/logo.svg'} width={200} height={60} alt="logo"
          />
        </div>
        
        {/* Navbar */}
        <Navbar />
        
        <div className="flex justify-between items-center px-5">
          {headerLinks.map(linkObj => (
            <Link key={linkObj.name} href={linkObj.link}
              className={cn('mx-2', { [style.headerLink] : linkObj.name === "Search" })}
            >
              <Image className='max-w-[25px] max-h-[25px]'
                src={linkObj.icon} width={25} height={25} alt={linkObj.name}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Carousel className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {saleLinks.map(linkObj => (
              <CarouselItem 
                className="flex justify-center items-center py-1 bg-gradient-to-r from-blue-100 via-slate-300 to-blue-100 uppercase text-[14px]"
                key={linkObj.name}
              >
                <Link href={linkObj.link}>{linkObj.name}</Link>  
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </header>
  )
}
 
export default Header