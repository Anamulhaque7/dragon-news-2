import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-300 px-3 py-1 mx-w-[500px]">
            <p className="bg-[#D72050] text-white px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10 ">
                <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, voluptatum! Quibusdam aliquam similique, hic vero voluptatum libero! Est, fuga amet debitis officiis adipisci aperiam ut architecto, distinctio accusamus nam laudantium?</Link>
                <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, voluptatum! Quibusdam aliquam similique, hic vero voluptatum libero! Est, fuga amet debitis officiis adipisci aperiam ut architecto, distinctio accusamus nam laudantium?</Link>
                <Link to='/news'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, voluptatum! Quibusdam aliquam similique, hic vero voluptatum libero! Est, fuga amet debitis officiis adipisci aperiam ut architecto, distinctio accusamus nam laudantium?</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;