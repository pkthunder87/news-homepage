import { useEffect, useState } from 'react';

function NavMenu() {
  return (
    <li className="flex list-none gap-[1.6rem] text-[.6rem] leading-4 tracking-tight text-neutral-dark-grayish-blue">
      <ul className="cursor-pointer hover:text-primary-soft-red">Home</ul>
      <ul className="cursor-pointer hover:text-primary-soft-red">New</ul>
      <ul className="cursor-pointer hover:text-primary-soft-red">Popular</ul>
      <ul className="cursor-pointer hover:text-primary-soft-red">Trending</ul>
      <ul className="cursor-pointer hover:text-primary-soft-red">Categories</ul>
    </li>
  );
}

function NavMenuMobile() {
  return (
    <li className="mt-[4.5rem] flex list-none flex-col gap-[2rem] p-5 text-[1.1rem] leading-4 text-neutral-very-dark-blue">
      <ul className="cursor-pointer hover:text-primary-soft-red">Home</ul>
      <ul className="cursor-pointer hover:text-primary-soft-red">New</ul>
      <ul className="cursor-pointer hover:text-primary-soft-red">Popular</ul>
      <ul className="cursor-pointer hover:text-primary-soft-red">Trending</ul>
      <ul className="cursor-pointer hover:text-primary-soft-red">Categories</ul>
    </li>
  );
}

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
            <div className="absolute z-10 -ml-60 -mt-12 h-[104dvh] w-[100dvw] bg-neutral-off-white">
              <img
                className="left-0 ml-[12.5rem] mt-8 h-[1.9rem] hover:cursor-pointer"
                src="icon-menu-close.svg"
                alt="logo"
                onClick={() => setIsMenuOpen(() => !isMenuOpen)}
              />
              <NavMenuMobile />
            </div>
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
        <NavMenu />
      )}
    </div>
  );
}

export default Header;
