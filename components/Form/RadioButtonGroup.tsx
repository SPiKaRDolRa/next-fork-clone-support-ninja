interface RadioButtonGroupProps {
    label: string;
    options: string[];
    selectedValue: string;
    onChange: (value: string) => void;
}

const RadioButtonGroup = ({ label, options, selectedValue, onChange }: RadioButtonGroupProps) => (
    <div>
        <p className="text-[#2b2c30] font-semibold">{label}</p>
        {options.map((option) => (
            <label key={option} className="flex items-center space-x-3">
                <input
                    type="radio"
                    name={label}
                    className="w-5 h-5"
                    checked={selectedValue === option}
                    onChange={() => onChange(option)}
                />
                <span className="text-[#2b2c30]">{option}</span>
            </label>
        ))}
    </div>
);

export default RadioButtonGroup;
