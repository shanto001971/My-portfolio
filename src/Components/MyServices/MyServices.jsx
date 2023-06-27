

const MyServices = () => {
    return (
        <div className="lg:flex justify-between relative mt-20 ">
            <div className="lg:w-1/2 p-5">
                <h1 className="text-4xl font-serif">My Awesome <br /> <span className="text-4xl font-serif text-amber-300">Services</span></h1>
                <p className="text-xl mt-10">Expertise : HTML , CSS, ES6, Bootstrap, <br /> TailwindCSS, DaisyUI, React.JS, Vite.js,  React-Router-Dom, React Context Api.</p>
                <button href="https://drive.google.com/file/d/12ryNGsbxtrXw8U-zJqGW9adbnsXk9eZL/view?usp=drive_link" className="w-36 mt-10 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Contact</span>
                </button>
            </div>
            <div className="relative lg:w-1/2">
                <div className="text-center w-72 rounded-xl p-2 border shadow-2xl lg:absolute -left-40 top-52 mx-auto ">
                    <img className="mx-auto" src="../../../public/heartemoji.png" alt="" />
                    <h1 className="text-xl font-serif">Design</h1>
                    <p>Tailwind,DaisyUI,AOS,Framer-Motion <br />React-awesome-reveal,React-spring </p>
                    <button className="w-36 mt-5 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">LEARN MORE</span>
                    </button>
                </div>
                <div className="text-center m-10 w-72 rounded-xl p-2 border shadow-2xl lg:absolute bottom-0 left-40 mx-auto">
                    <img className="mx-auto" src="../../../public/glasses.png" alt="" />
                    <h1 className="text-xl font-serif">Developer</h1>
                    <p>Html,Css,JavaScript<br />React,Node,Express </p>
                    <button className="w-36 mt-5 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">LEARN MORE</span>
                    </button>
                </div>
                <div className="text-center w-72 rounded-xl p-2 border shadow-2xl lg:absolute left-48 -bottom-80 mx-auto">
                    <img className="mx-auto" src="../../../public/humble.png" alt="" />
                    <h1 className="text-xl font-serif">UI/UX</h1>
                    <p>Comfortable for <br />UI and UX design </p>
                    <button className="w-36 mt-5 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">LEARN MORE</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyServices;