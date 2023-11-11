import React, { ReactNode } from "react";

interface TabsProps {
  children: React.ReactElement<TabProps>[];
  selectedTab: number;
  setSelectedTab: (index: number) => void;
}

const Tabs = ({ children, selectedTab, setSelectedTab }: TabsProps) => {
  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className="flex w-full flex-col border p-5 bg-white rounded-xl">
      <div className="grid grid-cols-4 gap-1 w-full">
        {children.map((tab, index) => (
          <Tab
            key={index}
            label={tab.props.label}
            selected={selectedTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="w-full h-full">
        {children[selectedTab]?.props?.children}
      </div>
    </div>
  );
};

export default Tabs;

interface TabProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  children?: ReactNode;
}

export const Tab = ({ label, selected, onClick }: TabProps) => {
  return (
    <div
      className={`h-8 w-full ${selected ? "bg-[#003569] text-white" : "bg-[#EDF1F5]"
        } rounded-t-md flex items-center justify-center text-sm font-medium cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
