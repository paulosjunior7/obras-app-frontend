interface PageHeaderProps {
  title: string;
  button: string;
  loading: boolean;
  setSearch: Function;
  onClick: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  setSearch,
  button,
  loading,
  title,
  onClick,
}) => {
  return (
    <>
      <div className="flex justify-between mt-6">
        <h4 className="text-3xl font-medium items-baseline">{title}</h4>
        <div className="flex gap-3">
          <div className="relative">
            <div className="flex absolute h-10 inset-y-0 left-0 items-center pl-3 pointer-events-none ">
              <svg
                className="w-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              className="focus:ring-indigo-500 p-2 pl-10 w-[400px] focus:border-indigo-500 flex-1 block  sm:text-sm border-gray-300 sm:overflow-hidden h-10"
              placeholder={`Pesquisar por ${title}`}
            />
          </div>
          <button
            type="button"
            className="bg-[#003569] text-white px-4 py-2 rounded-lg w-auto text-sm font-semibold"
            onClick={() => onClick()}
          >
            {button}
          </button>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
