import React from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import classNames from "classnames";

export interface PaginationItemProps {
  type: string;
  page: number;
  onClick?: any;
  selected: boolean;
  disabled: boolean;
}

const PaginationItem = ({ type, page, ...item }: PaginationItemProps) => {
  return (
    <button
      {...item}
      className={classNames(
        "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium",
        {
          "z-[2] bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-mediumbg-slate-200 bg-indigo-50 border-indigo-500 text-indigo-600": item.selected,
        }
      )}
    >
      {type === "previous" && <CaretLeft size={25} className='p-0 m-0 w-3 h-5 cursor-pointer' />}
      {type === "next" && <CaretRight size={20} className='p-0 m-0 w-3 h-5 cursor-pointer' />}
      {type.indexOf("ellipsis") !== -1 && `...`}
      {type === "page" && page}
    </button>
  );
};

export default PaginationItem;
