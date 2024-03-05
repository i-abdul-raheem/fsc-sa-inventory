import { FaChevronRight, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { staticData } from "../constants";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("@token");
    navigate("/login");
  }
  return (
    <nav
      id="side-nav"
      className="z-40 select-none absolute flex flex-col items-center text-white justify-start top-[58px] left-[-275px] bg-primary w-[275px] h-[calc(100vh-58px)] transition-all"
    >
      <div className="w-full p-3 flex items-center justify-start gap-3 bg-light border-b border-b-primary">
        <div className="w-[42px] h-[42px] overflow-hidden rounded-full">
          <img
            src="https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"
            alt="USER"
            className="w-full h-full"
          />
        </div>
        <div className="w-3/5">
          <span className="p-1 px-2 font-semibold text-lg uppercase">{localStorage.getItem("@token") && JSON.parse(localStorage.getItem("@token")).username}</span>
          <span className="cursor-pointer hover:bg-primary p-1 px-2 rounded-lg flex items-center justify-start gap-2 text-xs">
            <FaEdit /> Change Password
          </span>
        </div>
        <div
          className="w-[47px] h-[47px] flex items-center justify-center bg-secondary rounded-full hover:bg-primary cursor-pointer"
          title="Logout"
          onClick={logout}
        >
          <FaSignOutAlt />
        </div>
      </div>
      <div className="w-full h-[calc(100vh-58px-68px)] overflow-hidden overflow-y-scroll">
        {staticData.sidebar.map((item, index) => (
          <div
            onClick={() => {
              navigate("/" + item);
              document.getElementById("bars").click();
            }}
            className="uppercase cursor-pointer p-3 flex items-center justify-between hover:bg-light font-thin"
            key={index}
          >
            <span>{item}</span>
            <FaChevronRight />
          </div>
        ))}
      </div>
    </nav>
  );
};
