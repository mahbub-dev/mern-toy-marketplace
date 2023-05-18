
import logo  from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="items-center justify-center md:justify-start">
              {/* Website logo */}
              <img src={logo} alt="Logo" />
              <div className="ml-4">
                <span className="text-white font-semibold text-lg">GeniusGadgets</span>
              </div>
            </div>

          </div>
          <div className="md:col-span-1">
            <h2 className="text-white font-semibold mb-4">Contact</h2>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@geniusgadgets.com</li>
              <li>Phone: +1 123-456-7890</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-white font-semibold mb-4">Follow Us</h2>
            <ul className="space-y-2 text-gray-300">
              {/* Social media links */}
              <li>
                <a href="#" className="text-blue-300 hover:text-blue-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-blue-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-blue-400">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-white font-semibold mb-4">Address</h2>
            {/* Address */}
            <p className="text-gray-300">123 Street, Chapainawbganj, Bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
