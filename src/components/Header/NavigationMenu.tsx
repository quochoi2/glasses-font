import { listMenuEyeglasses, componentMenuEyeglasses, listMenuLSunglasses, navbarLinks, componentMenuSunglasses, listMenuServices, componentMenuServices } from '@/routes/navLink'
import style from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'

const Navbar = () => {
  return (  
    <div className="flex justify-between items-center relative">
      {navbarLinks.map(nameNav => {
        if (nameNav.name === 'Eyeglasses') {
          return (
            <div key={nameNav.name} className={style.onHover}>
              <Link href={nameNav.link}>
                <h1 className={style.navLink}>
                  {nameNav.name}
                </h1>
              </Link>
              <div className={`${style.dropDown} flex justify-between border-t-slate-300 border-t`}>
                <div className='px-4 py-2 basis-1/4'>
                  {listMenuLSunglasses.map(item => {
                    if ( item.title === "Clearance Up to 50% off") {
                      return (
                        <Link className=''
                        key={item.title} href={item.href}
                        >
                          <div className='bg-red-300 rounded-md p-2 px-4 w-ful hover:bg-slate-300 hover:rounded-md'>
                            {item.title}
                          </div>
                        </Link>
                      )
                    }
                    return (
                      <Link className=''
                        key={item.title} href={item.href}
                      >
                        <div className='hover:bg-slate-300 hover:rounded-md p-2 px-4 w-ful'>
                          {item.title}
                        </div>
                      </Link>
                    )
                  })}
                </div>
                <div className='flex'>
                  {componentMenuSunglasses.map(item => (
                    <Link className=''
                      key={item.title} href={item.href.link} 
                    >
                      <div className='relative'>
                        <Image className='min-h-[255px] object-cover scale-x-[-1] transition-transform duration-300 ease-in-out hover:scale-110' 
                          src={'/navbar.jpg'} width={300} height={300} alt={item.title} 
                        />
                        <div className='absolute top-1/2 translate-y-[-50%] flex flex-col h-[80%] max-w-[60%] pl-5 justify-between'>
                          <p className='font-medium'>{item.title}</p>
                          <Button className='uppercase hover:bg-slate-500'>{item.href.name}</Button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )
        }

        if (nameNav.name === 'Sunglasses') {
          return (
            <div key={nameNav.name} className={style.onHover}>
              <Link href={nameNav.link}>
                <h1 className={style.navLink}>
                  {nameNav.name}
                </h1>
              </Link>
              <div className={`${style.dropDown} flex justify-between border-t-slate-300 border-t`}>
                <div className='px-4 py-2 basis-1/4'>
                  {listMenuEyeglasses.map(item => {
                    if ( item.title === "Clearance Up to 50% off") {
                      return (
                        <Link className=''
                          key={item.title} href={item.href}
                        >
                          <div className='bg-red-300 rounded-md p-2 px-4 w-ful hover:bg-slate-300 hover:rounded-md'>
                            {item.title}
                          </div>
                        </Link>
                      )
                    }
                    return (
                      <Link className=''
                        key={item.title} href={item.href}
                      >
                        <div className='hover:bg-slate-300 hover:rounded-md p-2 px-4 w-ful'>
                          {item.title}
                        </div>
                      </Link>
                    )
                  })}
                </div>
                <div className='flex'>
                  {componentMenuEyeglasses.map(item => (
                    <Link className=''
                      key={item.title} href={item.href.link} 
                    >
                      <div className='relative'>
                        <Image className='min-h-[255px] object-cover scale-x-[-1] transition-transform duration-300 ease-in-out hover:scale-110' 
                          src={'/navbar.jpg'} width={300} height={300} alt={item.title} 
                        />
                        <div className='absolute top-1/2 translate-y-[-50%] flex flex-col h-[80%] max-w-[60%] pl-5 justify-between'>
                          <p className='font-medium'>{item.title}</p>
                          <Button className='uppercase hover:bg-slate-500'>{item.href.name}</Button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )
        }

        if (nameNav.name === 'Brands') {
          return (
            <div key={nameNav.name} className={style.onHover}>
              <Link href={nameNav.link}>
                <h1 className={style.navLink}>
                  {nameNav.name}
                </h1>
              </Link>
              <div className={`${style.dropDownBrand} border-t-slate-300 border-t`}>
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index}>
                    <Image className='min-h-[255px] min-w-[300px] object-cover transition-transform duration-300 ease-in-out hover:scale-110' 
                      src={'/imgBrand.svg'} width={300} height={300} alt={'index'}
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        }

        if (nameNav.name === 'Services') {
          return (
            <div key={nameNav.name} className={style.onHover}>
              <Link href={nameNav.link}>
                <h1 className={style.navLink}>
                  {nameNav.name}
                </h1>
              </Link>
              <div className={`${style.dropDown} flex justify-between border-t-slate-300 border-t`}>
                <div className='px-4 py-2 basis-1/4'>
                  {listMenuServices.map(item => (
                    <Link className=''
                      key={item.title} href={item.href}
                    >
                      <div className='hover:bg-slate-300 hover:rounded-md p-2 px-4 w-ful'>
                        {item.title}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className='flex'>
                  {componentMenuServices.map(item => (
                    <Link className=''
                      key={item.title} href={item.href.link} 
                    >
                      <div className='relative'>
                        <Image className='min-h-[255px] object-cover scale-x-[-1] transition-transform duration-300 ease-in-out hover:scale-110' 
                          src={'/navbar.jpg'} width={300} height={300} alt={item.title} 
                        />
                        <div className='absolute top-1/2 translate-y-[-50%] flex flex-col h-[80%] max-w-[60%] pl-5 justify-between'>
                          <p className='font-medium'>{item.title}</p>
                          <Button className='uppercase hover:bg-slate-500'>{item.href.name}</Button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )
        }

        if (nameNav.name === 'Offers') {
          return (
            <div key={nameNav.name}>
              <Link href={nameNav.link}>
                <h1 className={style.navLink}>
                  {nameNav.name}
                </h1>
              </Link>
            </div>
          )
        }
      })}
    </div>
  )
}
 
export default Navbar