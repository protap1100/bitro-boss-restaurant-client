import {
  FaAd,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensilSpoon,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  // TODO : get is Admin value from the database
  const [isAdmin] = useAdmin();
  // console.log(isAdmin)
  // const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-68 min-h-screen bg-orange-600">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensilSpoon></FaUtensilSpoon> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaList></FaList>Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/carts">
                  <FaShoppingCart></FaShoppingCart> My Cart {cart.length}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reviews">
                  <FaAd></FaAd>Add a Review Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList>My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FcCalendar></FcCalendar>Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider divider-success"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <FaShop></FaShop> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <FaEnvelope></FaEnvelope> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
