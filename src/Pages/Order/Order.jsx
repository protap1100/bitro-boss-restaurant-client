import Cover from "../SharedPages/Cover/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTabs from "./OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categoryList = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categoryList.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Order Food</title>
      </Helmet>
      <div>
        <Cover
          bgImg={orderCover}
          title="OUR SHOP"
          subTitle="WOULD YOU LIKE TO TRY A DISH"
        ></Cover>
      </div>
      <div className="my-5 text-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderTabs food={salad}></OrderTabs>
          </TabPanel>
          <TabPanel>
            {" "}
            <OrderTabs food={pizza}></OrderTabs>
          </TabPanel>
          <TabPanel>
            {" "}
            <OrderTabs food={soup}></OrderTabs>
          </TabPanel>
          <TabPanel>
            {" "}
            <OrderTabs food={dessert}></OrderTabs>
          </TabPanel>
          <TabPanel>
            {" "}
            <OrderTabs food={drinks}></OrderTabs>
          </TabPanel>
          <TabPanel>
            {" "}
            <OrderTabs food={offered}></OrderTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
