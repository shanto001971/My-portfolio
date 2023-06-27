import Banner from "../BannerSection/Banner";
import ContactInfo from "../ContactInfo/ContactInfo";
import Footer from "../Footer/Footer";
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
            <Footer/>
        </div>
    );
};

export default Home;