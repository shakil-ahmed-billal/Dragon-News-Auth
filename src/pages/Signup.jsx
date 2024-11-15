import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const Signup = () => {

    const {createUser , setUser}  = useContext(AuthContext)

    const handleForm = (event) =>{
        event.preventDefault()

        const form = new FormData(event.target)
        const name = form.get('name')
        const photoUrl = form.get('photoUrl')
        const email = form.get('email')
        const password = form.get('password')


        // create a new users
        createUser(email , password)
        .then(res => {
            console.log(res.user);
            setUser(res.user)
        }).catch(error=>{
            console.log(console.log(error.message));
        })

    }

  return (
    <div className="min-h-screen flex justify-center ">
            <div className="">
            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl rounded-none p-10">
                <form onSubmit={handleForm} className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Register your Account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name'
                        placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Allready have an Account ? <Link className="text-red-500" to={'/auth/login'}>Lig in</Link></p>
            </div>
            </div>
        </div>
  )
}

export default Signup