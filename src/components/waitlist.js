import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './waitlist.css';

const Waitlist = ({ toggleActive }) => {

    return (
<div className="blurry flex justify-center items-center min-h-[550px] ">
<div className=' flex flex-col contentt justify-center items-center'>
        <div className='flex justify-end w-full  h-20px ' >
        <FontAwesomeIcon
			icon={faTimes}
            onClick={toggleActive}
            className='w-100% font-bold text-[#946aef]'>
        </FontAwesomeIcon>
        </div>
    <div className='flex flex-1 justify-left w-full text-[23px]'>
        Leave Your email
    </div>
    <div className='text-[12px]'>
        Get an opportunity to become one of the first Gamedey 
        users and also participate in our usability testing before launch day.
    </div>
    <form
                    action="https://gamedey.us14.list-manage.com/subscribe/post?u=cd0e8d687a0483e5ef74ca4c5&amp;id=cc2b3a4692&amp;f_id=0033b8e5f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
	            className='flex  flex-col w-[100%]'
                >
                            <input
                                type="email"
                                name="EMAIL"
		            	placeholder='Enter Email'
                                className="required email mt-7 mb-4"
                                id="mce-EMAIL"
                                required
                            />
                            <input
                                type="text"
                                name="FNAME"
				placeholder='Name'
                                className="required text mb-2"
                                id="mce-FNAME"
                                required
                            />
					<input
                                    type="submit"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    value="Subscribe" 
				    className='input text-white text-bold'
                                />
                </form>
    </div>
</div>
    )}

    export default Waitlist;
