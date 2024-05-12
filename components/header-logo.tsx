import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" width={28} height={28} alt="Logo" />
        <p className="font-semibold text-white text-2xl ml-2.5">Fiance</p>
      </div>
    </Link>
  );
};
