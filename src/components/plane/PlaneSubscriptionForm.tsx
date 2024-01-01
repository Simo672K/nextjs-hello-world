"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import PlaneImage from "@/app/assets/plane_placeholder.jpg";
import { Badge } from "@/components/ui/badge"

type PlaneSubsForm = {
  mpp: string;
};

function PlaneSubscriptionForm() {
  const { register, handleSubmit } = useForm<PlaneSubsForm>();
  const onSubmit: SubmitHandler<PlaneSubsForm> = (data) => console.log(data);

  return (
    <div className="flex w-full gap-6">
      <div className="h-[32rem] rounded-lg overflow-hidden">
        <Image
          className="w-full"
          src={PlaneImage}
          alt="Plane img placeholder"
        />
      </div>
      <form className="w-[52rem]" onSubmit={handleSubmit(onSubmit)}>
        <Card className="flex flex-col h-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg mb-0 leading-none">
              Number of meals per person
            </CardTitle>
            <CardDescription className="mt-[0_!important] italic">
              5 is a minimum amount you can order
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Enter the number of meals per person"
              className="mb-2"
            />
            <div className="flex w-full items-center gap-4 mb-4">
              <div className="flex items-center">
                <Input
                  className="peer hidden"
                  value="FIVE"
                  type="radio"
                  name="mpp"
                  id="mpp1"
                  defaultChecked
                />
                <Label
                  className="px-8 border-2 py-2 rounded-full text-gray-400 peer-checked:border-green-600 peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:font-medium"
                  htmlFor="mpp1"
                >
                  5
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="radio"
                  value="SIX"
                  className="peer hidden"
                  name="mpp"
                  id="mpp2"
                />
                <Label
                  className="px-8 border-2 text-gray-400 py-2 rounded-full peer-checked:border-green-600 peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:font-medium"
                  htmlFor="mpp2"
                >
                  6
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="radio"
                  value="EIGHT"
                  className="peer hidden"
                  name="mpp"
                  id="mpp3"
                />
                <Label
                  className="px-8 border-2 text-gray-500 py-2 rounded-full peer-checked:border-green-600 peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:font-medium"
                  htmlFor="mpp3"
                >
                  8
                </Label>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-3">Number of people</h3>
            <Input
              placeholder="Enter the number of meals per person"
              className="mb-2"
            />
            <div className="flex w-full items-center gap-4 mb-4">
              <div className="flex items-center">
                <Input
                  className="peer hidden"
                  value="FIVE"
                  type="radio"
                  name="nop"
                  id="nop1"
                  defaultChecked
                />
                <Label
                  className="px-8 border-2 py-2 rounded-full text-gray-400 peer-checked:border-green-600 peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:font-medium"
                  htmlFor="nop1"
                >
                  1
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="radio"
                  value="SIX"
                  className="peer hidden"
                  name="nop"
                  id="nop2"
                />
                <Label
                  className="px-8 border-2 text-gray-400 py-2 rounded-full peer-checked:border-green-600 peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:font-medium"
                  htmlFor="nop2"
                >
                  2
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="radio"
                  value="EIGHT"
                  className="peer hidden"
                  name="nop"
                  id="nop3"
                />
                <Label
                  className="px-8 border-2 text-gray-500 py-2 rounded-full peer-checked:border-green-600 peer-checked:bg-green-100 peer-checked:text-green-800 peer-checked:font-medium"
                  htmlFor="nop3"
                >
                  4
                </Label>
              </div>
            </div>

            <RadioGroup defaultValue="option-one">
              <div className="flex items-baseline space-x-2 mb-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <div className="grow">
                  <Label htmlFor="option-one">Weekly Subscription <Badge className="bg-green-200 hover:bg-green-200 text-green-700 text-xs font-light">Most popular</Badge></Label>
                  <p className="text-gray-400 font-light text-xs">
                    Save up to 10%, swap meals, skip, or cancel with ease. 
                  </p>
                </div>
              </div>
              <div className="flex items-baseline space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <div className="grow">
                  <Label className="mb-0" htmlFor="option-two">One-time Program</Label>
                  <p className="text-gray-400 font-light text-xs">
                    Get a taste of the Atlanta Meal Prep. 
                  </p>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
          <hr />
          <CardFooter className="flex justify-between mt-auto">
            <Button className="w-full bg-green-700" type="submit">$200/WEEK* | Continue to meal section</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
export default PlaneSubscriptionForm;
