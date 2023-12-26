import { StaticImageData } from "next/image";
import Fries from "@/app/assets/fries.jpg"
import Chicken from "@/app/assets/chicken.jpg"
import Meat from "@/app/assets/beef.jpg"
import Diet from "@/app/assets/diet.jpg"
import Vegan from "@/app/assets/vegan.jpg"

type Meals= {
  id: number;
  mealName: string;
  image: string | StaticImageData;
  rating: number;
  reviewsNumber?: number;
  category: string;
  nutritionData ?: {
    cal?: number;
    carbs?: number;
    protein?: number;
    fat?: number;
  }
} 

export const meals: Array<Meals> = [
  {
    id: 0,
    mealName: "Big Fried fries box",
    image: Fries,
    rating: 5,
    reviewsNumber: 49,
    category: "Vegetarian",
    nutritionData: {
      cal: 450,
      carbs: 117,
      protein: 20,
      fat: 89
    }
  },
  {
    id: 1,
    mealName: "Chicken wings",
    image: Chicken,
    rating: 5,
    reviewsNumber: 49,
    category: "Poultry",
    nutritionData: {
      cal: 450,
      carbs: 117,
      protein: 20,
      fat: 89
    }
  },
  {
    id: 2,
    mealName: "Sheep BBQ",
    image: Meat,
    rating: 5,
    reviewsNumber: 49,
    category: "Meat",
    nutritionData: {
      cal: 450,
      carbs: 117,
      protein: 20,
      fat: 89
    }
  },
  {
    id: 3,
    mealName: "On diet Meal, green vergetables",
    image: Diet,
    rating: 5,
    reviewsNumber: 49,
    category: "Diet",
    nutritionData: {
      cal: 450,
      carbs: 117,
      protein: 20,
      fat: 89
    }
  },
  {
    id: 4,
    mealName: "Vegan plateau",
    image: Vegan,
    rating: 5,
    reviewsNumber: 49,
    category: "Vegan",
    nutritionData: {
      cal: 450,
      carbs: 117,
      protein: 20,
      fat: 89
    }
  },
]