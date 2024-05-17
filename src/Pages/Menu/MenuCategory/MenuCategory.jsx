import { Link } from "react-router-dom";
import Cover from "../../SharedPages/Cover/Cover";
import MenuItem from "../../SharedPages/MenuItem/MenuItem";

const MenuCategory = ({ items,title,coverImg,subTitle }) => {
  console.log(title)
  return (
    <div>
        {title && <Cover bgImg={coverImg} title={title} subTitle={subTitle}></Cover>}
      <div className="grid md:grid-cols-2 gap-5 my-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-5">
        <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-4">
          Order Your Favorite Food
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
