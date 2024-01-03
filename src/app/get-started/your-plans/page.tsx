'use client'
import Footer from "@/components/Footer"
import MealPlane from "@/components/plane/MealPlane"
import { updateCurrentStep } from "@/lib/features/wizard/wizardSlice"
import { useAppDispatch } from "@/lib/hooks"
import { useEffect } from "react"

function page() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(updateCurrentStep(0))
  },[])

  return (
    <>
      <MealPlane/>
      <Footer/>
    </>
  )
}
export default page