import { useState } from "react";
import { X } from "phosphor-react";

interface ILeftModal {
  showleftModal: boolean;
  setShowLeftModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
}

export default function LeftModal({
  showleftModal,
  setShowLeftModal,
  title,
  children,
}: ILeftModal) {
  return (
    <>
      <div
        className={`fixed inset-0 z-10 bg-black opacity-50 transition-opacity duration-500
      ${showleftModal ? "block" : "hidden"}
      `}
        onClick={() => setShowLeftModal((showleftModal) => !showleftModal)}
      ></div>

      <div
        className={`fixed left-0 h-full w-2/4 border-l shadow-sm z-20 top-0 
       bg-white border-gray-300 transform -translate-x-full transition duration-500 ease-in-out 
       ${showleftModal ? "translate-x-0" : ""}
       `}
      >
        <div className="flex justify-between items-center h-16 px-6 border-b">
          <h5 className="text-2xl font-normal">{title}</h5>
          <X
            size={30}
            className="cursor-pointer hover:text-gray-500"
            onClick={() => setShowLeftModal((showleftModal) => !showleftModal)}
          />
        </div>
        <div className="h-full overflow-y-auto p-6">{children}</div>
      </div>
    </>
  );
}
