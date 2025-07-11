import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { FaUtensilSpoon } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit,reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and the get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the data to database with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      console.log("With Image Url", res.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "successfully inserted",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"what's new?"}
        subHeading={"Add An items"}
      ></SectionTitle>
      <div>
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-2xl" htmlFor="">
              Recipe Name*:
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-5">
            <div className=" w-full">
              <label className="text-2xl" htmlFor="">
                Category Name
              </label>
              <select
                defaultValue="Default"
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="Default">
                  Select A Category
                </option>
                <option value="pizza">Pizza</option>
                <option value="salad">Salad</option>
                <option value="soup">soup</option>
                <option value="dessert">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className=" w-full">
              <label htmlFor="" className="text-2xl">
                Price:
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div>
            <label className="text-2xl">Recipe Details:</label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea w-full textarea-bordered"
              placeholder="Bio"
            ></textarea>
          </div>
          <div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn btn-accent text-white">
            Add Items <FaUtensilSpoon></FaUtensilSpoon>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
