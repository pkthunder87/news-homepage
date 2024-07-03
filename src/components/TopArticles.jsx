function TopArticles() {
  return (
    <div className="mt-16 md:col-span-2 md:mt-[2.8rem] md:block">
      <li className="grid list-none gap-[2.1rem] md:grid-cols-3 md:gap-5">
        <ul className="flex gap-[.92rem]">
          {/* Creates an overlay using only tailwind */}
          <div className="relative h-[8.05rem] w-[7rem] md:h-[4.9rem] md:w-[7.1rem]">
            <img
              className="h-[8.05rem] w-[7rem] brightness-90 contrast-125 md:h-[4.9rem] md:w-[7.1rem]"
              src="image-retro-pcs.jpg"
              alt="Retro PC"
            />
            <div className="absolute inset-0 bg-red-700 opacity-5"></div>
          </div>

          <div className="flex flex-col">
            <h3 className="-mt-1 text-xl font-bold text-primary-soft-red">
              01
            </h3>
            <h4 className="mt-[.15rem] cursor-pointer text-[.695rem] font-extrabold text-neutral-very-dark-blue hover:text-primary-soft-red">
              Reviving Retro PCs
            </h4>
            <p className="mt-1 text-[.58rem] leading-4 text-neutral-dark-grayish-blue">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </ul>
        <ul className="flex gap-[.92rem]">
          <div className="relative h-[7.9rem] w-[6.3rem] md:h-[4.87rem] md:w-[5.59rem]">
            <img
              className="h-[7.9rem] w-[6.3rem] blur-[.2px] brightness-90 contrast-125 md:h-[4.87rem] md:w-[5.59rem]"
              src="image-top-laptops.jpg"
              alt="Black and red keyboard"
            />
            <div className="absolute inset-0 bg-red-500 opacity-5"></div>
          </div>

          <div className="flex flex-col">
            <h3 className="-mt-1 text-xl font-bold text-primary-soft-red">
              02
            </h3>
            <h4 className="mt-[.15rem] cursor-pointer text-[.695rem] font-extrabold text-neutral-very-dark-blue hover:text-primary-soft-red">
              Top 10 Laptops of 2022
            </h4>
            <p className="mt-1 text-[.58rem] leading-4 text-neutral-dark-grayish-blue">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </ul>
        <ul className="-ml-[.05rem] flex gap-[.92rem]">
          <div className="relative h-[7.9rem] w-[6.4rem] md:h-[4.87rem] md:w-[6.2rem]">
            <img
              className="h-[7.9rem] w-[6.4rem] blur-[.2px] brightness-[.9] contrast-125 md:h-[4.87rem] md:w-[6.2rem]"
              src="image-gaming-growth.jpg"
              alt="PS4 Controller"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-5"></div>
          </div>
          <div className="flex flex-col">
            <h3 className="-mt-1 text-xl font-bold text-primary-soft-red">
              03
            </h3>
            <h4 className="mt-[.15rem] cursor-pointer text-[.695rem] font-extrabold text-neutral-very-dark-blue hover:text-primary-soft-red">
              The Growth of Gaming
            </h4>
            <p className="mt-1 text-[.58rem] leading-4 text-neutral-dark-grayish-blue">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </ul>
      </li>
    </div>
  );
}

export default TopArticles;
