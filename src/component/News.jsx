import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import RigthNavbar from "./LayoutComponent/RigthNavbar";

const News = () => {

    const data = useLoaderData();
    const news = data.data[0];
    // console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h1 className="font-semibold mb-3">Dragon News</h1>
                    <div className="card bg-base-100 shadow-lg">
                        <figure>
                            <img
                                src={news?.image_url}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions ">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to Home page</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RigthNavbar></RigthNavbar>
                </aside>
            </main>
        </div>
    );
};

export default News;