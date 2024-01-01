import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image, { StaticImageData } from "next/image";
import { FaStar, FaPlus } from "react-icons/fa6";
import { useAppDispatch } from '@/lib/hooks'
import { addItem } from '@/lib/features/cart/cartSlice'

type MealCardProps = {
  id: number;
  mealName: string;
  image: string | StaticImageData;
  rating: number;
  reviewsNumber?: number;
  category: string;
  nutritionData?: {
    cal?: number;
    carbs?: number;
    protein?: number;
    fat?: number;
  };
};

function MealCard({
  id,
  mealName,
  image,
  rating,
  reviewsNumber,
  category,
  nutritionData,
}: MealCardProps) {

  const dispatch= useAppDispatch();

  return (
    <Card className="shadow-md h-[28rem] flex flex-col">
      <div className="relative border-b grow overflow-hidden">
        <span className="flex items-center absolute top-2 font-medium text-green-700 right-2 border rounded px-3 py-1 bg-white">
          <FaStar />
          {rating}
          <span className="text-gray-400 text-sm ms-1">({reviewsNumber})</span>
        </span>
        <Image width={400} height={400} className="h-full" src={image} alt="image" />
      </div>
      <CardContent className="py-4">
        <h3 className="text-lg font-medium mb-2 truncate">{mealName}</h3>
        <div className="flex h-14 space-x-4 mb-4">
          <div>
            {nutritionData?.cal}
            <p className="text-gray-600 font-light">cal</p>
          </div>
          <Separator className="" orientation="vertical" />

          <div>
            {nutritionData?.carbs}g
            <p className="text-gray-600 font-light">carbs</p>
          </div>
          <Separator orientation="vertical" />

          <div>
            {nutritionData?.protein}g
            <p className="text-gray-600 font-light">protein</p>
          </div>
          <Separator orientation="vertical" />

          <div>
            {nutritionData?.fat}g<p className="text-gray-600 font-light">fat</p>
          </div>
        </div>
        <Button onClick={()=> dispatch(
          addItem({
            id,
            itemName: mealName,
            image,
            quantity: 1
          })
        )} className="w-full">
          <FaPlus className='me-2' size={18}/>
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
}
export default MealCard;
