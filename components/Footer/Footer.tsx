import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex justify-between items-center border-b border-gray-400 pb-8">
          <Image src="/images/support_ninja_full_logo.svg" alt="SupportNinja Logo" height={40} width={200} />
          <Link href="#" className="bg-red-500 text-white px-6 py-3 rounded-full flex items-center">
            Get started <span className="ml-2">➡</span>
          </Link>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div>
            <h3 className="font-bold text-lg">Solutions</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li><Link href="#">Customer Experience</Link></li>
              <li><Link href="#">Customer Conversion</Link></li>
              <li><Link href="#">Customer Onboarding</Link></li>
              <li><Link href="#">Customer Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Industries</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li><Link href="#">SaaS</Link></li>
              <li><Link href="#">AI</Link></li>
              <li><Link href="#">Ecommerce</Link></li>
              <li><Link href="#">Healthcare</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Resources</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li><Link href="#">Resources</Link></li>
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Glossary</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Follow</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li><Link href="#">LinkedIn</Link></li>
              <li><Link href="#">YouTube</Link></li>
              <li><Link href="#">Twitter</Link></li>
              <li><Link href="#">Facebook</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm mt-8 border-t border-gray-400 pt-4">
          <p>© 2025 Powered by. SPiKaR</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Security Policy</Link>
            <Link href="#">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}