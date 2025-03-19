import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "components/Form/InputField";
import RadioButtonGroup from "components/Form/RadioButtonGroup";
import { useFormStore } from "store/useFormStore";

const step2Schema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    contactMethod: z.enum(["Phone", "Email"], { message: "Please select a contact method" }),
    email: z.string().email("Invalid email").or(z.literal("")),
    phone: z.string().regex(/^\d{10,}$/, "Invalid phone number").or(z.literal("")),
}).refine(data => {
    if (data.contactMethod === "Phone" && !data.phone.trim()) return false;
    if (data.contactMethod === "Email" && !data.email.trim()) return false;
    return true;
}, { message: "Please provide the required contact information", path: ["contactMethod"] });

type Step2FormData = z.infer<typeof step2Schema>;

const Step2 = ({ onNext }: { onNext: () => void }) => {
    const { formData, setFormData } = useFormStore();
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<Step2FormData>({
        resolver: zodResolver(step2Schema),
        defaultValues: formData,
    });

    const contactMethod = watch("contactMethod");

    const onSubmit = (data: Step2FormData) => {
        setFormData(data);
        onNext();
    };

    return (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
                <InputField label="First Name" placeholder="Your First Name" {...register("firstName")} />
                <InputField label="Last Name" placeholder="Your Last Name" {...register("lastName")} />
            </div>

            <RadioButtonGroup
                label="How would you like to be contacted?*"
                options={["Phone", "Email"]}
                selectedValue={contactMethod}
                onChange={(value) => setValue("contactMethod", value)}
            />

            {contactMethod === "Email" && (
                <InputField label="Work Email" {...register("email")} />
            )}

            {contactMethod === "Phone" && (
                <InputField label="Phone Number" {...register("phone")} />
            )}

            {errors.contactMethod && <p className="text-red-600 text-sm mt-2">{errors.contactMethod.message}</p>}

            <button type="submit" className="mt-4 bg-green-900 text-white font-semibold text-lg py-3 px-6 rounded-full w-full">
                NEXT &gt;
            </button>
        </form>
    );
};

export default Step2;
