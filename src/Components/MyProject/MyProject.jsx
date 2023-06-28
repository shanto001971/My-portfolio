import { useLoaderData } from "react-router-dom";
import ProjectCard from "./ProjectCard";


const MyProject = () => {
    const data = useLoaderData()

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
                        <div className="flex items-center gap-2">
                            <img className="w-10 h-10 rounded-full" src="https://mensline.org.au/wp-content/uploads/2020/05/Excuses-header-1024x683.jpg" alt="" />
                            <div className="bg-white w-44 h-16 rounded-lg p-2 border shadow-lg">
                                Good Work Keep it Up
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProject;