import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const FeedbackCard = ({ feedbackMessage }) => {
    console.log(feedbackMessage)
    const {user}=useContext(AuthContext)
    console.log(user)
    return (
        <div className="flex items-center gap-2 mb-5 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <img className="w-10 h-10 rounded-full" src={user?user?.photoURL:'https://mensline.org.au/wp-content/uploads/2020/05/Excuses-header-1024x683.jpg'} alt="" />
            <div className="bg-white w-44 h-16 rounded-lg p-2 border shadow-lg overflow-hidden">
                {feedbackMessage.message}
            </div>
        </div>
    );
};


export default FeedbackCard;