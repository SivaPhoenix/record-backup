
import { useState } from 'react';
import clg from '../assets/loginClg.png';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import lottie from 'lottie-web';
import anim from '../assets/about.png';
import logo from '../assets/brand-logo.svg';

const Signin = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleBackToLoginClick = () => {
    setShowForgotPassword(false);
    setEmailSent(false); // Reset email sent state
  };

  const handleSendClick = () => {
    // event.preventDefault();
    setEmailSent(true);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      {/* Pseudo-element for background split */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-white"></div>
        {/* <div className="w-1/2 bg-orange-500"></div> */}
        <div className="w-1/2" style={{ background: 'linear-gradient(to bottom, #EB7C49, #F04F52)' }}></div>
      </div>
      {/* Main content */}
      <div className={`relative flex w-3/4 max-w-4xl bg-white rounded-lg p-7 shadow-lg overflow-hidden ${showForgotPassword ? 'flex-col' : 'flex-row'}`}>
        {!showForgotPassword ? (
          <>
            {/* Login Section */}
            <div className="w-1/2 bg-[#2B66F6] flex flex-col items-center justify-center p-12 rounded-lg">
              <img src={logo} className="mb-4 h-[3rem] w-28" />
              {/* <img src="https://iconscout.com/lottie-animation/profile-login-6760440" className="mb-4 h-[3rem] w-28" /> */}
              <img src={anim} alt="Welcome" className="mb-4 h-96 w-max" />
              {/* <h2 className="text-white text-3xl">Welcome to the page</h2> */}
            </div>
            <div className="w-1/2 p-5 flex flex-col justify-center">
              <div className="flex flex-col items-center justify-center mb-4">
                <img src={clg} alt="Welcome" className="mb-4 h-20 w-20"/>
              </div>
              <h2 className="text-3xl font-sans mb-4 text-center">Sign In.</h2>
              <h3 className="text-sm font-sans mb-4 text-center">Let's know your student’s performance.</h3>
              <form className='p-3'>
                {/* Form Inputs */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2B66F6] text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Sign In
                </button>
                <div className="flex justify-between items-center mt-4">
                  {/* Checkbox and Forgot Password Link */}
                  <div className="flex items-center">
                    <input type="checkbox" id="keep-signed-in" className="mr-2" />
                    <label htmlFor="keep-signed-in" className="text-sm text-gray-700">
                      Keep me signed in
                    </label>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={handleForgotPasswordClick}
                      className="text-sm text-[#2B66F6] hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>
                </div>
              </form>
              {/* Copyright */}
              <div className='flex mt-16 text-sm text-gray-400'>
                <div className="w-full flex justify-start">
                  Privacy Policy
                </div>
                <div className="w-full flex justify-end">
                  Copyright 2022
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Forgot Password Section */}
            <div className="w-full p-4 flex justify-start">
              <button
                type="button"
                onClick={handleBackToLoginClick}
                className=" bg-gray-300 p-2 border rounded focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <div className='flex justify-center items-center'><MdOutlineKeyboardArrowLeft/><p className='text-sm font-sans' >Go Back</p></div> 
              </button>
            </div>
            <div className="flex flex-col items-center justify-center p-10">
              <img src="https://qudo-creations.s3.ap-south-1.amazonaws.com/other-brand-assets/record.png" className="mb-4 h-[3rem] w-28" />
              {/* Email Sent Confirmation */}
              {emailSent ? (
                <div className='w-1/2'>
                  <h2 className="text-3xl font-sans mb-4 text-center">Great!</h2>
                  <p className="text-sm text-gray-400 font-sans mb-4 text-center">Password reset link has been sent to your email.</p>
                  <button
                    onClick={handleBackToLoginClick}
                    className="w-full bg-[#2B66F6] text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    Sign In
                  </button>
                </div>
              ) : (
                <>
                  {/* Forgot Password Form */}
                  <h2 className="text-3xl font-sans mb-4 text-center">Forgot Password</h2>
                  <h3 className="text-sm text-gray-400 font-sans mb-4 text-center">Don't worry! Resetting your password is simple. Just type<br/>
                  in the email you registered to Record.</h3>
                  <form className="w-1/2" onSubmit={handleSendClick}>
                    {/* Email Input */}
                    <div className="relative z-0 w-full mb-9 group">
                      <input
                        type="email"
                        id="forgot-email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="forgot-email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email address
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#2B66F6] text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                      Send
                    </button>
                  </form>
                </>
              )}
              {/* Copyright */}
              <div className='w-full flex mt-20 text-sm text-gray-400'>
                <div className="w-full flex justify-start">
                  Privacy Policy
                </div>
                <div className="w-full flex justify-end">
                  Copyright 2022
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Signin;
