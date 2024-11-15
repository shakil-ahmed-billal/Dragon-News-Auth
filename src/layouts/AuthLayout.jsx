import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AuthLayout = () => {
  return (
    <div className="bg-[#F3F3F3] main-h-screen">
        <nav className="py-5 w-11/12 mx-auto">
            <Navbar></Navbar>
        </nav>
        <div className="">
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default AuthLayout