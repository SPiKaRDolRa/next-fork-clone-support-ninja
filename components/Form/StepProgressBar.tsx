interface StepProgressBarProps {
    steps: string[];
    currentStep: number;
}

const getProgressWidth = (currentStep: number): string => {
    switch (currentStep) {
        case 1:
            return "5%";
        case 2:
            return "50%";
        case 3:
            return "100%";
        default:
            return "0%";
    }
};

const StepProgressBar = ({ steps, currentStep }: StepProgressBarProps) => (
    <div className="mb-6">
        <div className="flex justify-between text-sm font-semibold text-[#2b2c30]">
            {steps.map((label, index) => (
                <span key={index} className={index + 1 === currentStep ? "text-green-900" : ""}>
                    {label}
                </span>
            ))}
        </div>
        <div className="relative w-full h-2 bg-gray-300 rounded-full mt-2">
            <div
                className="absolute h-2 bg-green-900 rounded-full transition-all duration-300"
                style={{ width: getProgressWidth(currentStep) }}
            />
        </div>
    </div>
);

export default StepProgressBar;
