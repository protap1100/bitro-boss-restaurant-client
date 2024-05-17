const OrderCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
          <p className="absolute right-0 top-0 mr-5 mt-4 bg-slate-900 text-white p-2 rounded">${price}</p>
        </figure>
        <div className="card-body ">
          <h2 className="text-center font-bold text-xl">{name}</h2>
          <p>{recipe}</p>
          <div className="  text-center">
            <button className="btn btn-outline uppercase hover:text-yellow-600 text-yellow-600 border-0 border-b-4 ">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
