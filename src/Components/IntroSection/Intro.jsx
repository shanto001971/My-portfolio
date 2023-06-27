import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Intro = () => {
    return (
        <div className="flex w-full mt-20 ml-16  lg:mt-96 lg:mx-96">
            <div
             data-aos="fade-right"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
            className="text-center w-28 p-2">
                <h1 className="bg-purple-200 shadow-2xl w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl text-amber-700">8+</h1>
                <p className="text-xl">Month <br /> Experience</p>
            </div>
            <div className="text-center w-28 p-2">
                <h1 className="bg-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl text-amber-700">50+</h1>
                <p className="text-xl">Completed <br /> Project</p>
            </div>
            <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-center w-28 p-2">
                <h1 className="bg-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl text-amber-700">0+</h1>
                <p className="text-xl">Companies <br />Work</p>
            </div>
        </div>
    );
};

export default Intro;