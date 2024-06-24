function Sidebar() {
  return (
    <div className="bg-neutral-very-dark-blue px-[.95rem] py-4">
      <h2 className="mt-[.1rem] text-2xl font-bold text-primary-soft-orange">
        New
      </h2>
      <li className="mt-4 list-none text-white">
        <ul>
          <h3 className="cursor-pointer text-[.77rem] font-bold hover:text-primary-soft-orange">
            Hydrogen VS Electric Cars
          </h3>
          <p className="mt-1 text-[.57rem] leading-4">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr className="my-4 border-[#31323f]" />
        </ul>
        <ul>
          <h3 className="cursor-pointer text-[.77rem] font-bold hover:text-primary-soft-orange">
            The Downsides of AI Artistry
          </h3>
          <p className="mt-1 text-[.57rem] leading-4">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr className="my-4 border-[#31323f]" />
        </ul>
        <ul>
          <h3 className="cursor-pointer text-[.77rem] font-bold hover:text-primary-soft-orange">
            Is VC Funding Drying Up?
          </h3>
          <p className="mt-1 text-[.57rem] leading-4">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </ul>
      </li>
    </div>
  );
}

export default Sidebar;
