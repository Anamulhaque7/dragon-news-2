import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {

    const { creatNewUser, setUser, upsateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState({})
    const navigat = useNavigate()
    const handelRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.lenght < 5) {
            setError({ ...error, password: "must be more the 6 chatacter " })
            return;
        }
        // console.log(name, password, email, photo)

        // firebase creat user
        creatNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                // console.log("user creat", user)
                upsateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigat("/")
                    }).catch(err =>
                        console.log(err.code)
                    )
            })
            .catch(err => {
                console.log("ERROR", err.message)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-2xl font-semibold text-center mt-4">Register your account</h1>
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter your photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered " required />

                        </div>
                        <div>
                            {
                                error.lenght && <label className="label text-rose-500">
                                    {error.password}
                                </label>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-black text-white w-full">Regaster</button>
                        </div>
                    </form>
                    <p className="text-sm text-center mb-2 font-bold">Allreday Have An Account  ? <Link to="/auth/login" className="text-red-500 italic underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;