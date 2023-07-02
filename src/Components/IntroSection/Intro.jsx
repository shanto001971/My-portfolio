import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Intro = () => {
    return (
        <div className="">
            <div className="lg:flex mt-20 ml-16  lg:mt-96 lg:mx-96">
            <div
             data-aos="fade-right"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
            className="text-center w-28 p-2">
                <h1 className="text-white bg-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl  m-4 p-1  max-w-sm bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">8+</h1>
                <p className="text-xl">Month <br /> Experience</p>
            </div>
            <div className="text-center w-28 p-2 ">
                <h1 className="text-white bg-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl  m-4 p-1  max-w-sm bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">50+</h1>
                <p className="text-xl">Completed <br /> Project</p>
            </div>
            <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-center w-28 p-2">
                <h1 className="text-white bg-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl  m-4 p-1  max-w-sm bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">0+</h1>
                <p className="text-xl">Companies <br />Work</p>
            </div>
        </div>
        </div>
    );
};

export default Intro;