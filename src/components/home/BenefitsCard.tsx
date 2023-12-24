import { 
  Card, 
  CardHeader, 
  CardTitle,
  CardContent
} from "@/components/ui/card"

type BenefitsCardProps= {
  title:string;
  content: string
}

function BenefitsCard({title, content}: BenefitsCardProps) {
  return (
    <Card className="border-0 shadow-none bg-green-100 py-4 px-6">
      <CardHeader>
        <CardTitle className="text-green-700">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-green-600 text-sm">
        {content}
      </CardContent>
    </Card>
  )
}
export default BenefitsCard