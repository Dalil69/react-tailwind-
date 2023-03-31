import React from "react";

function CartPage({ cartItems, setCartItemCount, setCartItems }) {
  const removeFromCart = (item) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (updatedCartItems[itemIndex].quantity <= 1) {

      updatedCartItems.splice(itemIndex, 1);
    } else {
      updatedCartItems[itemIndex].quantity -= 1;
    }
    setCartItemCount((prevCount) => prevCount - 1);
    if (updatedCartItems[itemIndex].quantity < 1) {
      updatedCartItems.splice(itemIndex, 1);
    }
    return updatedCartItems;
  };


const cartItemsList = cartItems.map((item) => (
<li key={item.id} className="flex items-center justify-between my-2">
<div className="flex items-center">
<img
       src={item.imageUrl}
       alt={item.name}
       className="w-16 h-16 object-cover rounded"
     />
<div className="ml-2">
<h3 className="text-lg font-medium">{item.name}</h3>
<p className="text-gray-500">{item.price} €/jour</p>
</div>
</div>
<div className="flex items-center">
<button
className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-4"
onClick={() => setCartItems(removeFromCart(item))}
>
-
</button>
<p className="text-xl font-medium">{item.quantity}</p>
<button
className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md ml-4"
onClick={() => {
setCartItemCount((prevCount) => prevCount + 1);
const updatedCartItems = [...cartItems];
const itemIndex = updatedCartItems.findIndex(
(cartItem) => cartItem.id === item.id
);
updatedCartItems[itemIndex].quantity += 1;
setCartItems(updatedCartItems);
}}
>
+
</button>
</div>
</li>
));

return (
<div className="mt-4">
<h2 className="text-2xl font-bold mb-8 text-center mt-20">Panier</h2>
{cartItems.length === 0 ? (
<p className="text-center">Votre panier est vide.</p>
) : (
<>
<ul>{cartItemsList}</ul>
<p className="text-right mt-4">
Total:{" "}
{cartItems.reduce(
(total, item) => total + item.price * item.quantity,
0
)}{" "}
€
</p>
<div className="flex justify-end mt-4">
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
Valider la commande
</button>
</div>
</>
)}
</div>
);
}

export default CartPage;