export default function CareersSection() {
    return (
        <section className="max-w-[134px]">
            <h2 className="text-lg font-semibold text-[#2b2c30] flex items-center">
                Looking for Careers?
            </h2>
            <p className="text-[#2b2c30] mt-2">
                We’re always looking for talented people to join our team.
            </p>
            <div className="mt-4 space-y-2">
                <a href="#" className="flex justify-between items-center text-[#2b2c30] font-medium hover:underline">
                    About Our Work Culture
                    <span className="text-lg">→</span>
                </a>
                <hr className="border-[#d1b5a8]" />
                <a href="#" className="flex justify-between items-center text-[#2b2c30] font-medium hover:underline">
                    Browse Open Roles
                    <span className="text-lg">→</span>
                </a>
            </div>
        </section>
    );
}
