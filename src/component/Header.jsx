import moment from "moment/moment";
import logo from "../../assets/logo.png"
const Header = () => {
   

    return (
        <div className="flex flex-col py-2 justify-center  items-center">
            <div className="logo">
                <img className="w-[441px] h-[60px]" src={logo} alt="" />
            </div>
            <h1 className="text-gray-500">Journalism without fear Favour</h1>
            <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;