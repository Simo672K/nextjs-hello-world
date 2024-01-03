"use client"
import WizardStepper from "@/components/WizardStepper";
import { useAppSelector } from "@/lib/hooks";

function WizardSteps() {
  const currentStep = useAppSelector((state)=> state.wizard.currentStep);

  const steps=["Select a Plan", "Choose Meals", "Delivery/Pickup Details", "Payment"]
  return (
    <div className="mb-8 flex justify-center">
      <WizardStepper steps={steps} current={currentStep}/>
    </div>
  );
}
export default WizardSteps;
