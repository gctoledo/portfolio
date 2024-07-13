import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex items-center justify-center w-[164px] h-[164px] md:w-[218px] md:h-[218px] rounded-full bg-gradient-to-br from-[#FF8660] to-[#9A33FF]">
      <div className="overflow-hidden rounded-full">
        {" "}
        <div className="w-[152px] h-[152px] md:w-[206px] md:h-[206px] relative rounded-full opacity-95 hover:opacity-100 hover:scale-110 duration-200">
          <Image
            src={"/avatar.jpg"}
            quality={100}
            fill
            sizes="(100%, 100%)"
            priority
            alt="Avatar"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
