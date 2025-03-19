import { useFormStore } from "store/useFormStore";
import InputField from "./InputField";

const Step3 = () => {
    const { formData, setFormData } = useFormStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Form submitted successfully! 🚀");
    };

    return (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <InputField
                label="How many new team members do you need?"
                value={formData.teamSize}
                onChange={(e) => setFormData({ teamSize: e.target.value })}
                required
                placeholder="Please Select"
            />
            <InputField
                label="How soon are you looking to scale up?"
                value={formData.scaleUpTime}
                onChange={(e) => setFormData({ scaleUpTime: e.target.value })}
                required
                placeholder="Please Select"
            />
            <label className="text-[#2b2c30] font-semibold">What goals are you trying to achieve?*</label>
            <textarea
                className="w-full border-b-2 border-gray-300 py-2"
                value={formData.goals}
                onChange={(e) => setFormData({ goals: e.target.value })}
            />
            <button type="submit" className="mt-4 bg-green-900 text-white font-semibold text-lg py-3 px-6 rounded-full w-full">
                Grow My Team
            </button>
        </form>
    );
};

export default Step3;
