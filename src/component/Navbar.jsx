import { Link } from "react-router-dom";
import userIcon from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handelLogOut = () => {
        logOut()
            .then(() => console.log("User Out"))
            .catch(error => console.error("Logout Error", error.message))
    }

    return (
        <div className="flex justify-between items-center">
            <div className="font-extrabold  text-sm">
            <p className="font-extrabold text-black text-lg ">{user && user?.displayName}</p>{user && user.email}</div>
            <div className=" space-x-5 ">
                <Link to="/">Home</Link>
                <Link to="/Carear">Carear</Link>
                <Link to="/About">About</Link>
            </div>
            <div className="login flex justify-center items-center space-x-3">
                <div className="">
                    {
                        user && user?.email ? (<div><img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                           </div>) : (<img src={userIcon} alt="" />)
                    }

                </div>
                <div>
                    {
                        user && user?.email ? <button onClick={handelLogOut} className="btn bg-black text-white">Logout</button> : <Link to="/auth/login" className="btn bg-black text-white ">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;