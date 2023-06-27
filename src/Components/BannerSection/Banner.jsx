


const Banner = () => {
    return (
        <div className='lg:flex justify-around w-full bg-no-repeat bg-cover ' >
            <div className="lg:w-1/2 my-auto ml-10">
                <h1 className='text-5xl font-serif'>Hi I am ....</h1>
                <h4 className='text-5xl mt-5 font-serif text'>Rakibul Islam</h4>
                <p className='mt-5 mb-5'>MERN stack Developer With high level of experience in web development. <br /> producting the Quality Work </p>
                <a href="https://drive.google.com/file/d/12ryNGsbxtrXw8U-zJqGW9adbnsXk9eZL/view?usp=drive_link" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Downlod Resume</span>
                </a>

                <div className="flex gap-7 mt-20 mb-10">
                <a href="https://github.com/shanto001971"><img className="w-16" src="../../../public/github.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/rakibul-islam-a3982227b/"><img className="w-16" src="../../../public/linkedin.png" alt="" /></a>
                <a href=""><img className="w-16" src="../../../public/instagram.png" alt="" /></a>

                </div>
            </div>
            <div className="lg:w-1/2 relative mt-20">
                <div className="w-full h-screen">
                    <img className=' absolute  right-4' src="../../../public/Vector1.png" alt="" />
                    <img className='  absolute right-4' src="../../../public/Vector2.png" alt="" />
                    <img className='  absolute top-10 lg:absolute lg:-top-11 lg:h-full lg:left-10 rotate-3' src="../../../public/boy.png" alt="" />
                </div>
                <img className="absolute -top-16 -left-10 w-1/3  lg:-top-20 lg:-left-52" src="../../../public/glassesimoji.png" alt="" />
                <div className="flex items-center gap-5 p-2 w-60 bg-slate-200 rounded-lg  absolute top-0 right-0">
                    <img className="w-16" src="../../../public/crown.png" alt="" />
                    <h1 className="text-2xl">web Developer</h1>
                </div>
                <div className="h-24 flex items-center gap-5 p-2 w-60 bg-slate-200 rounded-lg absolute lg:-left-20 lg:bottom-24 bottom-96">
                    <img className="w-16" src="../../../public/thumbup.png" alt="" />
                    <h1 className="text-2xl">Best Design Award</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;