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
} from "@/components/ui/carousel"
import { FloatButton } from 'antd'
import Navbar from "./NavigationMenu"
import SearchButton from "../SearchButton"

const Header = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000 })
  )

  return (  
    <header className="relative">
      <FloatButton.BackTop />
      <div className="flex justify-between">
        <div>
          <Link href={'/'}>
            <Image className="object-cover max-w-[200px] max-h-[100px]" 
              src={'/logo.svg'} width={200} height={60} alt="logo"
            />
          </Link>
        </div>
        
        {/* Navbar */}
        <Navbar />
        
        <div className="flex justify-between items-center px-5 relative">
          <SearchButton />
          {headerLinks.map(linkObj => (
            <div key={linkObj.name} className="mx-2">
              <Link href={linkObj.link}>
                <Image className='max-w-[25px] max-h-[25px]'
                  src={linkObj.icon} width={25} height={25} alt={linkObj.name}
                />
              </Link>
            </div>
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
