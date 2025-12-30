import { Link } from "react-router";

const Dashboard = () => {
    return <div>

<div className="container my-5">
            <center><h3>Products</h3></center>

            <ul className="d-flex justify-content-between nav ">
                <div>
                    <li className="nav-item"></li>
                </div>


                <div className="d-flex ">
                    {/* show all */}
                    <li className="nav-item">
                        <Link to="/user/displayQuotes" className="nav-link text-black fw-semibold">
                            All
                        </Link>
                    </li>

                    {/* only favs */}
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-black fw-semibold">
                            Favorites
                        </Link>
                    </li>
                </div>
            </ul>

           {/* products to display */}
           {/* <DisplayProducts/> */}
        </div>
    </div>
}

export default Dashboard