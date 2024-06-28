function Article() {
  return (
    <div className="mt-8 md:mr-[1.18rem] md:mt-0">
      <picture>
        <source media="(max-width:425px)" srcSet="image-web-3-mobile.jpg" />
        <img src="image-web-3-desktop.jpg" alt="colorful geometric blocks" />
      </picture>

      <div className="grid md:grid-cols-[52.2%_47.8%]">
        <h1 className="mt-7 text-[2.5rem] font-extrabold text-neutral-very-dark-blue md:mt-[1.35rem] md:text-[2.15rem] md:leading-[2.18rem]">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex h-full flex-col justify-between">
          <p className="mt-[1.21rem] text-[.58rem] leading-4 text-neutral-dark-grayish-blue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="-mb-1 h-[1.88rem] w-[7.1rem] bg-primary-soft-red text-[.55rem] font-bold tracking-[.3em] text-neutral-very-dark-blue hover:bg-neutral-very-dark-blue hover:text-white">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;
