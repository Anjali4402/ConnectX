import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 ml-4 ">
      <Image
        src={"logo.svg"}
        width={38}
        height={38}
        className="rounded-full border-2 border-primary/20 "
        alt="Lo"
      />

      <span className="text-lg text-primary tracking-tighter font-bold">
        ConnectX
      </span>
    </div>
  );
};

export default Logo;
