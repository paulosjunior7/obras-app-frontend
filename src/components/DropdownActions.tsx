import { DotsThree, DotsThreeOutline } from "phosphor-react";
import { useState } from "react";
// import Icons from "../../../assets/svgs/Icons";
import { twMerge } from "tailwind-merge";

export interface MenuAction {
  label: string;
  color?: "danger";
  onClick: (e: number) => void;
}

interface DropdownActionsProps {
  id: number;
  actions: Array<MenuAction>;
}

export default function DropdownActions({ id, actions }: DropdownActionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getParentNode = (node: HTMLElement) => {
    if (node?.id === "root") {
      setIsOpen(false);
      return;
    }

    if (node && node?.id !== `menu-profile-${id}`) {
      getParentNode(node?.parentNode as HTMLElement);
      return;
    }
  };

  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    getParentNode(target);
  });

  return (
    <>
      <button
        id={`menu-profile-${id}`}
        className="ml-auto rounded-3xl p-2 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <DotsThreeOutline size={20} weight="thin" />
        <div
          className={twMerge(
            `absolute min-w-[10.812rem] rounded-lg border bg-white shadow-md right-0 z-50`,
            isOpen ? "block" : "hidden"
          )}
        >
          <ul className="flex flex-col justify-start items-start  ">
            {actions.map((item: MenuAction, index: number) => (
              <li
                key={`action-${index}`}
                className="hover:bg-slate-100 px-1 py-1 w-full flex text-start"
              >
                <button
                  className={`p-3 text-sm w-full text-start ${
                    item.color === "danger"
                      ? "text-status-danger"
                      : "text-neutral-600"
                  }`}
                  onClick={() => item.onClick(id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </button>
    </>
  );
}
