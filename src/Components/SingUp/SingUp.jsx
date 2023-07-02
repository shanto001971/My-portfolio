import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const SingUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { LogInUser, updateprofileUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handelSingUp = (data) => {
        console.log(data)
        LogInUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                updateprofileUser(data.name, data.photoUrl)
                    .then((result) => {
                        console.log(result)
                        navigate('/login')
                    })
                    .catch((err) => { console.log(err) })
            })
            .catch((err) => { console.log(err) })
    }
    return (
        <div className="">
            <Helmet>
                <title>Rakibul | LogIn</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left lg:w-1/2 ">
                        <img className="lg:w-3/5 mx-auto rounded-2xl" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
                        <form onSubmit={handleSubmit(handelSingUp)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" {...register("name")} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" {...register("email")} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" {...register("password")} className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" placeholder="PhotoUrl" {...register("PhotoUrl")} className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <p>Already have an account <Link className="link" to='/login'>LogIn</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;