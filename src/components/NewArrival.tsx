import Image from 'next/image'
import style from '../styles/main.module.css'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from './ui/button'
import Link from 'next/link'

const ProductNewArrival = () => {
  return (  
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className={`w-full max-w-screen-xl mt-[120px] ${style.backgroundArrival}`}
      >
        <CarouselContent className=''>
          {/* {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="flex justify-center">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </div>
            </CarouselItem>
          ))} */}
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem key={index} className={`${style.onProductHide} md:basis-1/2 lg:basis-1/4 cursor-pointer`}>
              <div className="flex justify-center min-w-[200px] min-h-[150px]">
                <div className={`${style.productShow} relative`}>
                  <Image
                    src={'/product.jpg'}
                    width={300}
                    height={350}
                    alt="Product"
                  />
                  <div className="absolute bottom-[60px] left-0 right-0 transform translate-y-full opacity-100 -z-10">
                    <Image
                      className={`${style.productArrival} transform scale-y-[-1]`}
                      src={'/product.jpg'}
                      width={300}
                      height={350}
                      alt="Product reflection"
                    />
                  </div>
                </div>
                <div className={`${style.productHide} absolute`}>
                  <Image
                    src={'/product-hide.jpg'}
                    width={300}
                    height={350}
                    alt="Product"
                  />
                  <div className="absolute bottom-[50px] left-0 right-0 transform translate-y-full opacity-100 -z-10">
                    <Image
                      className={`${style.productArrival} transform scale-y-[-1]`}
                      src={'/product-hide.jpg'}
                      width={300}
                      height={350}
                      alt="Product reflection"
                    />
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <p>Kinh Mat Dep</p>
                <p className='text-sm'>Brand new product</p>
                <p className='font-medium'>$ 122.00</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-0' />
        <CarouselNext className='right-0' />
      </Carousel>
      <div className='flex justify-center my-5'>
        <Link href={'/'}>
          <Button className='uppercase'>shop now</Button>
        </Link>
      </div>
    </div>
  )
}
 
export default ProductNewArrival