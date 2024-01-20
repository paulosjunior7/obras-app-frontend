import { useNavigate } from "react-router-dom";
import SvgIcon from "./Icons";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useGetUserMeQuery } from "../graphql/generated";

export default function Header() {
  const { user, setUser, jwt } = useContext(UserContext);

  const { data } = useGetUserMeQuery({
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    setUser(data?.user?.findMe);
  }, [data]);

  const navigate = useNavigate();
  return (
    <div className=" h-16 w-full flex  shadow-sm border-b items-center px-8 justify-between">
      <div className="flex gap-2 "></div>
      <div className="gap-2 flex items-center">
        <div className="flex flex-col">
          <span className="text-sm font-normal text-black">
            {user?.userName}
          </span>
          <span className="text-xs text-right font-semibold text-black">
            {user?.company?.corporateName}
          </span>
        </div>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {user?.userName.substring(0, 2).toUpperCase()}
          </span>
        </div>
        <SvgIcon name="arrow-down" />
      </div>
    </div>
  );
}
