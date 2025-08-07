import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users",{
        headers:{
          authorization:`Bearer ${localStorage.getItem('Access-Token')}`
        }
      });
      return res.data;
    },
  });
  console.log(users);
  if (isLoading) {
    <span className="loading loading-spinner text-warning"></span>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want To Delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted successfully!",
              icon: "succes",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (admin) => {
    Swal.fire({
      title: "Make Admin",
      text: "Do You Want To Make this user admin?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Him!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${admin._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Done!",
              text: `${admin.name} Is Now Admin`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h1 className="text-3xl">All Users</h1>
        <h1 className="text-3xl">Total Users : {users.length}</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-400">
              <tr>
                <th className="text-xl text-white">Id</th>
                <th className="text-xl text-white">Name</th>
                <th className="text-xl text-white">Email</th>
                <th className="text-xl text-white">Role</th>
                <th className="text-xl text-white">Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <div
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Admin"
                      >
                        <button disabled className="text-3xl text-gray-800">
                          <Tooltip id="my-tooltip" />
                          <FaUser></FaUser>
                        </button>
                      </div>
                    ) : (
                      <div
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="UserOnly"
                      >
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="text-3xl text-gray-800"
                        >
                          <Tooltip id="my-tooltip" />
                          <FaUsers></FaUsers>
                        </button>
                      </div>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-3xl text-red-600"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
