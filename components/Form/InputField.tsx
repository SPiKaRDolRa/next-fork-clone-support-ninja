import { ChangeEvent } from "react";

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    required?: boolean;
    placeholder: string;
}

const InputField = ({ label, value, onChange, type = "text", required = false, placeholder }: InputFieldProps) => (
    <div>
        <label className="text-[#2b2c30] font-semibold">{label}{required && "*"}</label>
        <input
            type={type}
            className="w-full border-b-2 border-gray-300 py-2"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />
    </div>
);

export default InputField;
