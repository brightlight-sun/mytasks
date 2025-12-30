import { useContext } from "react"
import { UserContext } from "../App"
import { Link, Outlet } from "react-router"

// Assignment: create Navbar.jsx for Navbar
function Navbar() {
    //const {user} = useContext(UserContext)
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <div className="navbar-nav">
                <Link className="nav-link" to="/user/addtask">Add Task</Link>
                <Link className="nav-link" to="/user/tasks">Task List</Link>
                <Link className="nav-link" to="/logout">Sign Out</Link>
            </div>
        </div>
    </nav>
}

function UserLayout() {
    const {user} = useContext(UserContext)
    return <>
        <Navbar/>
        <div>Hi, {user?.name}</div>
        <hr/>
        <Outlet/>
    </>
}

export default UserLayout
