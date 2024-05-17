import { Link } from "react-router-dom";

const MenuBtn = ({link}) => {
  return (
    <div>
      <div className="text-center my-5">
        <Link to={link} className="btn btn-outline border-0 border-b-4">
          Order Your Favorite Food
        </Link>
      </div>
    </div>
  );
};

export default MenuBtn;
