"use client";
import { useState } from "react";

export default function GetStartedPage() {
    const [step, setStep] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [contactMethod, setContactMethod] = useState<string>("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        teamSize: "",
        scaleUpTime: "",
        goals: "",
        referral: "",
    });
    const [error, setError] = useState("");

    const steps = ["SUPPORT TYPE(S)", "ACCOUNT INFO", "GROW YOUR TEAM"];

    const options = [
        "Customer Experience",
        "Customer Conversion",
        "Customer Onboarding",
        "Customer Support",
        "Technical Customer Support",
        "Customer Renewals",
        "Content Moderation",
        "Data Processing",
        "Finance & Accounting",
        "N/A - Job Interest",
    ];

    const handleCheckboxChange = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
        );
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 1 && selectedOptions.length === 0) {
            setError("Please select at least one option.");
            return;
        }
        if (step === 2 && (!formData.firstName || !formData.lastName || !contactMethod)) {
            setError("Please fill in all required fields.");
            return;
        }
        setError("");
        if (step < 3) setStep(step + 1);
        else alert("Form submitted successfully! 🚀");
    };

    return (
        <div className="min-h-screen bg-[#f3dfcf] flex flex-col items-center py-12 px-6">
            <h1 className="text-5xl font-serif font-bold text-center text-[#2b2c30]">
                Your Dream Team Starts Here
            </h1>
            <p className="text-lg text-center text-[#2b2c30] mt-2">
                Build your expert team here:
            </p>

            <div className="bg-white shadow-md rounded-lg p-8 mt-8 max-w-xl w-full">
                {/* Step Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-sm font-semibold text-[#2b2c30]">
                        {steps.map((label, index) => (
                            <span key={index} className={index + 1 === step ? "text-green-900" : ""}>
                                {label}
                            </span>
                        ))}
                    </div>
                    <div className="relative w-full h-2 bg-gray-300 rounded-full mt-2">
                        <div
                            className="absolute h-2 bg-green-900 rounded-full transition-all duration-300"
                            style={{ width: `${(step / steps.length) * 100}%` }}
                        />
                    </div>
                </div>
                {/* Step 1: Select Support Type */}
                {step === 1 && (
                    <form className="mt-6 space-y-4" onSubmit={handleNext}>
                        <p className="text-[#2b2c30] font-semibold">
                            What area of your business are you looking to outsource?*
                        </p>
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
                        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                        <button type="submit" className="mt-4 bg-green-900 text-white font-semibold text-lg py-3 px-6 rounded-full w-full">
                            NEXT &gt;
                        </button>
                    </form>
                )}

                {/* Step 2: Account Info */}
                {step === 2 && (
                    <form className="mt-6 space-y-4" onSubmit={handleNext}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[#2b2c30] font-semibold">First Name*</label>
                                <input
                                    type="text"
                                    className="w-full border-b-2 border-gray-300 py-2"
                                    placeholder="Your First Name"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-[#2b2c30] font-semibold">Last Name*</label>
                                <input
                                    type="text"
                                    className="w-full border-b-2 border-gray-300 py-2"
                                    placeholder="Your Last Name"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </div>
                        </div>

                        <p className="text-[#2b2c30] font-semibold">How would you like to be contacted?*</p>
                        <label className="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="contact"
                                className="w-5 h-5"
                                checked={contactMethod === "Phone"}
                                onChange={() => setContactMethod("Phone")}
                            />
                            <span className="text-[#2b2c30]">Phone</span>
                        </label>
                        <label className="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="contact"
                                className="w-5 h-5"
                                checked={contactMethod === "Email"}
                                onChange={() => setContactMethod("Email")}
                            />
                            <span className="text-[#2b2c30]">Email</span>
                        </label>

                        <label className="text-[#2b2c30] font-semibold">Work Email</label>
                        <input
                            type="email"
                            className="w-full border-b-2 border-gray-300 py-2"
                            placeholder="me@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />

                        <label className="text-[#2b2c30] font-semibold">Phone Number*</label>
                        <input
                            type="tel"
                            className="w-full border-b-2 border-gray-300 py-2"
                            placeholder="512-111-1111"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />

                        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                        <button type="submit" className="mt-4 bg-green-900 text-white font-semibold text-lg py-3 px-6 rounded-full w-full">
                            NEXT &gt;
                        </button>
                    </form>
                )}

                {/* Step 3: Grow Your Team */}
                {step === 3 && (
                    <form className="mt-6 space-y-4" onSubmit={handleNext}>
                        <label className="text-[#2b2c30] font-semibold">How many new team members do you need?*</label>
                        <input type="text" className="w-full border-b-2 border-gray-300 py-2" placeholder="Please Select" />

                        <label className="text-[#2b2c30] font-semibold">How soon are you looking to scale up?*</label>
                        <input type="text" className="w-full border-b-2 border-gray-300 py-2" placeholder="Please Select" />

                        <label className="text-[#2b2c30] font-semibold">What goals are you trying to achieve?*</label>
                        <textarea className="w-full border-b-2 border-gray-300 py-2" />

                        <button type="submit" className="mt-4 bg-green-900 text-white font-semibold text-lg py-3 px-6 rounded-full w-full">
                            Grow My Team
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
