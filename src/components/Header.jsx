function Header() {
  return (
    <div className="col-span-2 -mt-3 flex items-center justify-between">
      <h1>
        <img className="h-6" src="logo.svg" alt="logo" />
      </h1>
      <li className="flex list-none gap-[1.6rem] text-[.6rem] leading-4 tracking-tight">
        <ul className="cursor-pointer text-neutral-dark-grayish-blue hover:text-primary-soft-red">
          Home
        </ul>
        <ul className="cursor-pointer text-neutral-dark-grayish-blue hover:text-primary-soft-red">
          New
        </ul>
        <ul className="cursor-pointer text-neutral-dark-grayish-blue hover:text-primary-soft-red">
          Popular
        </ul>
        <ul className="cursor-pointer text-neutral-dark-grayish-blue hover:text-primary-soft-red">
          Trending
        </ul>
        <ul className="cursor-pointer text-neutral-dark-grayish-blue hover:text-primary-soft-red">
          Categories
        </ul>
      </li>
    </div>
  );
}

export default Header;
