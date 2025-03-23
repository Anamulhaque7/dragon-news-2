import qzon1 from "../../../assets/swimming.png"
import qzon2 from "../../../assets/class.png"
import qzon3 from "../../../assets/playground.png"
import bg4 from "../../../assets/bg.png"
const Qzon = () => {
    return (
        <div>
            <div className="bg-gray-300 rounded-sm  ">
                <h2 className="font-semibold text-[25px]">Q-Zone</h2>
                <div className=" justify-items-center py-7 mx-auto ">
                    <img src={qzon1} alt="" />
                    <img src={qzon2} alt="" />
                    <img src={qzon3} alt="" />
                </div>
            </div>
            <div className="mt-2 ">
                <img className="w-full rounded-sm" src={bg4} alt="" />
            </div>
        </div>
    );
};

export default Qzon;