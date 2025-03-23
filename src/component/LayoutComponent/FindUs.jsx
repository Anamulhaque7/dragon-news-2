import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="*:w-full">
            <h2 className="font-semibold mb-3"> Find Us On</h2>

            <div className="join join-vertical">
                <button className="btn  join-item justify-start "><FaFacebook /> Login with Fcebook</button>
                <button className="btn join-item justify-start"><BsTwitter />Login with Twitter</button>
                <button className="btn join-item justify-start"><BsInstagram/>Login with Instagram</button>
            </div>

        </div>
    );
};

export default FindUs;