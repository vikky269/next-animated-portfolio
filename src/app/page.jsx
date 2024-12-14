"use client"
import Image from "next/image";

const Homepage = () => {

  return (
    <div className="h-full overflow-auto flex flex-col gap-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row">

     
        <div className="lg:w-full lg:h-full flex justify-center items-center">
         <img src="/hero.png" alt="" className="object-contain" />
        </div>
      



{/* TEXT CONTAINER */}

     <div className="lg:mt-16 flex flex-col gap-8 items-center justify-center">
         {/* Title */}
         <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
         {/* DESC */}
         <p className="md:text-xl">
           Welcome to my digital canvas, where innovation and creativity
           converge. With a keen eye for aesthetics and a mastery of code, my
           portfolio showcases a diverse collection of projects that reflect my
           commitment to excellence.
         </p>
         {/* BUTTONS */}
         <div className=" w-full flex gap-4 justify-start items-center pb-4">
           <button className="p-4 ring-1 bg-black ring-black text-white rounded-lg">View My Work</button>
           <button className="p-4 ring-1 ring-black rounded-lg">Contact Me</button>
         </div>
    </div>

    </div>
  ) 
   
}

export default Homepage;