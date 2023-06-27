import Banner from "../BannerSection/Banner";
import Intro from "../IntroSection/Intro";
import MyServices from "../MyServices/MyServices";


const Home = () => {
    return (
        <div className="">
            <Banner/>
            <MyServices/>
            <Intro/>
        </div>
    );
};

export default Home;