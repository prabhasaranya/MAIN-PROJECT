import  { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const TicketStatus = () => {
    const navigate=useNavigate()
    const [darkMode, setDarkMode] = useState(false);


  const [ticketNo, setTicketNo] = useState('');
  const [ticketStatus, setTicketStatus] = useState(null);

  const handleInputChange = (event) => {
    setTicketNo(event.target.value);
  };

  const handleButtonClick = () => {
    if (!ticketNo.trim()) {
      alert('Please enter a ticket number');
      return;
    }

    const ticketStatusOptions = ['Solved', 'Processing', 'Accept'];

    const randomIndex = Math.floor(Math.random() * ticketStatusOptions.length);

    setTicketStatus(ticketStatusOptions[randomIndex]);
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
        <h1> TICKET STATUS</h1>
        <div>
        <div className="py-5">
            
      <label className="py-5 text-blue-900 text-sm font-bold mb-2 text-start space-x-3">
        Enter Ticket Number:
        
        <input className="text-sm space-x-4 w-24 h-5 px-0 py-0 border rounded-1g bg-white-800  focus:border-blue-900 " value={ticketNo} onChange={handleInputChange} />
        <button className="bg-blue-900 font-semibold  text-sm text-white rounded-lg justify-items-center hover:bg-white hover:text-purple-950" onClick={handleButtonClick}>Submit</button>
<br></br><br></br>
      </label>
      
       {ticketStatus && <p>Ticket Status: {ticketStatus}</p>}
    </div>
        </div>      

        <div className="flex">

</div>
    
    <div className="inlie-flex space-x-2 py-5">

        
    <button type="submit" onClick={()=>navigate('/Dsb')}className="bg-blue-900 text-sm text-white rounded-lg font-semibold justify-items-center hover:bg-white hover:text-purple-950">Home</button>
    <button onClick={()=>navigate('/SERVICE')} className=" bg-blue-900 font-semibold  text-sm text-white rounded-lg justify-items-center hover:bg-white hover:text-purple-950">Back</button>
    <button onClick={()=>navigate('/')} className="bg-blue-900 text-sm font-semibold  text-white rounded-lg justify-items-center hover:bg-white hover:text-purple-950">Logout</button>
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
    
      );
    };
    
    export default TicketStatus;
 
