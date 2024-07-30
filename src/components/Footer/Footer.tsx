import { footerLinks } from "@/routes/footerLinks"
import Link from "next/link"
import style from '../../styles/main.module.css'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Footer = () => {
  return (  
    <footer className="flex justify-between mt-5 relative bg-gradient-to-r from-[#EFE6FF] via-[#DDE4FF] to-[#DEEEFD]">
      <div className="flex basis-[75%] justify-between px-10 py-5">
        {footerLinks.map(obj => (
          <div className="" key={obj.title}>
            <h1 className="font-medium my-3">{obj.title}</h1>
            {obj.content.map(objChild => (
              <div className="py-1">
                <Link className={`text-[12px]`} href={objChild.href}>{objChild.text}</Link>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute right-0 bottom-0">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Join our newsletter</CardTitle>
            <CardDescription>Grab your welcome reward now or never.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email:</Label>
                  <Input id="name" placeholder="Enter your email..." />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Choose:</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Eyeglasses" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Eyeglasses</SelectItem>
                      <SelectItem value="sveltekit">Sunglasses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </footer>
  )
}
 
export default Footer