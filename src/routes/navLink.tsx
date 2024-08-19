export const navbarLinks : { name: string, link: string }[] = [
  {
    name: 'Eyeglasses',
    link: '/'
  },
  {
    name: 'Sunglasses',
    link: '/'
  },
  {
    name: 'Brands',
    link: '/'
  },
  {
    name: 'Services',
    link: '/'
  },
  {
    name: 'Offers',
    link: '/'
  },
]

// list icon link
export const headerLinks : { name: string, link: string, icon: string }[] = [
  // {
  //   name: "Search",
  //   link: "",
  //   icon: "/search.svg"
  // },
  {
    name: "favorite",
    link: "",
    icon: "/heart.svg"
  },
  {
    name: "account",
    link: "/signin",
    icon: "/account.svg"
  },
  {
    name: "cart",
    link: "",
    icon: "/cart.svg"
  }, 
]

// sale link
export const saleLinks : { name: string, link: string }[] = [
  {
    name: "clearance up to 50% off select frame & lenses",
    link: '',
  },
  {
    name: "frame and lenses starting at $55",
    link: '',
  },
  {
    name: "up to 50% off prescription lenses & treatments",
    link: '',
  },
]

// list menu
export const listMenuEyeglasses : { title: string, href: string }[] = [
  {
    title: "All Eyeglasses",
    href: "",
  },
  {
    title: "Women",
    href: "",
  },
  {
    title: "Men",
    href: "",
  },
  {
    title: "Ray-Ban",
    href: "",
  },
  {
    title: "Clearance Up to 50% off",
    href: "",
  },
  {
    title: "Safety Glasses",
    href: "",
  },
]

export const listMenuLSunglasses : { title: string, href: string }[] = [
  {
    title: "All Sunglasses",
    href: "",
  },
  {
    title: "Women",
    href: "",
  },
  {
    title: "Men",
    href: "",
  },
  {
    title: "Ray-Ban",
    href: "",
  },
  {
    title: "Clearance Up to 50% off",
    href: "",
  },
  {
    title: "Virtual Mirror",
    href: "",
  },
]

export const listMenuServices : { title: string, href: string }[] = [
  {
    title: "Payment Methods",
    href: "",
  },
  {
    title: "Premium Services",
    href: "",
  },
  {
    title: "Book an Eye Exam",
    href: "",
  },
  {
    title: "Help center",
    href: "",
  },
  {
    title: "Blogs",
    href: "",
  },
]

// list menu component 
export const componentMenuEyeglasses : { title: string, img: string, href: { name: string, link: string } }[] = [
  {
    title: "Up to 50% off prescription lenses",
    img: "/navbar.jpg",
    href: {
      name: "shop now",
      link: ""
    }
  },
  {
    title: "Clearance! Get up to 50% off select frames & lenses",
    img: "/navbar.jpg",
    href: {
      name: "shop now",
      link: ""
    }
  },
  {
    title: "Buy now & Buy later",
    img: "/navbar.jpg",
    href: {
      name: "discover more",
      link: ""
    }
  },
]

export const componentMenuSunglasses : { title: string, img: string, href: { name: string, link: string } }[] = [
  {
    title: "Up to 50% off prescription sun lenses",
    img: "/navbar.jpg",
    href: {
      name: "shop now",
      link: ""
    }
  },
  {
    title: "Clearance! Get up to 50% off select frames & lenses",
    img: "/navbar.jpg",
    href: {
      name: "shop now",
      link: ""
    }
  },
  {
    title: "Buy now & Buy later",
    img: "/navbar.jpg",
    href: {
      name: "discover more",
      link: ""
    }
  },
]

export const componentMenuServices : { title: string, img: string, href: { name: string, link: string } }[] = [
  {
    title: "Buy now & Pay later",
    img: "/navbar.jpg",
    href: {
      name: "discover more",
      link: ""
    }
  },
  {
    title: "Premium services",
    img: "/navbar.jpg",
    href: {
      name: "discover more",
      link: ""
    }
  },
  {
    title: "Help center",
    img: "/navbar.jpg",
    href: {
      name: "discover more",
      link: ""
    }
  },
]
