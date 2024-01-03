import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

type wizardType= {
  currentStep: number;
}

const initialState: wizardType= {
  currentStep: 0,
}

export const wizardSlice= createSlice({
  name: 'wizard',
  initialState,
  reducers: {
    updateCurrentStep: (state, action: PayloadAction<number>) =>{
      state.currentStep= action.payload
    }
  }
})

export const { updateCurrentStep } = wizardSlice.actions
export const currentStep = (state: RootState) => state.wizard.currentStep;

export default wizardSlice.reducer;

