const SectionTitle = ({heading, subHeading}) => {
    
    return (
        <div className="lg:w-3/12 w-6/12  mx-auto my-10 text-center">
            <p className="text-orange-500 text-xl">{heading}</p>
            <p className="text-2xl lg:text-4xl border-y-4 uppercase border-gray py-3 mt-4">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;