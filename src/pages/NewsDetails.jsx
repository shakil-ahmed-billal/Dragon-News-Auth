import { Link, useLoaderData } from "react-router-dom"
import Header from "../components/Header"
import RightNav from "../components/layout-component/RightNav"

const NewsDetails = () => {

    const data = useLoaderData()
    const {category_id , details , image_url , title} = data.data[0] || {}


    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-5 ">
                <section className="col-span-9">
                    {/* details card section */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-5 pt-5">
                            <img
                                src={image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${category_id}`} className="btn btn-primary">Back to Category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    )
}

export default NewsDetails