

const Banner = () => {
  return (

    <div className="relative -z-10">

      <div className="hero  min-h-screen  " style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/06/24/02/22/360_F_624022295_HgeTgf29IphSXZuxjYKp98VcZ1ttFjDT.jpg)' }}>

        <div className=" absolute inset-0 bg-black opacity-30"></div>
        <div className="hero-content text-center w-full text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-4xl w-full text-white font-bold">Your local source of high quality images
              <br /> and videos directly from their creators
            </h1>
            <div className=" flex h-16 justify-center w-full  ">


              <label className="input text-black input-bordered rounded-full w-full flex justify-between items-center gap-2">
                <input type="text" className="grow text-black" value="Search Photos and Videos" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 text-black opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
              </label>
            </div>
            <p className="text-start text-white font-thin text-sm ps-10">Recommended: <span className="text-slate-300">summer, food, covid-19, real estate, lo</span> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;