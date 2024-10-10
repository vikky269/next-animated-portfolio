"use client"

const Homepage = () => {

  return (
    <div className="flex flex-col gap-4 lg:items-center lg:justify-center  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row">

     <div className="h-1/2 lg:w-1/2 flex-1">
        <img src="/hero.png" />
      </div>



{/* TEXT CONTAINER */}
     <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:w-1/2 flex-1 pt-4">
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



// <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row">
//        {/* IMAGE CONTAINER */}
//      <div className="h-1/2 relative lg:h-full lg:w-1/2">
//         <Image src="/hero.png" alt="" fill className="object-contain" />
//       </div>
//       {/* TEXT CONTAINER */}
//      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
//         {/* Title */}
//         <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
//         {/* DESC */}
//         <p className="md:text-xl">
//           Welcome to my digital canvas, where innovation and creativity
//           converge. With a keen eye for aesthetics and a mastery of code, my
//           portfolio showcases a diverse collection of projects that reflect my
//           commitment to excellence.
//         </p>
//         {/* BUTTONS */}
//         <div className=" w-full flex gap-4">
//           <button className="p-4 ring-1 bg-black ring-black text-white rounded-lg">View My Work</button>
//           <button className="p-4 ring-1 ring-black rounded-lg">Contact Me</button>
//         </div>

//       </div>
//     </div>