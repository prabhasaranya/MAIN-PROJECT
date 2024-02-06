import  { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  

const handleSubmit = (e) => {
  e.preventDefault();

  axios.post('http://localhost:3000/login', { username, password })
      .then(result => {(result.data === "Login Successfully")?navigate("/Dsb"):alert("Invalid credentials");
          })
      .catch(err => {
          console.log(err);

      });
};

  return (
    <div>
      <div className="text-white h-[100vh] flex items-center justify-center bg-cover" style={{ "backgroundImage": "url('../src/assets/imag1.jpg')" }}>
        <div>
          <h2 className="text-sm font-bold font-serif text-center mb-6 text-blue-950">HELP DESK LOGIN</h2>
          <form onSubmit={handleSubmit}>
          <div className="relative my-4">
              <input
                type="text"
                className="block w-57 py-1 px-0 text-sm text-black bg-blue border-b-2 border-gray-300 appearance-none dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label
                htmlFor=""
                className="absolute text-sm duration-300 translate scale-75 top-3 -z-10 orgin-[0] peer-focus:left-0 peer:focus:text-blue-600 peer-focus:dark:text-black-800 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Username
              </label>
            </div>
            <div className="relative my-4">
              <input
                type="password"
                className="block w-55 py-1 px-0 text-sm text-black bg-blue border-b-2 border-gray-300 appearance-none dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor=""
                className="absolute text-sm duration-300 translate scale-75 top-3 -z-10 orgin-[0] peer-focus:left-0 peer:focus:text-blue-600 peer-focus:dark:text-black-800 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <button className="w-full mb-2 text-[16px] mt-3 rounded font-semibold bg-blue-950 py-1 hover:bg-white hover:text-purple-950 transition-colors duration-300">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



export default Login;
