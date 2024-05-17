import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import img from  '../../../assets/home/featured.jpg'
import '../Featured/Features.css'
const Featured = () => {
    return (
       <section className="featured py-10 bg-opacity-20 my-20 text-white">
            <div>
                <SectionTitle heading={'Check it out'} subHeading={'Featured Item'}></SectionTitle>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-8 px-8 lg:px-24 bg-slate-300 bg-opacity-30">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p>Aug ,2029 </p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quam modi consequatur asperiores laborum quia. Molestiae accusantium ipsa dignissimos fugit, distinctio perspiciatis veniam consequatur ipsum est sed quaerat officia libero.</p>
                    <button className="btn btn-outline border-0  border-b-4">Order Now</button>
                </div>
            </div>
       </section>
    );
};

export default Featured;