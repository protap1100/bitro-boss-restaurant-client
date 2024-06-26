import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = (data) => {
    // console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photoUrl = data.photoUrl;
    console.log(name, photoUrl, password, email);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(name, photoUrl)
          .then(() => {
            // console.log("User Updated Successfully");
            // Create User in Database
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              console.log('user added to the database')
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => console.log(error));
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleForm)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("photoUrl", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500">Password is Required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Please Use At Least 6 Character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Please Use at least a character
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <h1>
              Already Have An Account <Link to="/login">Login Here</Link>
            </h1>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
