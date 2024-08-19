import { IProduct } from "@/interfaces/product"
import style from '../styles/main.module.css'
import Image from "next/image"

const categoryColors: { [key: string]: string } = {
  men: 'bg-red-500',
  kids: 'bg-blue-500',
  women: 'bg-green-500',
}

const getCategoryStyle = (category: string): string => {
  if (categoryColors[category]) {
    return categoryColors[category]
  }

  return 'bg-gray-500' 
  // return `bg-[${Math.floor(Math.random() * 16777215).toString(16)}]`;
}

export const ProductCard = ({ id, name, image, category, brand, price }: IProduct) => {
  return (
    <div className="relative p-4 border border-gray-300 rounded-lg cursor-pointer" key={id}>
      <div className="absolute top-4 flex flex-wrap gap-2">
        {category.map((cat: string) => (
          <span key={cat} className={`text-white text-sm px-2 py-1 rounded ${getCategoryStyle(cat)}`}>
            {cat}
          </span>
        ))}
      </div>
      <div className={`${style.imageContainer} relative mt-[120px] mb-[50px]`}>
        <Image
          src={image[0]}
          width={200}
          height={200}
          alt={name}
          className={`${style.image1} min-h-[125px] object-cover`}
        />
        <Image
          src={image[1]}
          width={200}
          height={200}
          alt={name}
          className={`${style.image2} cursor-pointer absolute top-1/2 -translate-y-1/2 min-h-[125px] max-w-[187px] object-cover`}
        />
      </div>
      <div>
        <div className="mb-2">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-700 text-sm">{brand}</p>
        </div>
        <p className="text-gray-800 font-bold">${price}</p>
      </div>
    </div>
  )
}



