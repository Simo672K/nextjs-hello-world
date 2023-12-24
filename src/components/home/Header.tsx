import Image from "next/image"
import Hero from "../../../public/hero.png"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { poppins } from "../fonts"


function Header() {

  return (
    <header className="bg-hero pb-10">
      <section className="container grid grid-cols-2 items-center mx-auto">
        <div>
          <h1 className={cn("text-6xl leading-none mb-4 font-medium text-green-900", poppins.className)}>Fresh, Localy & Healthy meals delivered to your door</h1>
          <Button className="text-md bg-green-800 hover:bg-green-700 px-8 py-6">Choose your meal Now</Button>
        </div>
        <Image alt="hero image" src={Hero}/>
      </section>
    </header>
  )
}
export default Header