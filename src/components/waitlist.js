import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './waitlist.css';

const Waitlist = ({ toggleActive }) => {

    const [name, setName] = useState('');
  const [emaill, setEmaill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${emaill}`);
  };

    return (
<div className="blurry flex justify-center items-center min-h-[550px] ">
<div className=' flex flex-col contentt justify-center items-center'>
        <div className='flex justify-end w-full  h-20px ' >
        <FontAwesomeIcon
			icon={faTimes}
            onClick={toggleActive}
            className='w-100% text-[#946aef]'>
        </FontAwesomeIcon>
        </div>
    <div className='flex flex-1 justify-left w-full text-[23px]'>
        Leave Your email
    </div>
    <div className='text-[11px]'>
        Get an opportunity to become one of the first Gamedey 
        users and also participate in our usability testing before launch day.
    </div>
    <form onSubmit={handleSubmit}>
            <input
            type="text"
            id="name"
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            className='mt-7 mb-4'
            required
            />

            <input
            type="text"
            id="emaill"
            value={emaill}
            placeholder='Enter Email'
            onChange={(e) => setEmaill(e.target.value)}
            className='mb-7'
            required
            />

            <input type="submit" value="Send" />
        
        </form>
    </div>
</div>
    )}

    export default Waitlist;