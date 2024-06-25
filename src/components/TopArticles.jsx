function TopArticles() {
  return (
    <div className="mt-[2.8rem] md:col-span-2">
      <li className="grid list-none grid-cols-3 gap-5">
        <ul className="flex gap-[.92rem]">
          <div className="relative h-[4.9rem] w-[7.1rem]">
            <img
              className="h-[4.9rem] w-[7.1rem] brightness-90 contrast-125"
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
          <div className="relative h-[4.87rem] w-[5.59rem]">
            <img
              className="h-[4.87rem] w-[5.59rem] blur-[.2px] brightness-90 contrast-125"
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
          <div className="relative h-[4.87rem] w-[6.2rem]">
            <img
              className="h-[4.87rem] w-[6.2rem] blur-[.2px] brightness-[.9] contrast-125"
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
