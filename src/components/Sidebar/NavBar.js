import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/instagram-logo.png'
import { Link } from 'react-router-dom'

const NavBar = ({signOut}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMessageNumber, setIsMessageNumber] = useState(0);
  
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };


  return (
    <>
      <aside 
        id="logo-sidebar" 
        className="fixed top-0 left-0 z-40 h-screen w-64 sm:w-16 transition-transform -translate-x-full sm:translate-x-0 sm:h-auto sm:flex sm:justify-center sm:flex-row sm:w-full backdrop-blur-md border border-white border-opacity-30 rounded-lg  lg:h-screen lg:w-64 lg:flex-col" 
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 sm:py-0 sm:px-10  overflow-y-auto space-y-0 space-x-0 justify-left backdrop-blur-md border-1 border-white border-opacity-30 rounded-lg dark:bg-gray-800 xs:flex xs:flex-row xs:w-full sm:flex sm:flex-row xs:justify-between  sm:w-full  sm:justify-between lg:block">
          <Link to="/" className="flex items-center mb-5 sm:mb-0 sm:justify-center sm:w-100">
            <img 
              src={isDarkMode ? logo : "https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"} 
              className="h-6 sm:h-8 lg:h-7 mt-2" 
              alt="Instagram Logo" 
            />
          </Link>
          
          <ul className="space-y-2 space-x-8 pl-6 pb-6 pt-4 align-baseline font-medium sm:flex sm:space-y-0 sm:space-x-2 sm:items-center sm:space-x-0 sm:space-y-0 lg:flex-col  lg:items-start ">
            <li className='flex flex-col items-center '>
              <Link to="/"
                className="space-y-0 space-x-4 flex items-center justify-center p-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-8 h-8 transition duration-75 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 10L12 4L20 10V20H14V14H10V20H4V10Z"
                  />
                </svg>
                <span className="ms-3 hidden lg:block">Home</span>
              </Link>
            </li>
            
            <li className='flex flex-col items-center '>
              <Link to="/search"
                className="space-y-2 space-x-4 flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transition duration-75 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ms-3 hidden lg:block">Search</span>
              </Link>
            </li>

            <li className='flex flex-col items-center '>
              <Link to="/explore"
              className="space-y-0 space-x-3 flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="w-7 h-7 transition duration-75 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M12 12H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16 8L9.5 9.5L8 16L14.5 14.5L16 8Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ms-3 hidden lg:block">Explore</span>
              </Link>
            </li>

            <li className='flex flex-col items-center '>
              <Link to="/messages" className="space-y-0 space-x-5 flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group relative">
                <svg
                  className="w-6 h-6 transition duration-75 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="16" cy="12" r="1" />
                  <circle cx="8" cy="12" r="1" />
                  <path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zm.83 8.36a8 8 0 0 1-11 6.08 3.26 3.26 0 0 0-1.25-.26 3.43 3.43 0 0 0-.56.05l-2.82.57.57-2.82a3.09 3.09 0 0 0-.21-1.81 8 8 0 0 1 6.08-11 8 8 0 0 1 9.19 9.19z" />
                </svg>
                <span className="ms-3 hidden lg:block">Messages</span>
                <span className=" inset-1 object-right-top mr-24">
                {isMessageNumber != null && (
                  <div className="inline-flex items-center px-1 py-0.5 border-1 border-white rounded-full text-xs font-semibold leading-3 bg-red-500 text-white">
                    <span>{isMessageNumber > 0 ? isMessageNumber : ''}</span>
                  </div>
                )}
                </span>
              </Link>
            </li>

            <li className='flex flex-col items-center '>
            <Link  to="/notifications"
             className="space-y-0 space-x-4 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg
               className="flex-shrink-0 w-6 h-6 text-black transition duration-75 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth="2"
               >
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
            </svg>
               <span className="ms-3 hidden lg:block">Notifications</span>
            </Link>
         </li>
         <li className='flex flex-col items-center '>
            <Link  to="/post" className="space-y-0 space-x-4 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg
               className="flex-shrink-0 w-6 h-6 text-black transition duration-75 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               stroke='currentColor'
               viewBox="0 0 26 26"
               strokeWidth="1.5"
               >
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
               />
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
               />
            </svg>

               <span className="ms-3 hidden lg:block">Create</span>
            </Link>
         </li>
         <li className='flex flex-col items-center '>
              <Link to={"/profile"}
                className="space-y-0 space-x-4 flex items-center justify-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src={`https://via.placeholder.com/40?text=Sugg+${1  + 1}`}
                  alt="Suggestion"
                  className="w-10 h-10 rounded-full object-full border-2 border-white"
                />
                <span className="ms-3 hidden lg:block">profile</span>
              </Link>
            </li>
         
            <li className='flex flex-col items-center '>
              <button
                id="dropdownTopButton"
                onClick={toggleDropdown}
                className="absolute bottom-8 flex items-center text-white space-x-4 block px-2 py-2 hover:bg-gray-100 hover:bg-rounded dark:hover:bg-gray-600 dark:hover:text-white xs:hidden sm:flex sm:px-2 sm:py-2 sm:space-x-2 xs:px-2 xs:py-2 xs:space-x-2 xs:block"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-black transition duration-75 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                  strokeWidth="1.5"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" strokeWidth="4" strokeLinejoin="round"/>
                  <rect x="4" y="28" width="16" height="16" rx="2" fill="currentColor" strokeWidth="4" strokeLinejoin="round"/>
                  <rect x="28" y="4" width="16" height="16" rx="2" fill="currentColor" strokeWidth="4" strokeLinejoin="round"/>
                  <path d="M28 28H44" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36 36H44" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M28 44H44" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
                <span className="ms-3 hidden lg:block">More</span>
              </button>

              {/* Dropdown content */}
              {isDropdownOpen && (
                <div id="dropdownTop" className="absolute bottom-6 z-10 mb-24 ml-24 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownTopButton">
                  <li className='flex flex-col items-center '>
                    <Link
                      to="/settings"
                      className="flex items-center space-x-4 block px-2 py-2 hover:bg-gray-100  rounded-lg dark:hover:bg-gray-500 dark:hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-settings w-6 h-6"
                      >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
                        ></path>
                      </svg>
                      <span className="ms-3 hidden lg:block">Settings</span>
                    </Link>
                  </li>

                    <li className='flex flex-col items-center '>
                      <Link onClick={signOut} className="space-x-4 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group block px-4 py-2  dark:hover:bg-gray-500 dark:hover:text-white">
                        <svg
                          className="w-5 h-5 text-black transition duration-75 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                        </svg>
                        <span className="ms-3 hidden lg:block">Sign Out</span>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              )}
            </li> 
      </ul>
   </div>
</aside>
    </>
  )
}

export default NavBar