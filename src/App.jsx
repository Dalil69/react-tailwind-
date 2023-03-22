import { useState } from 'react'
import './App.css'

function App() {
const [count, setCount] = useState(0)

return (
<div>
<div className="fixed top-0 left-6 flex items-center justify-center w-20 h-20 rounded-full bg-gray-200 shadow-lg">
   <img src="https://marketplace.canva.com/EAFcfJq9G10/1/0/1600w/canva-red-blue-white-illustrated-car-wash-logo-MEb7Dbl9ZuE.jpg" alt="Logo" className="w-20 h-20 rounded-full" />
</div>
<div className="fixed top-0 left-0 w-full">
   <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/2558909-plaque-de-metal-noir-texture-en-tete-fond-en-acier-inox-avec-gradient-modern-vector-illustration-banner-vectoriel.jpg" alt="description_de_l'image" className="w-full" />
</div>
<h1 className="text-3xl font-bold underline">LOCA'PURE</h1>
<h2>Nos Marques</h2>
<ul>
<li className="flex flex-col items-center"> <img
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/1/1d/Lamborghini-Logo.svg/1200px-Lamborghini-Logo.svg.png"
              alt=""
              class="h-20 w-30 object-cover"
            /> <button class="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 px-4 py-2 text-white transition-all duration-200 ease-in-out transform hover:scale-105">Lamborghini</button>
            </li>
<li className="flex flex-col items-center"> <img
              src="https://www.freepnglogos.com/uploads/mercedes-logo-png/mercedes-logo-mercedes-benz-logo-png-transparent-svg-vector-bie-13.png"
              alt=""
              class="h-20 w-30 object-cover"
            /><button class="bg-black hover:bg-black active:bg-black px-4 py-2 text-white transition-all duration-200 ease-in-out transform hover:scale-105">Mercedes</button></li>
<li className="flex flex-col items-center"> <img
              src="https://www.pngplay.com/wp-content/uploads/13/Renault-Logo-PNG-Photos.png"
              alt=""
              class="h-20 w-30 object-cover"
            /><button class="bg-red-500 hover:bg-red-600 active:bg-red-700 px-4 py-2 text-white transition-all duration-200 ease-in-out transform hover:scale-105">Renault</button></li>
<li className="flex flex-col items-center"> <img
              src="https://assets.stickpng.com/images/580b585b2edbce24c47b2c18.png"
              alt=""
              class="h-20 w-30 object-cover"
            /><button class="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 px-4 py-2 text-white transition-all duration-200 ease-in-out transform hover:scale-105">Audi</button></li>
<li className="flex flex-col items-center"> <img
              src="https://www.pngplay.com/wp-content/uploads/13/BMW-Logo-PNG-Pic-Background.png"
              alt=""
              class="h-20 w-30 object-cover"
            /><button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 px-4 py-2 text-white transition-all duration-200 ease-in-out transform hover:scale-105">BMW</button></li>
</ul>
<div className="fixed top-0 right-0">
      <button className="hover:bg-slate-700 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2 mr-2">Connexion</button>
      <button className="hover:bg-slate-700 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">Inscription</button>
    </div>

</div>
)
}

export default App
