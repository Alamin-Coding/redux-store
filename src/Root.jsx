
import { Outlet } from 'react-router'
import Navigation from './components/Navbar'

const Root = () => {
  return (
    <main>
        <Navigation />
        <Outlet />
        <p className="text-center text-gray-600 py-3 shadow">Explore our products and services.</p>
    </main>
  )
}

export default Root