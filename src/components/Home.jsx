const Home = () => {
  return (
    <>
      <div className="md:flex overflow-hidden justify-between gap-4 p-4 mt-8 h-auto rounded-2xl w-[75%] mx-auto bg-orange-100">
        <div>
          <h2 className="font-semibold text-center md:text-3xl text-xl mb-4 mt-6">
            Welcome to <span className="text-orange-600">Gift Gallery!</span>
          </h2>
          <p className="font-[400] mb-1 px-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            vero. Lorem ipsum dolor sit amet.
          </p>
          <p className="hidden md:block px-4 font-[400] mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            architecto et illo mollitia illum vitae magni excepturi quam,
            pariatur officis Lorem ipsum dolor sit amet.
          </p>
          <div className="w-full text-center mb-2">
            <button className="mr-3 mb-2 py-2 px-8 bg-orange-400 rounded-xl text-lg border-2 border-orange-400 hover:opacity-75">
              Shop now
            </button>
            <button className="py-2 mb-2 px-8 bg-transparent border-2 text-slate-900 text-lg border-slate-900 rounded-xl hover:opacity-75">
              Visit now
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <img
            className="w-full h-full object-fit"
            src="https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Home image"
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-between gap-4 w-[75%] h-auto mx-auto mt-12">
        <div className="px-8 py-7 rounded-2xl bg-green-400 text-white cursor-pointer">
          <svg
            className="w-12 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" />
          </svg>
        </div>
        <div className="px-8 py-8 rounded-2xl bg-fuchsia-400 text-white cursor-pointer">
          <svg
            className="w-12 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z" />
          </svg>
        </div>
        <div className="px-8 py-7 rounded-2xl bg-amber-400 text-white cursor-pointer">
          <svg
            className="w-12 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M171.7 232.8A5.4 5.4 0 0 0 176.7 229.5 48.1 48.1 0 0 1 191.6 204.2c1.2-.8 1.7-2.5 1.7-4.1a4.2 4.2 0 0 0 -2.1-3.3L74.4 128.5 149 85a9.9 9.9 0 0 0 5-8.3 9.1 9.1 0 0 0 -5-8.3L126.6 55.6a9.7 9.7 0 0 0 -9.5 0l-100.2 58a9.9 9.9 0 0 0 -5 8.3V237a9.1 9.1 0 0 0 5 8.3L39.2 258.1a8.8 8.8 0 0 0 5 1.2 9.4 9.4 0 0 0 6.6-2.5 10.8 10.8 0 0 0 2.9-7V164.5L169.7 232.4A4.5 4.5 0 0 0 171.7 232.8zM323.3 377.7a12.5 12.5 0 0 0 -5 1.2l-74.5 43.1V287.9c0-2.9-2.9-5.8-6.2-4.6a53 53 0 0 1 -29 .4 4.9 4.9 0 0 0 -6.2 4.6V421.6l-74.5-43.1a8.8 8.8 0 0 0 -5-1.2 9.6 9.6 0 0 0 -9.5 9.5v26.1a9.1 9.1 0 0 0 5 8.3l100.2 57.6A8.8 8.8 0 0 0 223.5 480a11 11 0 0 0 5-1.2l100.2-57.6a9.9 9.9 0 0 0 5-8.3V386.8C332.8 382.3 328.2 377.7 323.3 377.7zM286 78a23 23 0 1 0 -23-23A23 23 0 0 0 286 78zm63.6-10.1a23 23 0 1 0 23 23A23 23 0 0 0 349.6 67.9zM412.8 151.6a23 23 0 1 0 -23-23A23 23 0 0 0 412.8 151.6zm-63.2-9.2a23 23 0 1 0 23 23A23 23 0 0 0 349.6 142.4zm-63.6 83.2a23 23 0 1 0 -23-23A23 23 0 0 0 286 225.6zm-62.1 36.4a23 23 0 1 0 -23-23A23 23 0 0 0 223.9 262zm188.9-82.4a23 23 0 1 0 23 23A23 23 0 0 0 412.8 179.6zm0 72.3a23 23 0 1 0 23 23A23 23 0 0 0 412.8 251.9z" />
          </svg>
        </div>
        <div className="px-8 py-7 rounded-2xl bg-cyan-400 text-white cursor-pointer">
          <svg
            className="w-12 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z" />
          </svg>
        </div>
        <div className="px-8 py-6 rounded-2xl bg-rose-400 text-white cursor-pointer">
          <svg
            className="w-12 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z" />
          </svg>
        </div>
        <div className="px-8 py-8 rounded-2xl bg-violet-400 text-white cursor-pointer">
          <svg
            className="w-12 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M500.3 7.3C507.7 13.3 512 22.4 512 32v96c0 9.6-4.3 18.7-11.7 24.7s-17.2 8.5-26.6 6.6l-160-32C301.5 124.9 292 115.7 289 104H224v34.8c37.8 18 64 56.5 64 101.2V384H64V240c0-44.7 26.2-83.2 64-101.2V110c-36.2 11.1-66 36.9-82.3 70.5c-5.8 11.9-20.2 16.9-32.1 11.1S-3.3 171.4 2.5 159.5C26.7 109.8 72.7 72.6 128 60.4V32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V56h65c3-11.7 12.5-20.9 24.7-23.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM288 416v32c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V416H288zM176 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
          </svg>
        </div>
        <div className="px-8 py-8 rounded-2xl bg-teal-400 text-white cursor-pointer">
          <svg
            className="w-12 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Home;
