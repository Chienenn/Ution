import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[250px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/documents.png"
            // fill
            className="object-contain dark:hidden"
            height="300"
            width="300"
            alt="Documents"
          />
          {/* <Image
            src="/reading-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Documents"
          /> */}
        </div>
        {/* 手機模式時reading圖片為隱藏 */}
        {/* <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/reading.png"
            fill
            className="object-contain dark:hidden"
            alt="Reading"
          />
          <Image
            src="/reading-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Reading"
          />
        </div> */}
      </div>
    </div>
  );
};
