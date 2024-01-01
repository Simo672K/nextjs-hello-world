import { 
  Card, 
  CardHeader, 
  CardTitle,
  CardContent
} from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link";

type ProductsCardProps= {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  href?:string
}

function ProductsCard({imageSrc, imageAlt, title, description, href='#'}: ProductsCardProps) {
  return (
    <Card className="shadow-none border-none overflow-hidden bg-green-700 text-white">
      <div className="w-full h-72 overflow-hidden border-b-4 border-gray-100">
        <Image
          className="w-full"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <CardHeader className="mt-4">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description}
        <div className="mt-8">
          <Link href={href} className="bg-white hover:bg-gray-50 text-green-700 px-12 py-3 rounded-md">Get Started</Link>
        </div>
      </CardContent>
    </Card>
  )
}
export default ProductsCard