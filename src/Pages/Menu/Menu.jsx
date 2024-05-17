import { Helmet } from "react-helmet-async";
import Cover from "../SharedPages/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Our Menu</title>
      </Helmet>
      <Cover
        bgImg={menuImg}
        title={"OUR MENU"}
        subTitle={"Would You like to try a dish"}
      ></Cover>
      {/* Main Cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Offered Menu Items */}
      <MenuCategory items={offered.slice(0, 8)} title={"offered"}></MenuCategory>
      {/* Dessert Menu Items */}
      <MenuCategory
        items={dessert.slice(0, 8)}
        title="dessert"
        coverImg={dessertBg}
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti a fuga "
      ></MenuCategory>
      {/* Pizza */}
      <MenuCategory
        items={pizza.slice(0, 8)}
        title="pizza"
        coverImg={dessertBg}
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti a fuga "
      ></MenuCategory>
      {/* Salad */}
      <MenuCategory
        items={salad.slice(0, 8)}
        title="salad"
        coverImg={dessertBg}
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti a fuga "
      ></MenuCategory>
      {/* SOUPS */}
      <MenuCategory
        items={soup.slice(0, 8)}
        title="soup"
        coverImg={dessertBg}
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti a fuga "
      ></MenuCategory>
    </div>
  );
};

export default Menu;
