function Article() {
  return (
    <div className="mt-8 md:mr-[1.18rem] md:mt-0">
      <picture>
        <source media="(max-width:425px)" srcSet="image-web-3-mobile.jpg" />
        <img src="image-web-3-desktop.jpg" alt="colorful geometric blocks" />
      </picture>

      <div className="grid md:grid-cols-[52.2%_47.8%]">
        <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1em] text-neutral-very-dark-blue md:mt-[1.35rem] md:text-[2.15rem] md:leading-[2.18rem]">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex h-full flex-col justify-between">
          <p className="mt-4 text-[.92rem] leading-[1.6rem] text-neutral-dark-grayish-blue md:mt-[1.21rem] md:text-[.58rem] md:leading-4">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="mb-5 mt-[1.62rem] h-12 w-[11.5rem] bg-primary-soft-red pt-[.15rem] text-sm font-bold tracking-[.3em] text-neutral-very-dark-blue hover:bg-neutral-very-dark-blue hover:text-white md:-mb-1 md:mt-0 md:h-[1.88rem] md:w-[7.1rem] md:text-[.55rem]">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;
