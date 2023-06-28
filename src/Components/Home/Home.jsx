import Banner from "../BannerSection/Banner";
import ContactInfo from "../ContactInfo/ContactInfo";
import Intro from "../IntroSection/Intro";
import MyServices from "../MyServices/MyServices";
import RecentProject from "../RecentProject/RecentProject";
import SkillSection from "../SkillSection/SkillSection";


const Home = () => {
    return (
        <div className="">
            <Banner/>
            <MyServices/>
            <Intro/>
            <SkillSection/>
            <RecentProject/>
            <ContactInfo/>
        </div>
    );
};

export default Home;