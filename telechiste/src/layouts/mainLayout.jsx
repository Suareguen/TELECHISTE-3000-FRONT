import { Outlet } from "react-router-dom"

function Root() {
  return (
    <div>
        <h1>Header</h1>
        <Outlet />
        <h2>jkzsfbzs</h2>
        <h1>Footer</h1>
    </div>
  )
}

export default Root