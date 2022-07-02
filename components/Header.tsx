import React from 'react';
import Image from 'next/image';
import Badge from './Badge';
import {
  HomeIcon,
  FireIcon,
  StarIcon,
  CollectionIcon,
  SearchIcon,
  CogIcon,
  UserIcon,
} from '@heroicons/react/outline';

interface Props {}

const Header: React.FC<Props> = ({}: Props): JSX.Element => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Badge Icon={HomeIcon} title="HOME" />
        <Badge Icon={FireIcon} title="TRENDING" />
        <Badge Icon={StarIcon} title="FAVORITES" />
        <Badge Icon={CollectionIcon} title="COLLECTIONS" />
        <Badge Icon={SearchIcon} title="SEARCH" />
        <Badge Icon={CogIcon} title="SETTINGS" />
        <Badge Icon={UserIcon} title="ACCOUNT" />
      </div>

      <Image className="object-contain" src="/logo.png" width={100} height={100} />
    </header>
  );
};

export default Header;