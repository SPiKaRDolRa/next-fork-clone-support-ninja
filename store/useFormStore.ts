import { create } from "zustand";

interface FormState {
  step: number;
  selectedOptions: string[];
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    teamSize: string;
    scaleUpTime: string;
    goals: string;
    referral: string;
  };
  setStep: (step: number) => void;
  setSelectedOptions: (options: string[]) => void;
  updateFormData: (data: Partial<FormState["formData"]>) => void;
}

export const useFormStore = create<FormState>((set) => ({
  step: 1,
  selectedOptions: [],
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    teamSize: "",
    scaleUpTime: "",
    goals: "",
    referral: "",
  },
  setStep: (step) => set({ step }),
  setSelectedOptions: (options) => set({ selectedOptions: options }),
  updateFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
}));
