

const ContactInfo = () => {
    return (
        <div className="lg:flex items-center justify-around mt-32 ">
            <div className="lg:w-1/2 text-center">
                <h1 className="text-4xl">Get in Touch <br /> <span className="text-yellow-300">Contact Me</span></h1>
            </div>
            <div className="lg:w-1/2 mt-20 p-10">
            <input type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-xs" />
            <br />
            <input type="text" placeholder="Email" className="input input-bordered input-info w-full max-w-xs mt-5 mb-5" />
            <br />
            <textarea className="textarea  textarea-primary w-80" placeholder="Message"></textarea>
            <br />
            <button className="w-80 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Send</span>
                </button>
            </div>
        </div>
    );
};

export default ContactInfo;