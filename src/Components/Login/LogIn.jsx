import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";


const LogIn = () => {
    const { singUpUser,user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const handelLogIn = (data) => {
        console.log(data.email)
        singUpUser(data.email, data.password)
            .then(result => {
                console.log(result.user.email)
                if (result.user) {
                    navigate('/')
                }
            })
            .catch((err) => {console.log(err) })
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="text-center lg:text-left lg:w-1/2 ">
                    <img className="lg:w-3/5 mx-auto rounded-2xl" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
                    <form onSubmit={handleSubmit(handelLogIn)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} placeholder="email" {...register("email")} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" {...register("password")} className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>

                        <p>New to <Link className="link" to='/singUp'>SingUp</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;