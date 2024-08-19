'use client'

import Image from "next/image"
import style from '../components/Header/header.module.css'
import { useState, useEffect } from "react"
import Link from "next/link"
import { Input } from "./ui/input"

const SearchButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isVisible]);

  return (  
    <div className="z-10">
      <div className={`flex mx-2 cursor-pointer ${style.headerLink}`} onClick={toggleVisibility}>
        <Image className="max-w-[25px] max-h-[25px]" 
          src={'/search.svg'} width={25} height={25} alt={'search-icon'}
        />
      </div>

      {isVisible && (
        <>
          <div className="fixed inset-0 z-30 bg-black bg-opacity-50" onClick={toggleVisibility}></div>
          <div className="fixed inset-0 z-40">
            <div className="w-full h-[600px] bg-white">
              <div className="flex justify-between">
                <div className="flex-none">
                  <Link href={'/'}>
                    <Image className="object-cover max-w-[200px] max-h-[100px]" 
                      src={'/logo.svg'} width={200} height={60} alt="logo"
                    />
                  </Link>
                </div>
                <div className="flex relative flex-1">
                  <div className="absolute top-[51%] transform -translate-y-1/2">
                    <Image className="max-w-[25px] max-h-[25px] ml-4" 
                      src={'/search.svg'} width={25} height={25} alt={'search-icon'}
                    />
                  </div>
                  <div className="flex items-center w-full">
                    <Input className="tex-sm pl-[60px] pr-[12px] py-[8px] rounded-full flex-1 w-full" placeholder="Search for your favorite styles..."/>
                  </div>
                </div>
                <div className="flex items-center px-10" onClick={toggleVisibility}>
                  Cancel
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
 
export default SearchButton
