'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo-white.png';
import profileDefault from '@/assets/images/profile.png';
import { FaGoogle } from 'react-icons/fa';
import { signIn, signOut, useSession, SessionProvider  } from 'next-auth/react';


const Navbar = () => {
  const { data: session } = useSession();
  //const  session = useSession();
  const profileImage = session?.user?.image;

  const [showNav, setShowNav] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center p-3 flex-wrap text-white bg-black">
      <div
        id="logo"
        className="lg:text-xl p-2 mr-4 inline-flex items-center font-serif font-bold"
      >
        <Link href="/">
          Ucayali
        </Link>
      </div>
      <button
        onClick={() => setShowNav(!showNav)}
        type="button"
        className="inline-flex p-3 text-white hover:text-gray-300 focus:text-white focus:outline-none lg:hidden ml-auto"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 -53 384 384"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>
      </button>

      <div className="w-full flex-grow lg:inline-flex lg:flex-grow lg:w-auto">
        <div className={"lg:inline-flex lg:flex-row lg:ml-auto flex flex-col " +  (showNav ? "" : "hidden") }>
          <Link href="/" className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900">
              Home
          </Link>

          <Link href="/about" className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900">
              About
          </Link>
          <Link href="/contact" className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900">
              Contact Us
          </Link>
          {!session && (

                <Link href='/api/auth/signin'
                 className='lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-green-500 hover:bg-gray-900'>
                  Login or Register
                </Link>
          )}
      </div>
      </div>
      <button
        onClick={() => setShowLoginMenu(!showLoginMenu)}
        type="button"
        className="inline-flex p-3 text-white hover:text-gray-300 focus:text-white focus:outline-none lg:hidden ml-auto"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 -53 384 384"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>
      </button>
      <div className={"lg:inline-flex lg:flex-row lg:ml-auto flex flex-col " + (showLoginMenu ? "" : "hidden") }>
        {session && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
              <Link href='/messages' className='relative group'>
                <button
                  type='button'
                  className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <span className='absolute -inset-1.5'></span>
                  <span className='sr-only'>View notifications</span>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                    />
                  </svg>
                </button>
                {/* <UnreadMessageCount session={session} /> */}
              </Link>
              {/* <!-- Profile dropdown button --> */}
              <div className='relative ml-3'>
                <div>
                  <button
                    type='button'
                    className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded={isProfileMenuOpen}
                    aria-haspopup='true'
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                      className='h-8 w-8 rounded-full'
                      src={profileImage || profileDefault}
                      alt=''
                      width={40}
                      height={40}
                    />
                  </button>
                </div>

                {/* <!-- Profile dropdown --> */}
                {isProfileMenuOpen && (
                  <div
                    id='user-menu'
                    className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    tabIndex='-1'
                  >
                    <Link
                      href='/profile'
                      className='block px-4 py-2 text-sm text-black-2'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-0'
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                      }}
                    >
                      Your Profile
                    </Link>
                    <Link
                      href='/properties/saved'
                      className='block px-4 py-2 text-sm text-black-2'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-2'
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                      }}
                    >
                      Saved Properties
                    </Link>
                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        signOut();
                      }}
                      className='block px-4 py-2 text-sm text-black-2'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-2'
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
      </div>
    </header>
    </>
  );
};

export default Navbar;

// import Link from "next/link";
// import Login from "./login";


// const NavBar = () => {
//   return (
//     <div className="bg-black p-2 flex gap-5">
//         <Link className="text-gray-100" href="/">Home</Link>
//         <Login/>
//     </div>
//   )
// }
// export default NavBar