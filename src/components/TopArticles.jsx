function TopArticles() {
  return (
    <div className="mt-16 md:col-span-2 md:mt-[2.8rem] md:block">
      <li className="grid list-none gap-[2.1rem] md:grid-cols-3 md:gap-5">
        <ul className="flex gap-6 md:gap-[.92rem]">
          {/* Creates an overlay using only tailwind */}
          <div className="relative h-[8.05rem] w-[12.5rem] md:h-[4.9rem] md:w-[7.1rem]">
            <img
              className="h-[8.05rem] w-[12.5rem] brightness-90 contrast-125 md:h-[4.9rem] md:w-[7.1rem]"
              src="image-retro-pcs.jpg"
              alt="Retro PC"
            />
            <div className="absolute inset-0 bg-red-700 opacity-5"></div>
          </div>

          <div className="flex flex-col">
            <h3 className="-mt-1 text-[1.9rem] font-bold leading-10 text-primary-soft-red md:mb-0 md:text-xl">
              01
            </h3>
            <h4 className="mt-[.43rem] cursor-pointer text-[1.15rem] font-extrabold text-neutral-very-dark-blue hover:text-primary-soft-red md:mt-[.15rem] md:text-[.695rem]">
              Reviving Retro PCs
            </h4>
            <p className="mt-2 text-base leading-[1.55rem] text-neutral-dark-grayish-blue md:mt-1 md:text-[.58rem] md:leading-4">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </ul>
        <ul className="flex gap-6 md:gap-[.92rem]">
          <div className="relative h-[7.9rem] w-[9.8rem] md:h-[4.87rem] md:w-[5.59rem]">
            <img
              className="h-[7.9rem] w-[9.8rem] blur-[.2px] brightness-90 contrast-125 md:h-[4.87rem] md:w-[5.59rem]"
              src="image-top-laptops.jpg"
              alt="Black and red keyboard"
            />
            <div className="absolute inset-0 bg-red-500 opacity-5"></div>
          </div>

          <div className="flex flex-col">
            <h3 className="-mt-1 text-[1.9rem] font-bold leading-10 text-primary-soft-red md:mb-0 md:text-xl">
              02
            </h3>
            <h4 className="mt-[.33rem] cursor-pointer text-[1.15rem] font-extrabold text-neutral-very-dark-blue hover:text-primary-soft-red md:mt-[.15rem] md:text-[.695rem]">
              Top 10 Laptops of 2022
            </h4>
            <p className="mt-[.4rem] text-base leading-[1.55rem] text-neutral-dark-grayish-blue md:mt-1 md:text-[.58rem] md:leading-4">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </ul>
        <ul className="-ml-[.05rem] mt-[.05rem] flex gap-6 md:mt-0 md:gap-[.92rem]">
          <div className="relative h-[7.9rem] w-[11rem] md:h-[4.87rem] md:w-[6.2rem]">
            <img
              className="h-[7.9rem] w-[11rem] blur-[.2px] brightness-[.9] contrast-125 md:h-[4.87rem] md:w-[6.2rem]"
              src="image-gaming-growth.jpg"
              alt="PS4 Controller"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-5"></div>
          </div>
          <div className="flex flex-col">
            <h3 className="-mt-1 text-[1.9rem] font-bold leading-10 text-primary-soft-red md:mb-0 md:text-xl">
              03
            </h3>
            <h4 className="mt-[.33rem] cursor-pointer text-[1.15rem] font-extrabold text-neutral-very-dark-blue hover:text-primary-soft-red md:mt-[.15rem] md:text-[.695rem]">
              The Growth of Gaming
            </h4>
            <p className="mt-[.4rem] text-base leading-[1.6rem] text-neutral-dark-grayish-blue md:mt-1 md:text-[.58rem] md:leading-4">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </ul>
      </li>
    </div>
  );
}

export default TopArticles;
