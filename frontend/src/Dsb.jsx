import  { useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { GoReport } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function Dsb() {
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
      <div
        className="py-5 text-white flex-col h-screen flex justify-start bg-cover"
        style={{ backgroundImage: backgroundImage }}
      >
        <div className="text-xl flex self-center font-bold text-blue-900 ">
          <h1>Welcome to Help Desk Dashboard</h1>
          <br></br><br></br><br></br><br></br>
        </div>
        <div className="ml-20 gap-1 justify-self-center font-bold text-blue-900 flex flex-col">
          <button onClick={() => navigate('/Dsb')} className="flex">
            <FaHome />
            HOME
          </button>
          <br></br>
          <button onClick={() => navigate('/service')} className="flex">
            <RiServiceLine />
            SERVICE
          </button>
          <br></br>
          <button onClick={() => navigate('/Daily')} className="flex">
            <GoReport />
            DAILY REPORT
          </button>
          <br></br>
          <button onClick={() => navigate('/')} className="self-center font-semibold bg-blue-900 text-white rounded hover:bg-white hover:text-purple-950">
            LOGOUT
          </button>
        
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

export default Dsb;
