import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { findUserByCredentials } from "../services/Users";
import { UserContext } from "../App";


function Login (){
    const [formData, setFormData] = useState({
        email :"",
        password: "",
    })
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext)
    const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };




    const handleLogin = async (e) => {
    e.preventDefault(); // prevent submission of html form
    try {
        const cred = {email : formData.email , password: formData.password}
        
        const user = findUserByCredentials(cred)
        setUser(user)
        navigate('/user/dashboard')

        // store token in sessionStorage
            sessionStorage.setItem("token", user.token)
            sessionStorage.setItem("user" , JSON.stringify(user))

    }
    catch(err) {
        toast.error(err.message)
    }
};

return (<div>
 <div className="container h-100px " style={{marginTop:"15%"}}>
        <div className="container d-flex flex-column align-items-center border justify-content-md-center" style={{width:"30%", height:"340px", boxShadow:"2px 0px 5px"}}>
<center>
            <h2 >Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"> </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"></label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="password"
                    />
                </div>
                <div>
                    <p>Dont have Account ?<Link to="/register" > register here</Link> </p>
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign In
                </button>
            </form>
            </center>
        </div>
        </div>


    </div> );

}

export default Login