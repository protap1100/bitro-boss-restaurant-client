const MenuItem = ({item}) => {

    const {name,recipe,image,price} = item;

    return (
        <div className="flex lg:flex-row flex-col space-x-4">
            <img className="w-30 h-20 " style={{borderRadius:'0px 40px 40px 40px'}} src={image} alt="" />
            <div>
                <h1 className="uppercase">{name}---------</h1>
                <h1>{recipe}</h1>
            </div>
            <p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItem;