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
      <table className="min-w-full divide-y divide-gray-200 mt-5 border">
        <thead className="bg-gray-50">
          <tr>
            {column.map((item: any, index: Number) => (
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider">
                {item.heading}
              </th>
            ))}
            {element &&
              (<th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
              )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item: any, index: Number) => (
            <TableRow item={item} column={column} element={element} />
          ))}
        </tbody>
      </table >
    </>
  );
};

interface TableRowProps {
  item: any;
  column: any;
  element?: React.FunctionComponent;
}

const TableRow: React.FC<TableRowProps> = ({ item, column, element }) => (
  <tr key={item.id} className="text-gray-900 text-xs text-start rounded-lg" >
    {column.map((columnItem: any, index: number) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split("."); //['address', 'city']
        return (
          <td className=" px-6">{item[itemSplit[0]][itemSplit[1]]}</td>
        );
      }

      return index === 0 ? (
        <td scope="row" className="px-6 whitespace-nowrap font-bold">
          {item[`${columnItem.value}`]}
        </td>
      ) : (
        <td className="px-6 py-4 whitespace-nowrap text-start">
          {typeof item[`${columnItem.value}`] === "boolean" ? (
            <span className={classNames("bg-red-100 text-red-800 text-xs text-start font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900", {
              "bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 rounded dark:bg-green-200 dark:text-green-900": item[`${columnItem.value}`] === true
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
