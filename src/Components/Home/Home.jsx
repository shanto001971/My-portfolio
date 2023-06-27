import Banner from "../BannerSection/Banner";
import Intro from "../IntroSection/Intro";
import MyServices from "../MyServices/MyServices";
import SkillSection from "../SkillSection/SkillSection";


const Home = () => {
    return (
        <div className="">
            <Banner/>
            <MyServices/>
            <Intro/>
            <SkillSection/>
        </div>
    );
};

export default Home;