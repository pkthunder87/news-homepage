function Sidebar() {
  return (
    <div className="mt-[2.45rem] bg-neutral-very-dark-blue px-[1.3rem] py-4 md:mt-0 md:px-[.93rem]">
      <h2 className="mt-[.1rem] text-[2rem] font-bold text-primary-soft-orange md:text-2xl">
        New
      </h2>
      <li className="mt-[1.4rem] list-none text-white md:mt-4">
        <ul>
          <h3 className="cursor-pointer text-[1.27rem] font-bold hover:text-primary-soft-orange md:text-[.77rem] md:leading-4">
            Hydrogen VS Electric Cars
          </h3>
          <p className="mt-1 text-[.93rem] leading-[1.6rem] text-neutral-grayish-blue md:text-[.57rem] md:leading-4">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr className="my-[1.8rem] border-[#31323f] md:my-4" />
        </ul>
        <ul>
          <h3 className="cursor-pointer text-[1.27rem] font-bold hover:text-primary-soft-orange md:text-[.77rem]">
            The Downsides of AI Artistry
          </h3>
          <p className="mt-[.35rem] text-[.93rem] leading-[1.6rem] text-neutral-grayish-blue md:mt-1 md:text-[.57rem] md:leading-4">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr className="my-[1.8rem] border-[#31323f] md:my-4" />
        </ul>
        <ul>
          <h3 className="cursor-pointer text-[1.27rem] font-bold hover:text-primary-soft-orange md:text-[.77rem]">
            Is VC Funding Drying Up?
          </h3>
          <p className="mb-2 mt-[.35rem] text-[.93rem] leading-[1.6rem] text-neutral-grayish-blue md:mb-0 md:mt-1 md:text-[.57rem] md:leading-4">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </ul>
      </li>
    </div>
  );
}

export default Sidebar;
