import { AiFillStar } from "react-icons/ai";
import { FaBookmark, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    return (
        <div className="max-w-md mt-4 bg-white mx-auto rounded-lg shadow-md">

            <div className="flex justify-between  bg-gray-200">
                <div className="flex items-center mb-4 ">
                    <img src={news.author.img} alt="" className="w-10 h-10 rounded-full mr-3 " />
                    <div>
                        <p className="font-semibold">{news.author.name}</p>
                        <p className="text-sm text-gray-500">{news.author.published_date}</p>
                    </div>
                </div>

                <div className="ml-auto flex items-center space-x-4 mr-3">
                    <FaBookmark></FaBookmark>
                    <FaShareAlt className="text-gray-600"></FaShareAlt>
                </div>
            </div>
            <div className="p-4">
                <h2 className="font-semibold text-[20px]">{news.title}</h2>
                <div>
                    <img src={news.image_url} alt="" />
                </div>
                <p>
                    {news.details.slice(0, 150)}...{""}
                    <Link to={`/news/${news._id}`} className="text-primary">Read More</Link>
                </p>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <AiFillStar key={i} className={`text-yellow-500${i < Math.round(news.rating.number) ? "" : "opacity"
                                }`}>

                            </AiFillStar>
                        ))}
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaEye />
                        <p>{news.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;