import { useEffect, useState } from 'react';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 750) {
      setIsMobile(true);
      console.log('True');
      console.log(window.screen.width);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="-mt-3 flex items-center justify-between md:col-span-2">
      <h1>
        <img className="h-7 md:h-6" src="logo.svg" alt="logo" />
      </h1>
      {isMobile ? (
        <div>
          {isMenuOpen ? (
            <img
              className="-mt-[.1rem] mr-1 h-[1.9rem] hover:cursor-pointer"
              src="icon-menu-close.svg"
              alt="logo"
              onClick={() => setIsMenuOpen(() => !isMenuOpen)}
            />
          ) : (
            <img
              className="h-[1.1rem] hover:cursor-pointer"
              src="icon-menu.svg"
              alt="logo"
              onClick={() => setIsMenuOpen(() => !isMenuOpen)}
            />
          )}
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Header;
