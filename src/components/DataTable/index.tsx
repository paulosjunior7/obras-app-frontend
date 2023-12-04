// import Icons from "../../assets/svgs/Icons";
import { CaretDown } from "phosphor-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Column {
  id: string;
  name?: string;
  width?: number;
  cell: (props: any) => React.ReactNode;
}

interface DataTableProps {
  data: Array<any>;
  columns: Array<Column>;
}

export default function DataTable({ data, columns }: DataTableProps) {
  const renderClassColumn = (index: number) => {
    const classCell = `font-sams border py-1 text-start text-base text-neutral-500 pl-4 border-slate-300`;

    if (index === 0) {
      return `${classCell} rounded-l-lg border-r-0`;
    }

    if (index === columns.length - 1) {
      return `${classCell} rounded-r-lg border-l-0 flex pr-2`;
    }

    return `${classCell} border-x-0`;
  };

  return (
    <div className="mb-4 mt-5 w-full rounded-lg bg-white p-6">
      <table className="w-full table-auto border-separate border-spacing-y-2 text-black">
        <thead>
          <tr>
            {columns.map((column, index: number) => {
              return (
                <th
                  key={index}
                  className=" text-start font-sans text-[10px] font-bold uppercase text-neutral-500"
                >
                  {column.name}
                  {column.name && (
                    <button>
                      <CaretDown
                        className={`ml-2 transform transition-transform ${
                          // order ? 'rotate-0' : 'rotate-[-180deg]'
                          "rotate-[-180deg]"
                        } duration-300`}
                      />
                    </button>
                  )}
                </th>
              );
            })}

            <th className="w-5"></th>
          </tr>
        </thead>
        {data.length > 0 && (
          <tbody>
            {data.map((item, indexData: number) => (
              <tr
                key={`data_${indexData}`}
                className="hover:bg-default-background "
              >
                {columns.map((column: any, index: number) => {
                  return (
                    <td
                      key={`column_${index}`}
                      className={renderClassColumn(index)}
                    >
                      {column.cell(item)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {data.length === 0 && (
        <div className="w-full pr-6">
          <Skeleton
            count={6}
            height={50}
            style={{ margin: "4px", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
}
