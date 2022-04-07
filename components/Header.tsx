import React from "react";

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import { HeaderItem } from "./HeaderItem";

export const Header = () => {
  return (
    <header className="flex p-5 justify-center">
      <HeaderItem title="HOME" Icon={HomeIcon} />
      <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
      <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
      <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
      <HeaderItem title="SEARCH" Icon={SearchIcon} />
      <HeaderItem title="ACCOUNT" Icon={UserIcon} />
    </header>
  );
};
