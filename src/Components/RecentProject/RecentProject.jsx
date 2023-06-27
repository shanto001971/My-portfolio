import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const RecentProject = () => {
    return (
        <div className="lg:mt-44">
            <div className="text-center">
                <h1 className="text-4xl font-serif">Recent Project</h1>
                <hr className="w-1/2 mx-auto mt-5 "/>
            </div>
            
            <div className="mt-20">
            <Carousel showArrows={true} >
                <div>
                    <img src="../../../public/Slider1.png" />
                   
                </div>
                <div>
                    <img src="../../../public/Slider2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="../../../public/Slider3.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="../../../public/Slider4.png" />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default RecentProject;