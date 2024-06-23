function Header() {
  return (
    <div className="col-span-2 flex items-center justify-between">
      <img className="h-6" src="logo.svg" alt="logo" />
      <li className="flex list-none gap-5 text-[.67rem] leading-4">
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
