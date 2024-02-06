import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Daily() {
  const navigate = useNavigate();
  const [registers, setRegisters] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    // Fetch data based on the selected date
    if (selectedDate) {
      const apiUrl = `http://localhost:3000/Daily?date=${selectedDate}`;
      console.log("API URL:", apiUrl);
  
      axios.get(apiUrl)
        .then(response => setRegisters(response.data))
        .catch(err => console.log(err));
    }
  }, [selectedDate]);
  

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const backgroundImage = darkMode
    ? "url('../src/assets/imag1-dark.jpg')"
    : "url('../src/assets/imag1.jpg')";


  return (
    <div className={darkMode ? 'bg-black text-white' : 'bg-white text-black'}>

<div className="text-blue- h-[100vh] flex items-center justify-center bg-cover" style={{ backgroundImage: backgroundImage }}>
      <div className="py-5 text-blue-900 text-center font-bold h-screen">
        <h1> DAILY REPORT</h1>
        <div>
          <div className="py-5 space-x-3">
            <label className="py-5 text-blue-9oo text-sm font-bold mb-2 text-start" htmlFor="datePicker">Select Date</label>
            <input
              id="datePicker"
              className="text-sm w-24 h-5 px-0 py-0 border rounded-1g bg-white-800 focus:border-blue-900"
              required
              type="date"
              onChange={handleDateChange}
            />

            <div className="py-5 relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-blue-900">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-blue-900">
                      Emp ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-blue-900">
                      Issue
                    </th>
                    <th scope="col" className="px-6 py-3 text-blue-900">
                      Priority
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {registers.map(register => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={register.id}>
                      <td>{register.name}</td>
                      <td>{register.empid}</td>
                      <td>{register.title}</td>
                      <td>{register.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="py-5 inline-flex space-x-2">
                <button onClick={() => navigate('/Dsb')} className="bg-blue-950 text-sm font-semibold text-white rounded-lg justify-items-center hover:bg-white hover:text-purple-950">
                  Home
                </button>
                <button onClick={() => navigate('/')} className="bg-blue-950 text-sm text-white font-semibold rounded-lg justify-items-center hover:bg-white hover:text-purple-950">
                  Logout
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
        </div>
      </div>
    </div>

  );
}

export default Daily;
