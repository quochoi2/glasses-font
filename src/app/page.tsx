import MaxWidthWrapper from "@/components/MaxWidthWrapper"

import Link from "next/link"
import { listMenuEyeglasses } from "@/routes/navLink"
import { listMenuLSunglasses } from "@/routes/navLink"
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
      
    </MaxWidthWrapper>
  )
}
