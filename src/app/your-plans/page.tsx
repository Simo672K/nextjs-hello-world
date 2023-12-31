import Container from "@/components/Container"
import WizardSteps from "@/components/WizardSteps"
import MealPlane from "@/components/plane/MealPlane"

function page() {
  return (
    <Container className="pt-28">
      <WizardSteps/>
      <MealPlane/>
      <footer className="mt-10 py-2 text-gray-500">
        Made by @Simo672K with 💻 2023-2024
      </footer>
    </Container>
  )
}
export default page