"use client";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Section from "@/components/home/Section";
import MealCard from "@/components/meals/MealCard";
import MealsPagination from "@/components/meals/MealsPagination";
import _ from "lodash";
import { StaticImageData } from "next/image";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface MealCardProps {
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

function Meals() {
  const pageParam = useSearchParams();
  const [meals, setMeals] = useState<Array<Array<MealCardProps>>>();
  const proxie = "https://65920c1a8cbbf8afa96c7695.mockapi.io/api/v1/";

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(proxie + "meals", { cache: "force-cache" });
      result.json().then((response) => setMeals(_.chunk(response, 12)));
    };
    fetchData();
  }, []);

  const getPageParam: string = pageParam.get("page") ?? "1";
  let currentPage: number = 0;
  if (!+getPageParam) {
    currentPage = 1;
  } else {
    currentPage = +getPageParam;
  }

  return (
    <Container className="pt-16">
      <Section title="Our weekly menu">
        <div className="grid grid-cols-4 gap-6">
          <Suspense fallback={<>Loading...</>}>
            {meals && meals[(currentPage as number) - 1].map((meal) => (
              <MealCard
                key={meal.id}
                id={meal.id}
                mealName={meal.mealName}
                image={meal.image}
                category={meal.category}
                rating={meal.rating}
                reviewsNumber={meal.reviewsNumber}
                nutritionData={meal.nutritionData}
              />
            ))}
          </Suspense>
        </div>
        {meals && (
          <MealsPagination
            length={meals.length}
            active={currentPage as number}
          />
        )}
      </Section>
      <Footer />
    </Container>
  );
}
export default Meals;
