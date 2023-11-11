import React, { ReactNode } from "react";
import usePagination from "./usePagination";
import { PaginationItem, PaginationItemProps } from "./index";
import classNames from "classnames";
import { ArrowLeft, ArrowRight } from "phosphor-react";

interface Props {
  count: number;
  page: number;
  totalCount: number;
  onChange?: any;
  disabled?: boolean;
  render?: (items: PaginationItemProps) => ReactNode;
}

const Pagination = ({
  count,
  page,
  totalCount,
  onChange,
  render,
  ...rest
}: Props) => {
  const { items } = usePagination({
    count,
    onChange,
    page,
    ...rest,
  });

  return (
    <nav className="flex justify-between items-center pt-4">
      <div>
        <p className="text-sm text-gray-700">
          Mostrando <span className="font-medium">1</span> até {" "}
          <span className="font-medium">10</span> de{" "}
          <span className="font-medium">{totalCount}</span> resultados
        </p>
      </div>


      <ul className="inline-flex items-center -space-x-px">
        {items.map((item, index) => (
          <li key={index}>
            {(render && render(item)) || <PaginationItem {...item} />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
