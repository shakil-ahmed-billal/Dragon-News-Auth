import { useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"

const Login = () => {
    const {signInUser , setUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    console.log(location);
    const handleSignIn = (event) =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // sign in users section
        signInUser(email , password)
        .then(res =>{
            setUser(res.user)
            navigate(location?.state ? location.state : '/')
        }).catch(error =>{
            alert(error.message);
        })
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="">
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl rounded-none p-10">
                <form onSubmit={handleSignIn} className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Register your Account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Dont have an Account ? <Link className="text-red-500" to={'/auth/signup'}>Register</Link></p>
            </div>
            </div>
        </div>
    )
}

export default Login