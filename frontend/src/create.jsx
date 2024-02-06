import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Create(){
    const [darkMode, setDarkMode] = useState(false);

    const[name, setName]=useState()
    const[empid, setEmpid]=useState()
    const[department, setDepartment]=useState()
    const[email, setEmail]=useState()
    const[contactno, setContactno]=useState()
    const[title, setTitle]=useState()
    const[priority, setPriority]=useState()
    const[issue, setIssue]=useState()
    const[date, setDate]=useState()


    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/create',{name,empid,department,email,contactno,title,issue,priority,date})
        .then(result=>{ 
        console.log(result),alert("Ticket Created Successfully")})
        .catch(err=>console.log(err))
    }
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
    
      const backgroundImage = darkMode
        ? "url('../src/assets/imag1-dark.jpg')"
        : "url('../src/assets/imag1.jpg')";
    
    return(
        <div className={darkMode ? 'bg-black text-white' : 'bg-white text-black'}>

    
<div className="text-blue- h-[100vh] flex items-center justify-center bg-cover" style={{ backgroundImage: backgroundImage }}>
                    
                        <div className=" text-blue-900 py-3 text-center font-bold h-screen">
                    <h1><u>Create Your Ticket Here</u></h1><br></br>
                    <form onSubmit={handleSubmit} className="font-thin">
                        
                        <div className="mb-3 space-x-9">
                        <lable className="text-blue-900 text-sm font-bold mb-2"htmlFor= "" name="name">Name</lable>
                            <input placeholder='saranyaprabha' className=" text-sm w-24 h-5 px-0 py-0 border rounded-1g bg-white-800 focus:border-blue-900" required type="text"onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="mb-3 space-x-8">
                            <lable className="text-blue-900 text-sm font-bold mb-2"htmlFor="" name="empid">Emp.ID</lable>
                            <input placeholder='12345' className=" text-sm w-24 h-5 px-0 py-0 border rounded-1g bg-white-800 focus:border-blue-900" required type="number"onChange={(e)=>setEmpid(e.target.value)}/>
 
                        </div>
                        <div className="mb-3 space-x-1">
                            <lable className="text-blue-900 text-sm font-bold mb-2"htmlFor="" name="department">Department</lable>
                            <input placeholder='Testing' className="text-sm w-24 h-5 px-0 py-0 border rounded-1g bg-white-800 focus:border-blue-900" required type="text"onChange={(e)=>setDepartment(e.target.value)}/>
 
                        </div>
                        <div className="mb-3 space-x-10">
                            <lable className=" text-blue-900 text-sm font-bold mb-2"htmlFor=""name="email">Email</lable>
                            <input placeholder='prabhasaranya90@gamil.com' className="text-sm w-24 h-5 px-0 py-0  border rounded-1g bg-white-800 focus:border-blue-900" required type="text"onChange={(e)=>setEmail(e.target.value)}/>

                        </div>
                        <div className="mb-3 space-x-1">
                            <lable className=" text-blue-900 text-sm font-bold mb-2"htmlFor=""name="contactno">Contact.no</lable>
                            <input placeholder='1234567890' className="text-sm w-24 h-5 px-0 py-0  border rounded-1g bg-white-800 focus:border-blue-900" required type="number"onChange={(e)=>setContactno(e.target.value)}/>

                        </div>
                        <div className="mb-3 space-x-11">
                            <lable className=" text-blue-900 text-sm font-bold mb-2"htmlFor=""name="title">Title</lable>
                            <input placeholder='Network'className="text-sm w-24 h-5 px-0 py-0 border rounded-1g bg-white-800 focus:border-blue-900" required type="text"onChange={(e)=>setTitle(e.target.value)}/>
 
                        </div>
                        <div className="mb-3 space-x-6">
                            <lable className="text-blue-900 text-sm font-bold mb-2"htmlFor="" name="priority">Priority</lable>
                            <input placeholder='High' className="text-sm w-24 h-5 px-0 py-0 border rounded-1g bg-white-800 focus:border-blue-900" required type="text"onChange={(e)=>setPriority(e.target.value)}/>
 
                        </div>
                        <div className="mb-2 space-x-2">
                            <lable className=" text-blue-900 text-sm font-bold mb-2"htmlFor=""name="issue">Issue</lable>
                            <textarea rows='1' placeholder='Type Your Message' className="text-sm border ro bg-white-800 focus:border-blue-900 " required type="text"onChange={(e)=>setIssue(e.target.value)}/>
                     </div>
                     
                     <div className="mb-2 space-x-2">
                     <label className="py-5 text-blue-900 text-sm font-bold mb-2 text-start" htmlFor="">Select Date</label>
                     <input className="text-sm w-24 h-5 px-0 py-0 border rounded-1g bg-white-800 focus:border-blue-900" required type="Date"onChange={(e)=>setDate(e.target.value)}/>
                       </div> 
                     <div className="inlie-flex space-x-2 py-3">
                     <button type="submit" className="bg-blue-950 text-sm text-white rounded-lg font-semibold justify-items-center hover:bg-white hover:text-purple-950">Create Ticket</button>
                     <button onClick={()=>navigate('/SERVICE')} className="bg-blue-950 font-semibold  text-sm text-white rounded-lg justify-items-center hover:bg-white hover:text-purple-950">Back</button>
                     <button onClick={()=>navigate('/')} className="bg-blue-950 text-sm font-semibold  text-white rounded-lg justify-items-center hover:bg-white hover:text-purple-950">Logout</button>

                    </div>
                    </form>
                     
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

    
    
    )
}
export default Create;