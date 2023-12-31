import WizardStepper from "./WizardStepper";

function WizardSteps() {
  const steps=["Select a Plan", "Choose Meals", "Delivery/Pickup Details", "Payment"]
  return (
    <div className="mb-8 flex justify-center">
      <WizardStepper steps={steps} current={0}/>
    </div>
  );
}
export default WizardSteps;
