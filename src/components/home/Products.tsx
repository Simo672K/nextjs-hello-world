import Container from "@/components/Container"
import Section from "@/components/home/Section"
import ProductsCard from "@/components/home/ProductsCard"
import Meal from "@/app/assets/meal.jpg"

function Products() {
  const productCards=[
    {
      imageSrc: Meal,
      imageAlt: "Image could not be loaded",
      title: "Healthy Mix",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
    {
      imageSrc: Meal,
      imageAlt: "Image could not be loaded",
      title: "Keto",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
    {
      imageSrc: Meal,
      imageAlt: "Image could not be loaded",
      title: "Paleo",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
  ]
  return (
    <div className="bg-gray-100">
      <Container className="py-16">
        <Section className="grid grid-cols-3 gap-6" title="Types Of Diet We Offer">
          {
            productCards.map(
              product=>
                <ProductsCard key={product.title} imageSrc={product.imageSrc} imageAlt={product.imageAlt} title={product.title} description={product.description}/>
            )
          }
        </Section>
      </Container>
    </div>
  )
}
export default Products