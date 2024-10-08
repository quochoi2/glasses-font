'use client'

import { listInforProduct } from "@/seeds/listInforProduct"
import { useState } from "react"
import { ProductCard } from "./Product"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface IListCategoryInShop {
  array: string[]
}

const CategoryListInShop: React.FC<IListCategoryInShop> = ({ array }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [openSortBy, setOpenSortBy] = useState<boolean>()

  const handleCategoryClick = (category: string) => {
    setSelectedCategories(prevSelected =>
      prevSelected.includes(category)
        ? prevSelected.filter(item => item !== category) // Bỏ chọn nếu đã chọn
        : [...prevSelected, category] // Chọn nếu chưa chọn
    )
  }

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-2">
          {array.map((category) => (
            <p key={category}
              onClick={() => handleCategoryClick(category)}
              className={`text-sm rounded-md py-1 px-4 border cursor-pointer select-none ${
                selectedCategories.includes(category) ? 'bg-blue-500 text-white' : 'border-blue-400'
              }`}
            >
              {category}
            </p>
          ))}
        </div>
        <div className="relative">
          <p onClick={() => setOpenSortBy(!openSortBy)}
            className={`text-sm rounded-md py-1 px-4 border select-none cursor-pointer ${'border-blue-400'}`}
          >
            Sort By
          </p>
          {openSortBy && 
            <div className="absolute top-10 right-0 z-10">
              <ul className="w-[300px] bg-slate-300 rounded-md py-3">
                <li className="py-2 text-sm rounded-md cursor-pointer hover:bg-slate-200 px-6">Price: Low to high</li>
                <li className="py-2 text-sm rounded-md cursor-pointer hover:bg-slate-200 px-6">Price: High to low</li>
                <li className="py-2 text-sm rounded-md cursor-pointer hover:bg-slate-200 px-6">Newest</li>
                <li className="py-2 text-sm rounded-md cursor-pointer hover:bg-slate-200 px-6">Best sellers</li>
              </ul>
            </div>
          }
        </div>
      </div>
      <div className="mt-10 mb-20 relative">
        <div className="mb-5">
          <h1 className="font-semibold text-[33px]">All product new arrival</h1>
          <p className="text-sm">Don't miss anything you can try. Let's buy for now!</p>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {listInforProduct.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          <Pagination className="absolute -bottom-[60px]">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}

export default CategoryListInShop
