import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { BsSun, BsFillMoonFill } from 'react-icons/Bs';
import { AuthContext } from "../AuthProvider/AuthProvider";



const LayOut = () => {
    const [theme, setTheme] = useState(true)
    const [localTheme, setLocalTheme] = useState()
    const {user,LogOutUser}=useContext(AuthContext)

    const toggleTheme = () => {
        setTheme(!theme);
        localStorage.setItem('theme', theme ? 'dark' : 'light');
    };

    useEffect(() => {
        const dayLight = localStorage.getItem("theme");
        setLocalTheme(dayLight);
    }, [theme, localTheme]);


    const handelLogOut=()=>{
        LogOutUser()
        .then(()=>{})
        .catch(()=>{})
    }

    return (
        <div data-theme={localTheme === 'light' ? 'light' : 'dark'}>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-3xl font-serif ">Rakibul islam <li className="ml-10 flex items-center justify-center" onClick={() => toggleTheme()}><a>
                            {
                                localTheme === 'light' ? <BsSun /> : <BsFillMoonFill />
                            }
                        </a></li></div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">

                                <Link to='/'><li><a>Home</a></li></Link>
                                <Link to='/myProject'><li><a>MY Project</a></li></Link>
                            </ul>
                            {
                                user?<Link>
                                <button onClick={()=>handelLogOut()} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                    <span className="relative text-white">LogOut</span>
                                </button>
                            </Link>:<Link to='/login'>
                                <button className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                    <span className="relative text-white">LogIn</span>
                                </button>
                            </Link>
                            }
                        </div>
                    </div>

                    <Outlet />
                    <Footer />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/myProject'><li><a>MY Project</a></li></Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default LayOut;