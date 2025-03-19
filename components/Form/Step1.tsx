"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useFormStore } from "store/useFormStore";

const options = [
    "Customer Experience", "Customer Conversion", "Customer Onboarding",
    "Customer Support", "Technical Customer Support", "Customer Renewals",
    "Content Moderation", "Data Processing", "Finance & Accounting", "N/A - Job Interest",
    "Other"
];

const Step1 = ({ onNext }: { onNext: () => void }) => {
    const { selectedOptions, setSelectedOptions, setStep } = useFormStore(); // ✅ ดึงค่าให้ถูกต้อง
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const queryString = searchParams?.toString();
        if (!queryString) return; 

        const queryKey = Array.from(searchParams.keys())[0] ?? "";

        const formatOption = (option: string) => 
            option.toLowerCase().replace(/\s+/g, "-") + "-outsourcing";

        const matchedOption = options.find(option => formatOption(option) === queryKey);

        if (matchedOption) {
            setSelectedOptions([matchedOption]); // ✅ อัปเดต Zustand state
            setStep(2); // ✅ ข้ามไป Step2
        } else {
            router.push("/get-started");
        }
    }, [searchParams, setSelectedOptions, setStep, router]);

    const handleCheckboxChange = (option: string) => {
        setSelectedOptions(
            selectedOptions.includes(option)
                ? selectedOptions.filter((o) => o !== option)
                : [...selectedOptions, option]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedOptions.length === 0) return;
        onNext();
    };

    return (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <p className="text-[#2b2c30] font-semibold">What area of your business are you looking to outsource?*</p>
            <div className="grid grid-cols-2 gap-y-3">
                {options.map((option) => (
                    <label key={option} className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            className="w-5 h-5 border-gray-300 rounded"
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                        />
                        <span className="text-[#2b2c30]">{option}</span>
                    </label>
                ))}
            </div>
            <button type="submit" className="mt-4 bg-green-900 text-white font-semibold text-lg py-3 px-6 rounded-full w-full">
                NEXT &gt;
            </button>
        </form>
    );
};

export default Step1;
