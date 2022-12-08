import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Outlet />
            </div>
        </>
    )
}

export default Layout