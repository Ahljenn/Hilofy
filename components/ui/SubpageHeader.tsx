import React from 'react';
import Badge from './Badge';
import Image from 'next/image';
import Router from 'next/router';
import { HomeIcon } from '@heroicons/react/outline';

interface PageData {
  pageName: string;
}

/**
 * This component is used in each subroute not in the dashboard.
 * Displays the home badge, current page name, and site logo.
 */
const SubpageHeader: React.FC<PageData> = ({ pageName }: PageData): JSX.Element => {
  /**
   * @param {PageData} - Props passed containing the current page name as a string.
   * @returns JSX.Element - renders the subpage header.
   */
  const handleHome = (): void => {
    Router.push('/dashboard');
  };

  return (
    <header className="flex flex-col items-center sm:justify-around sm:flex-row">
      <Badge Icon={HomeIcon} title="HOME" update={handleHome} />
      <div className="flex flex-row items-center">
        <h1 className="">{pageName}</h1>
        <Image
          className="object-contain hover:animate-pulse"
          src="/logo.png"
          width={140}
          height={140}
          alt="Hilofy"
        />
      </div>
    </header>
  );
};

export default SubpageHeader;
