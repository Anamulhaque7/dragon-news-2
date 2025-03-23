import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
    const { singInwWitheGoole, setUser, gitHubSingIn } = useContext(AuthContext)
    const handelGoogleLoin = () => {
        singInwWitheGoole()
            .then(resut => {
                const user = resut.user;
                // console.log(user)
                setUser(user)
            })
            .catch(error => {
                console.log("ERROR", error.meggage)
            })

    }

    const hanelGitHubLogin = () => {
        gitHubSingIn()
            .then(resut => {
                const user = resut.user;
                // console.log(user)
                setUser(user)
            })
            .catch(error => {
                console.log("ERROR", error.message)
            })
    }

    return (
        <div>
            <h2 className=" font-semibold mb-3">Login With</h2>
            <div className="*:w-full space-y-2">
                <button onClick={handelGoogleLoin} className="btn"><FaGoogle />Login with Google</button>
                <button onClick={hanelGitHubLogin} className="btn"><FaGithub />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;