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
		    <form
                    action="https://gamedey.us14.list-manage.com/subscribe/post?u=cd0e8d687a0483e5ef74ca4c5&amp;id=cc2b3a4692&amp;f_id=0033b8e5f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                >
                    <div id="mc_embed_signup_scroll">
                        <div className="indicates-required">
                            <span className="asterisk">*</span> indicates required
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">
                                Email Address <span className="asterisk">*</span>
                            </label>
                            <input
                                type="email"
                                name="EMAIL"
                                className="required email"
                                id="mce-EMAIL"
                                required
                                defaultValue=""
                            />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">
                                Name <span className="asterisk">*</span>
                            </label>
                            <input
                                type="text"
                                name="FNAME"
                                className="required text"
                                id="mce-FNAME"
                                required
                                defaultValue=""
                            />
                        </div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                            <input
                                type="text"
                                name="b_cd0e8d687a0483e5ef74ca4c5_cc2b3a4692"
                                tabIndex="-1"
                                defaultValue=""
                            />
                        </div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input
                                    type="submit"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="button"
                                    value="Subscribe"
                                />
                                <p style={{ margin: '0px auto' }}>
                                    <a
                                        href="http://eepurl.com/iWKdTY"
                                        title="Mailchimp - email marketing made easy and fun"
                                    >
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                backgroundColor: 'transparent',
                                                borderRadius: '4px',
                                            }}
                                        >
                                            <img
                                                className="refferal_badge"
                                                src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                                alt="Intuit Mailchimp"
                                                style={{
                                                    width: '220px',
                                                    height: '40px',
                                                    display: 'flex',
                                                    padding: '2px 0px',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            />
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
    </div>
</div>
    )}

    export default Waitlist;
