import React from "react";

interface HeaderItemProps {
  title: string;
  Icon: any;
}

export const HeaderItem = (props: HeaderItemProps) => {
  return (
    <div className="flex flex-col items-center cursor-pointer w-14 sm:w-20 hover:text-white group">
      <props.Icon className="h-8 mb-2 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100">{props.title}</p>
    </div>
  );
};
