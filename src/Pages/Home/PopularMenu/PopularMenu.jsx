import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../SharedPages/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setloading] = useState([true]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularData = data.filter((men) => men.category === "popular");
        setMenu(popularData);
        setloading(false);
      });
  }, [menu]);

  return (
    <section>
      <SectionTitle
        heading={"---Check It Out---"}
        subHeading={"From Our Menu"}
      ></SectionTitle>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5 my-5">
          {menu.map((item) => (
            <MenuItem key={item._id} item={item}> </MenuItem>
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularMenu;
