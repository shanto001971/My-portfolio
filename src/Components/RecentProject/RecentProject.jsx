import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const RecentProject = () => {
    return (
        <div className="lg:mt-44 mt-40">
            <div className="text-center">
                <h1 className="text-4xl font-serif">Recent Project</h1>
                <p className="text-2xl font-sans">I have completed several projects, some of which are shown</p>
                <hr className="w-1/2 mx-auto mt-5 "/>
            </div>
            
            <div className="mt-20">
            <Carousel showArrows={true} >
                <div>
                    <img src="https://i.ibb.co/CwHXhMB/Slider1.png" />
                   
                </div>
                <div>
                    <img src="https://i.ibb.co/QfmcJVp/Slider2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/jwzfQY7/Slider3.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/mbQrGyw/Slider4.png" />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default RecentProject;