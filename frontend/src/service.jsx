import { useNavigate} from 'react-router-dom'
  import{ useState } from 'react';
import { Link } from 'react-router-dom';

function Service() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const backgroundImage = darkMode
    ? "url('../src/assets/imag1-dark.jpg')"
    : "url('../src/assets/imag1.jpg')";

  return (
    <div className={darkMode ? 'bg-black text-white' : 'bg-white text-black'}>
      <div className="text-blue- h-[100vh] flex items-center justify-center bg-cover" style={{ backgroundImage: backgroundImage }}>
        <div className="text-blue-950 py-3 font-bold h-screen text-center">
          <h1 className="py-3">Help Desk Services</h1>
          <h2 className="ml-4 py-3 font-bold text-blue-950 text-start underline-offset-4">
            <u>About</u>
          </h2>
          <p className="ml-4 py-6 mb-3 text-black-500 text-sm font-bold text-start">
            Here rectify client problems through the ticket system. Customers can apply new tickets based on their problems and also view status at any time.
          </p>
          <div className="ml-4 py-10 text-blue-950 font-bold underline-offset-3 text-start">
            <ul>
              <li>
                <Link to="/Create">1. Create New Ticket</Link>
              </li>
              <li>
                <Link to="/Status">2. View Ticket Status</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center space-x-2 mt-5">
            <button onClick={() => navigate('/Dsb')} className="bg-blue-900 text-white rounded px-4 py-2">
              HOME
            </button>
            <button onClick={() => navigate('/')} className="bg-blue-900 text-white rounded px-4 py-2">
              LOGOUT
            </button>
          </div>
          <div className="mt-3 text-center">
            <label className="switch">
              <input type="checkbox" onChange={toggleDarkMode} />
              <span className="slider round"></span>
            </label>
            <span className="ml-2">Dark Mode</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
