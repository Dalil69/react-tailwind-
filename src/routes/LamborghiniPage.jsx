import React, { useState } from "react";
import CartPage from "./CartPage";

function LamborghiniPage() {
const [items, setItems] = useState([
{
id: 1,
name: "Lamborghini Aventador",
price: 1000,
imageUrl:
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/588390-1625663609.jpg",
},
{
id: 2,
name: "Lamborghini Huracan",
price: 900,
imageUrl:
"https://stzluxuryrent.it/wp-content/uploads/2021/12/LAMBORGHINI_HURACAN_PERFORMANTE_COPERTINA-1024x683.png",
},
{
id: 3,
name: "Lamborghini Urus",
price: 800,
imageUrl:
"https://www.turbo.fr/sites/default/files/slideshow/slides/2021-12/61c44b01afaca.jpg",
},
]);

const [cartItems, setCartItems] = useState([]);
const [cartItemCount, setCartItemCount] = useState(0);

const addToCart = (item) => {
const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
if (itemIndex !== -1) {
const updatedCartItems = [...cartItems];
updatedCartItems[itemIndex].quantity += 1;
setCartItems(updatedCartItems);
} else {
setCartItems([...cartItems, { ...item, quantity: 1 }]);
}
setCartItemCount(cartItemCount + 1);
};

return (
<div className="mt-4">
<h2 className="text-2xl font-bold mb-8 text-center mt-20">
Lamborghini
</h2>
<div className="flex justify-end mb-4">
</div>
<ul>
{items.map((item) => (
<li key={item.id} className="flex flex-col items-center mb-4">
<h3 className="font-bold text-xl mb-2">{item.name}</h3>
<img
           src={item.imageUrl}
           alt={item.name}
           className="h-64 w-auto object-cover mb-4"
         />
<p className="mb-2">Prix: {item.price} €/jour</p>
<button
className="bg-green-500 hover:bg-green-600 active:bg-green-700 px-4 py-2 text-white rounded-full transition-all duration-200 ease-in-out transform hover:scale-105"
onClick={() => addToCart(item)}
>
Ajouter au panier
</button>
</li>
))}
</ul>
<CartPage cartItems={cartItems} setCartItemCount={setCartItemCount} />
</div>
);
}

export default LamborghiniPage;