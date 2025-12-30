import { useState } from "react";
import { useNavigate } from "react-router";
import {toast} from "react-toastify"
import { registerUser, findUserByEmail } from "../services/Users";
import { Link } from "react-router";
// import { registerUser } from "../services/users";

function Register()
{

    // firstName , lastName , email , password , phoneno , address
    
    // use formData object to maintain the state of the form fields
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: "",
    });
    const [emailError, setEmailError] = useState("");
    const [showPassword , setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [passwordStrength, setPasswordStrength] = useState({
        percent: 0,
        color: "bg-danger"
    });
    
 //   
    const calculatePasswordStrength = (password) => {
        let score = 0;
    
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/\d/.test(password)) score++;
        if (/[@$!%*?&]/.test(password)) score++;
    
        if (score <= 2) {
            return { percent: 20, color: "bg-danger" };
        } else if (score === 3 || score === 4) {
            return { percent: 60, color: "bg-warning" };
        } else {
            return { percent: 100, color: "bg-success" };
        }
    };
    
//
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });

        if(name === "email"){
            const exixtingUser = findUserByEmail(value);
            if(exixtingUser){
                setEmailError("Email alreadty exists");
            }else{
                setEmailError("");
            }
        }
        if(name === "password") {
            setPasswordStrength(calculatePasswordStrength(value));
            setPasswordError(validatePassword(value));
        }
    };
//
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if(passwordError) {
            toast.error(passwordError);
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            // register logic here
            const user = await registerUser(formData)
            toast.success(`User registered as : ${user.firstName}`)
            navigate("/login");
        }
        catch(err) {
            toast.error(err.message)
        }
    };
    
    // password validation 
    const validatePassword = (password) => {
        const passwordRegex = 
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(!passsordRegex.test(password) ){
            return "password must be atleast 8 char & include uppercase & special char"
        }
        return "";
    }

    //UI
    return (
        <div className="container" style={{marginTop:"10%"}}>
        <div className="container d-flex  align-items-center border justify-content-center" style={{width:"50%", height:"500px", boxShadow:"1px 0px 5px"}}>
            <center>
            <center><h2>Register</h2></center>
            <form onSubmit={handleRegister} style={{width: "110%"}} >

                {/* first name */}
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label"></label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="first name"
                        required
                    />
                </div>
            {/* last name */}
                <div className="mb-3">
                    {/* <label htmlFor="lastName" className="form-label">
                        
                    </label> */}
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="last name"
                        
                    />
                </div>
                {/* email */}
                <div className="mb-3">
                    {/* <label htmlFor="email" className="form-label">
                        
                    </label> */}
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email"
                        required
                    />
                    {/* live error message */}
                    <small className="text-danger">{emailError}</small>
                </div>
                {/* password */}
                <div className="mb-3 position-relative">
                    {/* <label htmlFor="password" className="form-label"> </label> */}

                    <input
                        type={showPassword ? "text " : "password"}
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="password"
                    />
                    <span
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer"
                            }}
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </span>
                        
                        <div className="progress mt-1" style={{ height: "6px" }}>
                        <div
                                className={`progress-bar ${passwordStrength.color}`}
                                style={{ width: `${passwordStrength.percent}%` }}
                            ></div>
                        </div>
                    
                </div>
                {/* confirmPassword */}
                <div className="mb-3 position-relative">
                    {/* <label htmlFor="confirmPassword" className="form-label">
                        
                    </label> */}
                    <input
                        type={showPassword ? "text " : "password"}
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="confirm password"
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer"
                        }}>
                        {showPassword ? "🙈" : "👁️"}
                    </span>
                </div>
                
                <div>
                    <p>Already have account ?<Link to="/login" > login here</Link></p>
                </div>

                <button type="submit" 
                        className="btn btn-primary"
                        disabled={emailError !== ""}
                        >
                    Register
                </button>
            </form>
            </center>
        </div>
        </div>
    )
}    

export default Register