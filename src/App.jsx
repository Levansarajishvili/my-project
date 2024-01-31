import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Facebook } from "../Images/Facebook"
import { Socialss } from "../Images/Socialss"
import { Socials3 } from "../Images/Socials3"
import { Logo } from "../Images/Logo"
import { Login } from "../Images/Login"
import { Search } from "../Images/Search"
import { Cart } from "../Images/Cart"
import { Burger } from "../Images/Burger"
import { Guitarbg } from "../Images/Guitarbg"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header className='bg-[#012426] w-full h-[96px] flex justify-center items-center'>
        <div className='min-[320px]:hidden lg:flex justify-between w-[80%]'>
          <ul className='flex justify-between'>
            <li className='mr-[32px]'>
              <a href="#" className='font-inter text-[#A1C3C9] font-normal text-2xl'>Home</a>
            </li>

            <li className='mr-[32px]'>
              <a href="#" className='font-inter text-[#A1C3C9] font-normal text-2xl'>Catalog</a>
            </li>

            <li className='mr-[32px]'>
              <a href="#" className='font-inter text-[#A1C3C9] font-normal text-2xl'>Contact Us</a>
            </li>
          </ul>
          <Logo />
          <div className='w-[20%] flex justify-between'>
            <button><Search /></button>
            <button className='w-[40px] h-[40px] bg-[#05BCCA] rounded-lg flex items-center justify-center'><Login /></button>
            <button className='w-[40px] h-[40px] border-solid border-2 border-[#05BCCA] rounded-lg flex items-center justify-center'><Cart /></button>
          </div>
        </div>

        <div className='lg:hidden min-[320px]:flex justify-between w-[80%]'>
          <div className='w-[30%] flex justify-start'>
            <Burger />
          </div>

          <Logo />
          <div className='w-[20%] flex justify-between'>
            <button><Search /></button>
            <button className='w-[40px] h-[40px] bg-[#05BCCA] rounded-lg flex items-center justify-center'><Login /></button>
            <button className='w-[40px] h-[40px] border-solid border-2 border-[#05BCCA] rounded-lg flex items-center justify-center'><Cart /></button>
          </div>
        </div>
      </header>
      <main className='w-full flex justify-center items-center'>
        <div className='w-full h-[400px] relative '>
          <img className='z-[-10] w-full' src="/Images/Guitarbggg.svg" alt="" />

          <div className='w-full flex justify-center'>
            <div className='flex justify-between items-center absolute top-[72px]'>
              <h2 className='font-inter font-normal text-[32px] leading-9 text-[#fff] '>NEW <span className='text-[#05BCCA]'> COLLECTION</span></h2>
              <a href="#" className='bg-[#C46A2B] p-[1px 3px] text-[#fff]'>&#8594;</a>
            </div>
          </div>
        </div>
      </main>

      <footer className='bg-[#2C4246] w-full flex justify-center items-center py-[64px]'>
        <div className='min-[320px]:hidden md:flex flex-col w-[80%] my-8 '>
          <div className='flex justify-between items-start '>
            <div>
              <h2 className='font-inter text-[#D9D9D9] font-normal text-2xl underline mb-[24px]'>Brands</h2>
              <ul>
                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Fender</a>
                </li>

                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Gibson</a>
                </li>

                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Jockson</a>
                </li>

                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Ibanez</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='font-inter text-[#D9D9D9] font-normal text-2xl underline mb-[24px]'>Information</h2>
              <ul>
                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Blog</a>
                </li>

                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Delivey</a>
                </li>

                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>About us</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='font-inter text-[#D9D9D9] font-normal text-2xl underline mb-[24px]'>Contact</h2>
              <ul>
                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Tbilisi, str, Rustaveli 24</a>
                </li>

                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>+(32)2 56 78 98</a>
                </li>
              </ul>

              <div className='flex justify-between'>
                <Facebook />
                <Socialss />
                <Socials3 />
              </div>
            </div>

          </div>
          <div className='text-center font-inter text-[#D9D9D9] font-normal text-base'><span>&copy;</span>All right reserved.2025.</div>
        </div>

        <div className='md:hidden min-[320px]:flex flex-col w-[80%] my-8 '>
          <div className='flex flex-col items-center'>
            <div className='text-center mb-[40px]'>
              <h2 className='font-inter text-[#D9D9D9] font-normal text-2xl underline mb-[24px]'>Brands</h2>
              <ul>
                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Fender</a>
                </li>

                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Gibson</a>
                </li>

                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Jockson</a>
                </li>

                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Ibanez</a>
                </li>
              </ul>
            </div>

            <div className='text-center mb-[40px]'>
              <h2 className='font-inter text-[#D9D9D9] font-normal text-2xl underline mb-[24px]'>Information</h2>
              <ul>
                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Blog</a>
                </li>

                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Delivey</a>
                </li>

                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>About us</a>
                </li>
              </ul>
            </div>

            <div className='text-center'>
              <h2 className='font-inter text-[#D9D9D9] font-normal text-2xl underline mb-[24px]'>Contact</h2>
              <ul>
                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>Tbilisi, str, Rustaveli 24</a>
                </li>

                <li className='mb-[8px]'>
                  <a href="#" className='font-inter text-[#D9D9D9] font-normal text-base'>+(32)2 56 78 98</a>
                </li>
              </ul>

              <div className='flex justify-between mt-[8px]'>
                <Facebook />
                <Socialss />
                <Socials3 />
              </div>
            </div>

          </div>
          <div className='text-center font-inter text-[#D9D9D9] font-normal text-base mt-[48px]'><span>&copy;</span>All right reserved.2025.</div>
        </div>
      </footer>

    </div>
  )
}

export default App
