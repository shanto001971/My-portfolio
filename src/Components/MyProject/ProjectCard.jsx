import { CgMediaLive } from 'react-icons/Cg';
import { BsGithub } from 'react-icons/Bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAxios from '../Hooks/Axios/useAxios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
AOS.init();

const ProjectCard = ({ singleCard }) => {
    // console.log(singleCard)
    const [axiosSecure] = useAxios()
    const handelFeedback = (event) => {
        event.preventDefault();
        const from = event.target;
        const message = from.feedback.value;
        console.log(message)
        axiosSecure.post('/feedback', {message})
        .then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire('Send Your Feedback')
            }
        })
        .catch(error => console.error(error));
    }

    return (
        <div className="mt-10 mb-10"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <div className="lg:max-w-3xl mx-auto p-3">
                <img className="rounded-md border" src={singleCard.projectImage} alt="" />
                <h1 className="text-2xl mt-5">Web SiteName: {singleCard.projectName}</h1>
                <p className="text-xl">Duration: {singleCard?.duration}</p>
                <p className="text-xl">Feature:</p>
                <p className="text-xl">Implement By:</p>
                <div className="flex items-center gap-10 mt-10">
                    <Link className='flex items-center gap-2 link'><CgMediaLive />Live Site Demo</Link>
                    <Link className='flex items-center gap-2 link' ><BsGithub /> GitHub Client Code</Link>
                    <Link className='flex items-center gap-2 link'><BsGithub /> GitHub Server Code</Link>
                </div>

                <form onSubmit={handelFeedback}>
                    <textarea className="textarea textarea-success w-full mt-5 mb-5" name='feedback' placeholder="Give me Your feedback"></textarea>
                    <button type='submit'  className="w-80 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">Send</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProjectCard;