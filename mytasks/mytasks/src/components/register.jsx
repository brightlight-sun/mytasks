// name of a react comoponent always starts with capital letter
import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { registerUser } from "../services/users"

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value })

    const handleOnClick = () => {
        const userInfo = formData
        // create function in js to handle submit
        registerUser(userInfo)
        toast.success("User Registered as"+ userInfo.name  )
        navigate('/login')
        
    }

    return <div className="container d-flex justify-content-center" style={{ width: "100%", height: "300px " }}>

        <div className="container d-flex flex-column justify-content-around align-items-center border border-1 shadow " style={{ width: "500px", height: "120%", marginTop: "90px" }}>

            <h3>Registration</h3>
            <table className="form-group d-flex flex-column ">
                <tbody>
                    <tr className='form-group mb-3'>
                        <td ><label htmlFor="name"></label></td>
                        <td><input type="text" id="name" placeholder="enter your name" className="form-control" onChange={handleChange} /></td>
                    </tr>
                    <tr className='form-group mb-3'>
                        <td><label htmlFor="email"></label></td>
                        <td><input type="email" id="email" placeholder="enter your email" className="form-control" onChange={handleChange} /></td>
                    </tr>
                    <tr className='form-group mb-1'>
                        <td><label htmlFor="password"></label></td>
                        <td><input type="password" id="password" placeholder="enter your password" className="form-control" onChange={handleChange} /></td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-success" onClick={handleOnClick}>Register</button>
        </div>
    </div>
}

export default Register