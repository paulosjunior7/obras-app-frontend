import { ProductType } from "../../graphql/generated";

import { PencilSimple, Trash } from "phosphor-react";
import { boolean } from "yup";
import classNames from "classnames";

interface TableProps {
  handleEdit: (id: number) => void;
  setShowModalDelete: (item: any) => void;
  data: Array<any>;
  column: Array<any>;
  element?: React.FunctionComponent;
}

const Table: React.FC<TableProps> = ({ data, column, element }) => {
  return (
    <>
      <table className="w-full text-left text-gray-500 text-medium mt-6 border !rounded-lg">
        <thead className="text-gray-700 bg-slate-50 ">
          <tr>
            {column.map((item: any, index: Number) => (
              <TableHeadItem item={item} />
            ))}
            {element && <TableHeadItem item={{ heading: "" }} />}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: Number) => (
            <TableRow item={item} column={column} element={element} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const TableHeadItem: React.FC<any> = ({ item }) => (
  <th scope="col" className="py-4 px-6 text-[0.9rem] font-medium">
    {item.heading}
  </th>
);

interface TableRowProps {
  item: any;
  column: any;
  element?: React.FunctionComponent;
}

const TableRow: React.FC<TableRowProps> = ({ item, column, element }) => (
  <tr key={item.id} className="border text-gray-900 text-sm">
    {column.map((columnItem: any, index: number) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split("."); //['address', 'city']
        return (
          <td className="py-4 px-6">{item[itemSplit[0]][itemSplit[1]]}</td>
        );
      }

      return index === 0 ? (
        <th scope="row" className="px-6 whitespace-nowrap">
          {item[`${columnItem.value}`]}
        </th>
      ) : (
        <td className="px-6">
          {typeof item[`${columnItem.value}`] === "boolean" ? (
            <span className={classNames("bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900", {
              "bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900": item[`${columnItem.value}`] === true
            })}

            >
              {item[`${columnItem.value}`] ? "Ativo" : "Inativo"}
            </span>
          ) : (
            item[`${columnItem.value}`]
          )}
        </td>
      );
    })}
    {element && element(item)}
  </tr>
);

export default Table;
