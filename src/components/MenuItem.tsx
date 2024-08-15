import Link from 'next/link';
import { IconType } from 'react-icons';

type menuItemProps = {
  title: string;
  address: string;
  Icon: IconType;
};

const MenuItem = ({ title, address, Icon }: menuItemProps) => {
  return (
    <Link href={address} className="hover:text-emerald-700">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
