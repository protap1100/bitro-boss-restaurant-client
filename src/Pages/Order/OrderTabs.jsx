import OrderCard from "../../components/orderCard/OrderCard";

const OrderTabs = ({food}) => {
    return (
        <div className="my-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
        {
            food.map(item => <OrderCard key={item._id} item={item}></OrderCard>)
        }
        </div>
    );
};

export default OrderTabs;