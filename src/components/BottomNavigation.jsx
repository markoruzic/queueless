import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiSearch, FiUsers, FiSettings } from 'react-icons/fi'

const navItems = [
  {
    label: 'Home',
    path: '/',
    icon: FiHome
  },
  {
    label: 'Explore',
    path: '/explore',
    icon: FiSearch
  },
  {
    label: 'Community',
    path: '/community',
    icon: FiUsers
  },
  {
    label: 'Profile',
    path: '/profile',
    icon: FiSettings
  }
]

function BottomNavigation() {
  const location = useLocation()

  return (
    <nav className="bottom-navigation">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = location.pathname === item.path

        return (
          <Link
  key={item.label}
  to={item.path}
  className={
    location.pathname === item.path
      ? 'bottom-nav-item bottom-nav-item-active'
      : 'bottom-nav-item'
  }
>
  <Icon size={20} />
  <small>{item.label}</small>
</Link>
        )
      })}
    </nav>
  )
}

export default BottomNavigation