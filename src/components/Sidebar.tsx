import { twMerge } from "tailwind-merge";

function Sidebar({ children }: { children: React.ReactNode }) {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [expanded, setExpanded] = useState(false);

  // const handleExpand = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div
      className={twMerge("flex w-full flex-col")}
    >
      <div
        className={`flex flex-col justify-between border-r top-0 fixed  w-36  h-screen items-center py-7 left-0 transition-all`}>
        <div className="flex flex-col items-center mt-12 ">
          <span className="hover:text-black cursor-pointer hover:border-b-2 ">Obras</span>
        </div>
      </div>
      {children}
    </div >
  );
}

export default Sidebar;
