import { Helmet } from "react-helmet-async";
import Cover from "../SharedPages/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Bistro Boss || Our Menu</title>
        </Helmet>
      </div>
        <Cover bgImg={menuImg} title={'OUR MENU'} subTitle={'Would You like to try a dish'} ></Cover>
        <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
