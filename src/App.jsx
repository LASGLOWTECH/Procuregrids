
// import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import CountdownTimer from "./assets/CountdownTimer"
import Navbar from "./assets/Navbar"
import Footer from "./assets/Footer"

function App() {
  
  const targetDate = '2024-08-10T00:00:00Z';
  return (
  
    <main className="min-h-screen p-16  flex items-center justify-center flex-col bg-gradient-to-r from-Armygreen to-darkBlue">
   


   <Link href='/'>
   <img src="/pgrid.svg"
     className="pb-6 size-auto"
     width={200}
     alt="procuregrids"
     height={150}
                            />

                    </Link>


    <Link href="/#"> 
     <image className="pb-6 size-auto"
      src="pgrid.svg"
      alt="procuregrids"
      width={200}
      height={150}/></Link>
    <section className=' flex flex-col items-center justify-center'>
    

      <h1 className='text-white text-3xl  md:text-7xl py-6 text-center  shadow-2xl px-3 shadow-Lemongreen font-extrabold'>We are coming soon</h1>
      <p className='text-gray-300 pt-4 text-center text-base md:max-w-2xl pb-6 '> ProcureGrids is Africa&apos;s first construction cost control technology. We host a market place that connects construction material vendors/supplier to construction companies, real estate developers, government entities and independent private builders. 
Join  our wait-list.
We go live in 3 months.  </p>
     
      <CountdownTimer targetDate={targetDate} />
      <div className="submit flex  flex-col justify-start  pt-9">


        <div className="text-lg text-white flex place-self-start  font-bold  hover:bg-white hover:text-Armygreen focus:outline-none rounded-md px-6 py-3 shadow-Armygreen  my-3 bg-Lemongreen">
          <Link to="https://chat.whatsapp.com/HsmSDaMWczZAer8iWtcS1x">Join Waitlist</Link>

        </div>


      </div>


    </section>

<Footer/>
  </main>




    
  )
}

export default App
