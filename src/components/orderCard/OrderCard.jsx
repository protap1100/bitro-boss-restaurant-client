import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const OrderCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [,refetch] =useCart();

  const handleAddToCart = (food) => {
    // console.log(food)
    if (user && user.email) {
      // console.log('hi')
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure
        .post(`carts`, cartItem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              text: `${name} Added to cart`,
            });
            refetch()
          }
        })
        .catch((error) => console.log(error));
    } else {
      Swal.fire({
        title: "Please Login",
        text: "Please Login To Add Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(location?.state ? location.state : "/login");
        }
      });
    }
    //  return <Navigate state={location.pathname} to="/login" > </Navigate>
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
          <p className="absolute right-0 top-0 mr-5 mt-4 bg-slate-900 text-white p-2 rounded">
            ${price}
          </p>
        </figure>
        <div className="card-body ">
          <h2 className="text-center font-bold text-xl">{name}</h2>
          <p>{recipe}</p>
          <div className="  text-center">
            <button
              onClick={() => {
                handleAddToCart(item);
              }}
              className="btn btn-outline uppercase hover:text-yellow-600 text-yellow-600 border-0 border-b-4 "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
