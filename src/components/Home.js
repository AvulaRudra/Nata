import React, { useEffect, useRef, useState } from 'react';
import cart1 from '../images/cart1.png';
import cart2 from '../images/cart2.png';
import cart3 from '../images/cart3.png';
import bg1 from '../images/bg1.png';
// import Navbar from './Navbar';

const Home = () => {
  const images = [
    cart1,
    cart2,
    cart3,
    cart1,
    cart2,
    cart3,
  ];

  const scrollContainerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        if (scrollContainerRef.current.scrollLeft + scrollContainerRef.current.offsetWidth >= scrollContainerRef.current.scrollWidth) {
          scrollContainerRef.current.scrollLeft = 0;
        } else {
          scrollContainerRef.current.scrollLeft += 530; // Adjust the scroll amount as needed
        }
      }
    }, 2000); // 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="bg-cover bg-center min-h-screen" style={{backgroundImage: `url(${bg1})`}}>
        {/* <Navbar/> */}
        <div className="text-white" style={{ fontWeight: '600', fontSize: '36px' ,marginLeft:'50px'}}>
        About
        </div>
        <div className="text-white" style={{ marginLeft:'50px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
          Audax negotium, dicerem impudens, nisi hoc institut <br/>
          translatum ad philosophos nostros esset.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
          Audax negotium, dicerem impudens, nisi hoc institut <br/>
          translatum ad philosophos nostros esset.
        </div>
        <div className="container mx-auto p-4">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto whitespace-nowrap mb-4 scrollbar-thin scrollbar-thumb-gray-400"
            style={{maxHeight: '70vh', overflow: 'hidden'}}
          >
            <div className="flex" style={{scrollbarWidth: 'thin'}}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Drawing ${index + 1}`}
                  className="inline-block m-2 border-4 border-white rounded"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-evenly">
            <button className="bg-blue-500 text-white p-2 rounded flex items-center mr-2 transform hover:scale-110 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Reach Out
            </button>
            <button className="bg-green-500 text-white p-2 rounded flex items-center mr-2 transform hover:scale-110 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Enroll for Scholarship
            </button>
            <button className="bg-red-500 text-white p-2 rounded flex items-center transform hover:scale-110 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Courses
            </button>
          </div>
          {isMenuOpen && (
            <div className="bg-white absolute top-16 right-0 p-4 rounded shadow">
              <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
     
export default Home;

// import React from 'react';
// import cart1 from '../images/cart1.png';
// import cart2 from '../images/cart2.png';
// import cart3 from '../images/cart3.png';
// import bg1 from '../images/bg1.png';
// import Navbar from './Navbar';

// const Home = () => {
//   const images = [
//     cart1,
//     cart2,
//     cart3,
//     cart1,
//     cart2,
//     cart3,
//   ];

//   return (

//     <div className="bg-cover bg-center min-h-screen" style={{backgroundImage: `url(${bg1})`}}>
//       <Navbar/>
//       <div className="container mx-auto p-4">
//         <div className="text-white">
//           <div className=" p-4 rounded mb-4">
//             <h1 className="text-2xl font-bold">About</h1>
//             <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//           </div>

//         <div className="overflow-x-auto whitespace-nowrap mb-4 scrollbar-thin scrollbar-thumb-gray-400" style={{maxHeight: '70vh'}}>
//             <div className="flex" style={{scrollbarWidth: 'thin'}}>
//                 {images.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image}
//                         alt={`Drawing ${index + 1}`}
//                         className="inline-block m-2 border-4 border-white rounded"
//                     />
//                 ))}
//             </div>
//         </div>

//           <div className="flex justify-evenly">
//             <button className="bg-blue-500 text-white p-2 rounded flex items-center mr-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
//               </svg>
//               Reach Out
//             </button>
//             <button className="bg-green-500 text-white p-2 rounded flex items-center mr-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
//               </svg>
//               Enroll for Scholarship
//             </button>
//             <button className="bg-red-500 text-white p-2 rounded flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
//               </svg>
//               Courses
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;