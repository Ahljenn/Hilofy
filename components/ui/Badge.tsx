import React from 'react';

interface BadgeItem {
  Icon: any;
  title: string;
  update?: () => void;
  pointerType?: string;
}
/**
 * This component is used to display a badge with a title and an icon.
 * The icon is used to indicate the type of button.
 */
const Badge: React.FC<BadgeItem> = ({
  Icon,
  title,
  update,
  pointerType,
}: BadgeItem): JSX.Element => {
  /**
   * @param {BadgeItem} - props passed in from the parent component containing the icon and title, and update function.
   * @returns JSX.Element.
   */
  return (
    <div
      className={`flex flex-col items-center group mt-6 w-12 sm:w-20 hover:text-white
      ${pointerType ?? 'cursor-pointer'}`}
      onClick={update}
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 text-xl whitespace-nowrap group-hover:opacity-100 tracking widest">
        {title}
      </p>
    </div>
  );
};

export default Badge;
