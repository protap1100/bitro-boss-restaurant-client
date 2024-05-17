import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        heading={"---Check It Out---"}
        subHeading={"From Our Menu"}
      ></SectionTitle>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <MenuCategory items={popular}></MenuCategory>
      )}
      <div className="text-center mb-10">
        <button className="btn btn-outline border-0 border-b-4 uppercase">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
