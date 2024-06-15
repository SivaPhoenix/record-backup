
import React, { useState } from 'react';
import clg from '../assets/loginClg.png';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import lottie from 'lottie-web';
import welcome from '../assets/welcome.svg';
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
      
        <div className="w-1/2" style={{ background: 'linear-gradient(to bottom, #EB7C49, #F04F52)' }}></div>
      </div>
      {/* Main content */}
      <div className={`relative flex w-3/4 max-w-4xl p-5 bg-white rounded-lg  shadow-lg overflow-hidden ${showForgotPassword ? 'flex-col' : 'flex-row'}`}>
        {!showForgotPassword ? (
          <>
            {/* Login Section */}
            
            <div className="w-[45%] bg-[#2B66F6] flex flex-col gap-4 p-12 rounded-lg">
              <img src={logo} alt="record" className="mb-2 w-28"/>
              <div className='font-sans font-semibold text-3xl text-white'>Welcome</div>
              <div className='font-sans font-semibold text-sm text-white'>Sign in and see your students performance and manage your institution.</div>
              <div className='flex justify-center items-center'>
              <img src={welcome} alt="Welcome" className="mb-4 w-max" />
              </div>
            </div>
            
            <div className="ml-9 w-1/2 p-5 flex flex-col justify-center">
              <div className="flex flex-col items-center justify-center mb-1">
                <img src={clg} alt="college" className="w-14"/>
              </div>
              <h2 className="text-3xl font-sans mb-3 text-center">Sign In.</h2>
              <h3 className="text-sm font-sans mb-3 text-center">Let's know your student’s performance.</h3>
              <form className='p-3'>
                {/* Form Inputs */}
                <div className="mb-5">
                    {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label> */}
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="Enter Email Address" required />
                </div>
                <div className="mb-5">
                    {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label> */}
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 " placeholder="Password" required />
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
                <div className=' flex text-sm justify-center items-center mt-2'>Don’t have an account? <span className='font-semibold text-black'> Contact Administrator.</span></div>
              </form>
              {/* Copyright */}
              <div className='flex mt-12 text-sm text-gray-400'>
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
                className=" p-2"
              >
                <div className='flex justify-center items-center'><MdOutlineKeyboardArrowLeft/><p className='text-sm font-sans' >Go Back</p></div> 
              </button>
            </div>
            <div className="flex flex-col items-center justify-center p-10">
              <img src="https://qudo-creations.s3.ap-south-1.amazonaws.com/other-brand-assets/record.png" className="mb-4 h-10 w-28" />
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
                    <div className="mb-4">
                    {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label> */}
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="Enter Email Address" required />
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
