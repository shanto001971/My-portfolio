import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SkillSection = () => {


    return (
        <div className="lg:flex justify-around mt-20">
            <div className="p-10">
                <h1 className="text-4xl font-serif">Work for All These <br /> <span className="text-amber-400 text-4xl font-serif">Brand & Clients</span></h1>
                <p className="mt-10 mb-9">I have completed a web development course from Programming Hero platform. <br /> I have extensive
                    knowledge of HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, <br /> MongoDB, JWT, Bootstrap,
                    TailwindCSS, Firebase, MaterialUI, NextJS.</p>
                <button href="https://drive.google.com/file/d/12ryNGsbxtrXw8U-zJqGW9adbnsXk9eZL/view?usp=drive_link" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Downlod Resume</span>
                </button>
            </div>

            <div className="relative">
                <img className="lg:w-full rotate-12 absolute" src="../../../public/Vector2.png" alt="" />
                <img className="lg:w-full " src="../../../public/Vector1.png" alt="" />
                <div className="w-72 h-72 bg-slate-100 rounded-full absolute top-24 left-32">
                    <img
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className="w-24 h-24 rounded-full absolute bg-white p-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" />
                    <img
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className="w-24 h-24 rounded-full absolute top-0 left-48" src="https://w7.pngwing.com/pngs/232/470/png-transparent-circle-js-node-node-js-programming-round-icon-popular-services-brands-vol-icon.png" alt="" />
                    <img className="w-24  rounded-full absolute bottom-24 right-24 top-28" src="https://www.gran-turismo.com/gtsport/decal/5125114039554278920_1.png" alt="" />
                    <img
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className="w-24 h-24 rounded-full absolute bottom-0" src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" alt="" />
                    <img
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className="w-24 h-24 rounded-full absolute bottom-0 right-0" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default SkillSection;