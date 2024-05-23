import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
  const [user, loading] = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  const location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center my-40">
        <span className="text-accent loading text-center loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default AdminRoute;
