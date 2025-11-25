const Cart = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  // const cartItems = axios.get(`${BASE_URL}cart`);
  const prudocts = [
    {
      _id: "fadff",
      title: "title",
      description: "description",
      category: "tech",
      images: ["../../public/clothing.png"],
      price: 3,
      saler: "emial",
      quantity: 323,
    },
    {
      _id: "dfasf",
      title: "title",
      description: "description",
      category: "tech",
      images: ["../../public/clothing.png"],
      price: 3,
      saler: "emial",
      quantity: 323,
    },
  ];
  const cartItems = [
    { prudoctId: "fadff", quantity: 3, price: 43 },
    { prudoctId: "fadff", quantity: 3, price: 43 },
  ];
  return (
    <div className="absolute bg-white w-3xl">
      {/* fdsfasddsf */}
      <div
        id="cart-items"
        className="w-auto flex flex-col justify- bg-white"
      >
        {cartItems.map((i, index) => (
          <div id="item-cart" className="flex items-center p-2">
            <div className="flex flex-col w-2xs items-center gap-2">
              <h3 className="capitalize font-medium">
                {prudocts[index].title}
              </h3>
              <h3 className="capitalize font-medium">{i.quantity}</h3>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span id="price">{prudocts[index].price}</span>
              <span id="total-price">{i.price}</span>

              <button className="relative bottom-12 left-8">X</button>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex gap-2 items-center justify-center w-full">
        <button className="text-white capitalize font-medium rounded-lg flex shrink bg-orange-800 p-1 px-2  cursor-pointer transition-colors hover:bg-orange-700">
          finish
        </button>
        <button></button>
      </div> */}
    </div>
  );
};

export default Cart;
