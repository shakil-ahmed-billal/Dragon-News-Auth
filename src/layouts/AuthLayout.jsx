import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div>
        <p>Auth LayOut</p>
        <div className="">
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default AuthLayout