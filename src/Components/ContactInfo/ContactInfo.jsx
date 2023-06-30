import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
AOS.init();

const ContactInfo = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fpiwtpw', 'template_6r0y8ci', form.current, 'w530MDPCL5y2OqbDA')
            .then((result) => {
                console.log(result);
                if (result.text === "OK") {
                    Swal.fire('Successfully Send Your Message')
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="lg:flex items-center justify-around mt-32 ">
            <div
                style={{
                    backgroundImage: `url("https://www.dreamhost.com/blog/wp-content/uploads/2023/02/The-Perfect-Contact-Us-Page-Feature-730x485.jpg")`
                }}
                className="lg:w-1/2 text-center bg-cover h-80 rounded-3xl bg-fixed bg-center bg-no-repeat">
                <h1 className="text-4xl mt-32  p-10 ">Get in Touch <br /> <span className="text-yellow-300">Contact Me</span></h1>
            </div>
            <div className="lg:w-1/2 mt-20 p-10">
                <form  ref={form} onSubmit={sendEmail}>
                    <label >Your Name</label>
                    <br />
                    <input type="text" placeholder="Name" name="user_name" className="input input-bordered input-info w-full max-w-xs" />
                    <br />
                    <input type="text" placeholder="Email" name="user_email" className="input input-bordered input-info w-full max-w-xs mt-5 mb-5" />
                    <br />
                    <textarea className="textarea  textarea-primary w-80" name="message" placeholder="Message"></textarea>
                    <br />
                    <button type='submit' className="w-80 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">Send</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactInfo;