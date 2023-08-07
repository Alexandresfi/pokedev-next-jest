import Image from 'next/image';
import Link from 'next/link';

import IconBack from '../../../../assets/icons/icon-back.png';
import { formatId } from '@/utils';

interface Props {
  id: number;
  name: string;
}

export function Header({ id, name }: Props) {
  return (
    <div className="flex items-center justify-between py-5 w-full max-w-[300px]">
      <Link href={'/'} className="flex items-center">
        <Image
          src={IconBack}
          width={20.93}
          height={20.93}
          alt="icon voltar"
          className="mt-[3px]"
        />

        <h1 className="text-2xl ml-2 font-bold capitalize">{name}</h1>
      </Link>
      <span className="text-xs font-bold mt-[7px]">{formatId(id)}</span>
    </div>
  );
}
