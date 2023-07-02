import { TypeAnimation } from "react-type-animation";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



const Banner = () => {

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


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
        <div className='lg:flex justify-around w-full bg-no-repeat bg-cover ' >
            <div className="lg:w-1/2 my-auto ml-10">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'Hi, I am ....',
                        1000,
                        'Hello, I am ....',
                        1000,
                        'Hi dear, I am ....',
                        1000,
                        'Hi I am ....',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
                <h4 className='text-5xl mt-5 font-serif text'>Rakibul Islam</h4>
                <p className='mt-5 mb-5'>MERN stack Developer With high level of experience in web development. <br /> producting the Quality Work </p>
                <a href="../../../public/Rakibul islam MERN Stack Developer Resume (7) (1).pdf" download className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Download Resume</span>
                </a>

                <div className="flex gap-7 mt-20 mb-10">
                    <a href="https://github.com/shanto001971"><img className="w-16" src="https://i.ibb.co/3fyvTJT/github.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/rakibul-islam-a3982227b/"><img className="w-16" src="https://i.ibb.co/qyp559Q/linkedin.png" alt="" /></a>
                    <a href=""><img className="w-16" src="https://i.ibb.co/C170FtT/instagram.png" alt="" /></a>

                </div>
            </div>
            <div className="lg:w-1/2 relative mt-52 lg:mt-20">
                <div className="w-full h-screen">
                    <img className='absolute  right-4' src="https://i.ibb.co/hcghJSj/Vector1.png" alt="" />
                    <img className='absolute right-4' src="https://i.ibb.co/KG8VbCb/Vector2.png" alt="" />
                    <img className='absolute  -top-60 lg:absolute lg:-top-20 lg:h-full  ' src="https://i.ibb.co/VQPV860/Screenshot-2023-0630-225619-removebg-preview.png" alt="" />
                </div>
                <img 
               data-aos="zoom-in-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="absolute -top-16 -left-10 w-1/3  lg:-top-20 lg:-left-52" src="https://i.ibb.co/2SC4Rzq/glassesimoji.png" alt="" />
                
            </div>
        </div>
    );
};

export default Banner;