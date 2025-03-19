"use client";
import Step1 from "components/Form/Step1";
import Step2 from "components/Form/Step2";
import Step3 from "components/Form/Step3";
import StepProgressBar from "components/Form/StepProgressBar";
import CareersSection from "components/Sections/CareerSection";
import { useFormStore } from "store/useFormStore";

export default function GetStartedPage() {
    const {
        step,
        setStep,
    } = useFormStore();

    const steps = ["SUPPORT TYPE(S)", "ACCOUNT INFO", "GROW YOUR TEAM"];

    return (
        <div className="w-full bg-[#f3dfcf] flex items-center justify-center">
            <div className="flex-col items-center flex py-20">
                <h1 className="text-5xl font-serif font-bold text-center text-[#2b2c30]">
                    Your Dream Team Starts Here
                </h1>
                <p className="text-lg text-center text-[#2b2c30] mt-6">Build your expert team here:</p>
                <div className="bg-white shadow-md rounded-lg p-8 mt-8 max-w-xl w-full min-w-full lg:min-w-[708px]">
                    <StepProgressBar steps={steps} currentStep={step} />
                    {step === 1 && <Step1 onNext={() => setStep(2)} />}
                    {step === 2 && <Step2 onNext={() => setStep(3)} />}
                    {step === 3 && <Step3 />}
                    <p className="mt-6 text-sm text-gray-600">By submitting this form, you agree to share your personal information with us in accordance with our <span className="underline">Privacy Policy.</span></p>
                </div>
            </div>

            <CareersSection />
        </div>
    );
}