'use client'
import Container from "@/components/Container"
import WizardSteps from "@/components/WizardSteps"

type LayoutProps= {
  children: React.ReactNode;
}

function layout({children}:LayoutProps) {
  return (
    <Container className="pt-28">
      <WizardSteps/>
      {children}
    </Container>
  )
}
export default layout