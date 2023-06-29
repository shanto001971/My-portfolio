import { useLoaderData } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@tanstack/react-query";
import FeedbackCard from "../FeedbackCard/FeedbackCard";


const MyProject = () => {
    const FeedbackData = useLoaderData()
    const { isLoading, data } = useQuery({
        queryKey: ['feedbackData'],
        queryFn: () =>
            fetch('http://localhost:5000/project').then(
                (res) => res.json(),
            ),
    })
    // console.log(feedbackData)
    if (isLoading) return <progress className="progress w-56"></progress>


    console.log(FeedbackData)

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    {
                        data.map((singleCard) => <ProjectCard key={singleCard._id} singleCard={singleCard} />)
                    }
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        <div className="text-center mb-10">
                            <h1 className="uppercase text-2xl font-sans mb-2">feedback</h1>
                            <hr />
                        </div>
                        {
                            FeedbackData.slice(0, 6).map(feedbackMessage => <FeedbackCard key={feedbackMessage._id} feedbackMessage={feedbackMessage} />)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProject;