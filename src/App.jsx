import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CartPage from "./routes/CartPage.jsx";
import LamborghiniPage from "./routes/LamborghiniPage.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");

  const handleShowPage = (page) => {
    setCurrentPage(page);
  };
  return (
      <div className="min-h-screen">
        
        <div className="fixed top-0 left-0 w-full h-16 bg-gray-200 shadow-lg">
          <img
            src="https://static.vecteezy.com/ti/vecteur-libre/p1/2558909-plaque-de-metal-noir-texture-en-tete-fond-en-acier-inox-avec-gradient-modern-vector-illustration-banner-vectoriel.jpg"
            alt="description_de_l'image"
            className="w-full h-16"
          />
           <img
             src="https://marketplace.canva.com/EAFcfJq9G10/1/0/1600w/canva-red-blue-white-illustrated-car-wash-logo-MEb7Dbl9ZuE.jpg"
            alt="Logo"
             className="w-16 h-16 rounded-full absolute top-0 left-6"
            />
            
          <h1 className="text-white font-bold text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-red animate-pulse">LOCA'PURE</h1>
          <div className="flex items-center absolute top-0 right-0 h-16 pr-4">
          <button
            onClick={() => handleShowPage("home")}
            className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 px-4 py-2 text-white rounded-full transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Accueil
          </button>

          <button className="hover:bg-slate-700 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2 mr-2">Connexion</button>
           <button className="hover:bg-slate-700 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">Inscription</button>
          </div>
        </div>
        {currentPage === "cart" && <CartPage />}
  {currentPage === "lamborghini" && <LamborghiniPage />}
  {currentPage === "home" && (
    <>


      <h2 className="text-2xl font-bold mb-8 text-center mt-20">Nos Marques</h2>
      <ul>
        <li className="flex flex-col items-center"> 
        <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/1/1d/Lamborghini-Logo.svg/1200px-Lamborghini-Logo.svg.png" alt="" class="h-20 w-30 object-cover" /> 
        <button
          onClick={() => handleShowPage("lamborghini")}
          className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 px-4 py-2 text-white rounded-full transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Lamborghini
        </button>
        </li>
        <li className="flex flex-col items-center"> 
        <img src="https://www.freepnglogos.com/uploads/mercedes-logo-png/mercedes-logo-mercedes-benz-logo-png-transparent-svg-vector-bie-13.png" alt="" class="h-20 w-30 object-cover" />
        <button className="bg-black hover:bg-black active:bg-black px-4 py-2 text-white rounded-full transition-all duration-200 ease-in-out transform hover:scale-105">Mercedes</button>
        </li>
        <li className="flex flex-col items-center"> 
        <img src="https://www.pngplay.com/wp-content/uploads/13/Renault-Logo-PNG-Photos.png" alt="" class="h-20 w-30 object-cover" />
        <button className="bg-red-500 hover:bg-red-600 active:bg-red-700 px-4 py-2 text-white rounded-full transition-all duration-200 ease-in-out transform hover:scale-105">Renault</button>
        </li>
        <li className="flex flex-col items-center"> 
        <img src="https://www.1min30.com/wp-content/uploads/2017/08/Logo-Audi-1.jpg" alt="" class="h-20 w-30 object-cover" />
        <button className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 px-4 py-2 text-white rounded-full transition-all duration-200 ease-in-out transform hover:scale-105">Audi</button>
        </li>
        <li className="flex flex-col items-center"> 
        <img src="https://www.pngplay.com/wp-content/uploads/13/BMW-Logo-PNG-Pic-Background.png" alt="" class="h-20 w-30 object-cover" />
        <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 px-4 py-2 text-white rounded-full transition-all duration-200 ease-in-out transform hover:scale-105">BMW</button>
        </li>
      </ul> 
      </>
      )}
    </div>
  );
}

export default App;
