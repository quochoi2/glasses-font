'use client'

import Image from "next/image"
import style from '../components/Header/header.module.css'
import { useState, useEffect } from "react"
import Link from "next/link"
import { topSearchAndUseLink } from "@/routes/topSearchAndUseLink"
import { ITopSearchAndUseLink } from "@/interfaces/topSearchAndUseLinks"
import { ClockIcon } from "@/lib/icons"
import { listInforProduct } from "@/seeds/listInforProduct"
import { ProductCard } from "./Product"


export const LinkSelected = ( props: ITopSearchAndUseLink ) => {
  return (
    <div className="my-1 mx-[10px]">
      <h1 className="text-xl font-semibold">{props.name}</h1>
      <div className="py-3 max-w-fit">
        {props.href.map(obj => (
          <Link href={obj.href}>
            <p className="pt-1">{obj.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

const SearchButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>('')
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null)
  const [count, setCount] = useState<number>()

  useEffect(() => {
    setCount(listInforProduct.length)
  }, [listInforProduct])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchText(value)

    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }

    const timeout = setTimeout(() => {
      handleSearch(value)
    }, 2000)

    setSearchTimeout(timeout)
  }

  const handleSearch = (value: string) => {
    if (value.trim()) {
      const updatedSearches = [value, ...recentSearches.slice(0, 2)]
      setRecentSearches(updatedSearches)
      console.log("Searching for:", value) 
    }
  }

  const clearSearch = () => {
    setSearchText('')
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
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
                    <input className="tex-sm pl-[60px] pr-[12px] py-[10px] rounded-full flex-1 w-full text-sm focus-visible:outline-none border border-slate-300" placeholder="Search for your favorite styles..."
                      value={searchText}
                      onChange={handleChange}
                    />
                  </div>
                  {searchText && (
                    <div className="absolute top-[51%] transform -translate-y-1/2 right-0 p-3 cursor-pointer"
                      onClick={clearSearch}
                    >
                      <Image className="max-w-[25px] max-h-[25px] mr-3"
                        src={'/close.svg'} width={15} height={15} alt={"close-search"}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center px-10 cursor-pointer" onClick={toggleVisibility}>
                  Cancel
                </div>
              </div>
              <div className="flex mx-10">
                <div className=" basis-1/4">
                  <div className="mb-5 mt-[15px]">
                    {recentSearches.slice(0, 3).map((search, index) => (
                      <div key={index} 
                        className="p-2 cursor-pointer flex items-center" 
                        onClick={() => setSearchText(search)}
                      >
                        <ClockIcon />
                        <span className="truncate max-w-[200px] ml-2">{search}</span>                      
                      </div>
                    ))}
                  </div>
                  <div>
                    <LinkSelected 
                      name={topSearchAndUseLink[0].name}
                      href={topSearchAndUseLink[0].href}
                    />
                    <LinkSelected 
                      name={topSearchAndUseLink[1].name}
                      href={topSearchAndUseLink[1].href}
                    />
                  </div>
                </div>
                <div className="basis-3/4">
                  <div className="mt-5 mb-2 cursor-pointer max-w-fit">Show all {count} results </div>
                  <div className="grid grid-cols-4 gap-4">
                    {listInforProduct.slice(0, 4).map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
 
export default SearchButton
