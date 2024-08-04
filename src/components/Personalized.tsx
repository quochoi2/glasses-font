import { personalizedLinks } from "@/routes/personalized"
import Image from "next/image"
import style from '../styles/main.module.css'
import Link from "next/link"
import { cn } from "@/lib/utils"

interface IPersonalizedLink {
  name: string
  icon: string
  href: string
  buttonName: string 
}

interface IFindOutLink {
  name: string
  icon: string
  description: string
  href: string
  buttonName: string 
}

const PersonalizedEyecareAndFindOut = ({ personalizedLinks, findOutLinks }: { personalizedLinks: IPersonalizedLink[], findOutLinks: IFindOutLink[] }) => {
  return (
    <div className="">
      <div className="grid grid-cols-6 gap-3">
        {personalizedLinks.map((obj: any)=> (
          <div className={`${cn('bg-white px-10 py-5 rounded-md cursor-pointer', style.hoverPersonalized)}`} key={obj.name}>
            <Link className="flex flex-col items-center" href={obj.href}>
              <Image src={obj.icon} height={60} width={60} alt={obj.name} />
              <p className="text-sm">{obj.name}</p>
              <span className={`${cn('mt-2 font-medium text-[14px] relative', style.onHoverPersonalized)}`}>{obj.buttonName}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-3">
        {findOutLinks.map((obj: any) => (
          <div className={`${cn('bg-white px-4 border hover:bg-slate-200 shadow-md py-5 rounded-md cursor-pointer', style.hoverPersonalized)}`} key={obj.name}>
            <Link className="flex flex-col items-center" href={obj.href}>
              <Image src={obj.icon} height={60} width={60} alt={obj.name} />
              <div className="flex flex-col justify-between h-[150px]">
                <div className="flex flex-col text-center">
                  <h1 className="font-medium text-[14px] uppercase my-3">{obj.name}</h1>
                  <p className="text-[12px]">{obj.description}</p>
                </div>
                <div className="flex text-center justify-center">
                  <p className={`${cn('font-medium relative uppercase', style.onHoverPersonalized)}`}>{obj.buttonName}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PersonalizedEyecareAndFindOut