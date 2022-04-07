import React, { useState } from "react";
import { useRouter } from "next/router";

import { navReq } from "../utils/requests";

export const Nav = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between pb-5 text-2xl whitespace-nowrap overflow-x-scroll scrollbar-hide">
      {Object.entries(navReq).map(([key, value]) => (
        <h2
          key={key}
          onClick={() => router.push(`/?genre=${key}`)}
          className="w-full px-5 text-center cursor-pointer transition duration-100 transform hover:scale-125 hover:tex-white active:text-red-500"
        >
          {value.title}
        </h2>
      ))}
    </nav>
  );
};
