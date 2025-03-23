import FindUs from "./FindUs";
import Qzon from "./Qzon";
import SocialLogin from "./SocialLogin";

const RigthNavbar = () => {
    return (
        <div className=" space-y-4">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzon></Qzon>
        </div>
    );
};

export default RigthNavbar;