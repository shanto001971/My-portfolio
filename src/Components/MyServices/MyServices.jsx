import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();

const MyServices = () => {
    AOS.init({
        // Global settings:
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    return (
        <div className="lg:flex justify-between lg:mt-40 lg:relative  ">
            <div
                className="lg:w-1/2 p-5">
                <h1 className="text-4xl font-serif">My Awesome <br /> <span className="text-4xl font-serif text-amber-300">Services</span></h1>
                <p className="text-xl mt-10">Expertise : HTML , CSS, ES6, Bootstrap, <br /> TailwindCSS, DaisyUI, React.JS, Vite.js,  React-Router-Dom, React Context Api.</p>
                <Link to='/contact'>
                <button href="https://drive.google.com/file/d/12ryNGsbxtrXw8U-zJqGW9adbnsXk9eZL/view?usp=drive_link" className="w-36 mt-10 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Contact</span>
                </button>
                </Link>
            </div>
            <div className="relative lg:w-1/2">
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"

                    className="text-center w-72 rounded-xl p-2 border shadow-2xl lg:absolute -left-40 top-52 mx-auto ">
                    <img className="mx-auto" src="https://i.ibb.co/K5PvSKf/heartemoji.png" alt="" />
                    <h1 className="text-xl font-serif">Design</h1>
                    <p>Tailwind,DaisyUI,AOS,Framer-Motion <br />React-awesome-reveal,React-spring </p>
                    <button className="w-36 mt-5 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">LEARN MORE</span>
                    </button>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="text-center m-10 w-72 rounded-xl p-2 border shadow-2xl lg:absolute bottom-0 left-40 mx-auto">
                    <img className="mx-auto" src="https://i.ibb.co/yQwB330/glasses.png" alt="" />
                    <h1 className="text-xl font-serif">Developer</h1>
                    <p>Html,Css,JavaScript<br />React,Node,Express </p>
                    <button className="w-36 mt-5 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">LEARN MORE</span>
                    </button>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="text-center w-72 rounded-xl p-2 border shadow-2xl lg:absolute left-48 -bottom-80 mx-auto">
                    <img className="mx-auto" src="https://i.ibb.co/7RrsbGV/humble.png" alt="" />
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