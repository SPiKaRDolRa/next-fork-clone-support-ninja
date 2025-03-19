import { create } from "zustand";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    teamSize: string;
    scaleUpTime: string;
    goals: string;
    referral: string;
}

interface FormStore {
    step: number;
    selectedOptions: string[]; // ✅ เพิ่ม selectedOptions
    formData: FormData;
    setStep: (step: number) => void;
    setSelectedOptions: (options: string[]) => void; // ✅ เพิ่ม setSelectedOptions
    setFormData: (data: Partial<FormData>) => void;
}

export const useFormStore = create<FormStore>((set) => ({
    step: 1,
    selectedOptions: [], // ✅ ตั้งค่าเริ่มต้นให้เป็น array ว่าง
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
    setSelectedOptions: (options) => set({ selectedOptions: options }), // ✅ ฟังก์ชันอัปเดต selectedOptions
    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
}));
