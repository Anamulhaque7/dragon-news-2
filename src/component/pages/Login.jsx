import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {

    const { userLogin, setUser } = useContext(AuthContext)
    const location = useLocation()
    const navigat = useNavigate()
    const [error, setError] = useState({})
    // console.log(location)
    const handelLogIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user)
                setUser(user);
                navigat(location?.state ? location.state : "/")
            })
            .catch((err) => {
                setError({ ...error, login: err.code })
            })
    }

    return (
        <div className="hero bg-base-200  min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-white  max-w-sm rounded-none ">
                    <h1 className="text-2xl font-semibold text-center mt-4">Login your account</h1>
                    <form onSubmit={handelLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div>
                           {error.login && <label className="label taxt-sm text-red-600">
                            {error.login}</label>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-black text-white w-full">Login</button>
                        </div>
                    </form>
                    <p className="text-sm mx-auto mb-3">Dont't Have An Account ? <Link className="text-red-500 italic underline" to="/auth/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;