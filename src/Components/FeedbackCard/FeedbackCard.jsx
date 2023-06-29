

const FeedbackCard = ({feedbackMessage}) => {
    return (
        <div className="flex items-center gap-2 mb-5">
            <img className="w-10 h-10 rounded-full" src="https://mensline.org.au/wp-content/uploads/2020/05/Excuses-header-1024x683.jpg" alt="" />
            <div className="bg-white w-44 h-16 rounded-lg p-2 border shadow-lg">
                {feedbackMessage.message}
            </div>
        </div>
    );
};

export default FeedbackCard;