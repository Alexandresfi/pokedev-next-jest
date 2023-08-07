import Image from 'next/image';
import Link from 'next/link';

import Pokeball from '@/assets/icons/icon-pokeball.png';
import { Search } from '../Search';

export const Header = () => {
  return (
    <header className="h-[100px] lg:w-full lg:h-auto bg-primary pt-4 px-2 lg:px-6 flex items-center gap-2 flex-col lg:flex-row lg:gap-12 lg:items-center sticky top-0">
      <Link href={'/'} className="flex justify-center items-center gap-4">
        <Image
          src={Pokeball}
          width={23.76}
          height={24}
          alt="icon pokeball"
          className="animated-spin animated-spin-and-scale"
        />
        <h1 className="text-2xl font-bold text-white opacity-0 fadeIn">
          Pokédecx
        </h1>
      </Link>
      <Search />
    </header>
  );
};
