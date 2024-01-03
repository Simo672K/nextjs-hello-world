"use client";

import { cn } from "@/lib/utils";

type WizardStepperProps = {
  steps: Array<string>;
  current: number;
};

function WizardStepper({ steps, current=-1 }: WizardStepperProps) {

  return (
    <div className="w-fit">
        <ul className="flex cursor-default">
          {steps &&
            steps.map((step, index) => (
              <li className="flex flex-col items-center w-44" key={index}>
                <div
                  className={cn(
                    "w-8 h-8 rounded-full mb-2 z-20 border-2 text-center pt-0.5",
                    current === index
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-gray-400",
                    index + 1 === steps.length
                      ? ""
                      : "relative after:absolute after:ms-0.5 after:w-40 after:h-0.5 after:bg-gray-300 after:left-full after:top-1/2 after:-translate-y-1/2"
                  )}
                >
                  {index + 1}
                </div>
                <span className={
                  cn(current === index?
                    "text-green-700 font-medium":
                    "text-gray-400")
                }>
                  {step}
                </span>
              </li>
            ))}
        </ul>
    </div>
  );
}
export default WizardStepper;
