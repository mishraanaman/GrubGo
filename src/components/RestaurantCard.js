import { IMG_CDN_URL } from "../contants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 h-64 p-2 m-2 shadow-lg bg-sky-50 rounded-md hover:scale-110">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{sla.lastMileTravelString}</h4>
      {/* <h5 className="font-bold">
        {user.name} - {user.email}
      </h5> */}
    </div>
  );
};

export default RestrauntCard;
