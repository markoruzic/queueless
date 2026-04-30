import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiSearch, FiUsers, FiSettings } from 'react-icons/fi'

const navItems = [
  {
    label: 'Mapa',
    path: '/',
    icon: FiHome
  },
  {
    label: 'Istraži',
    path: '/explore',
    icon: FiSearch
  },
  {
    label: 'Zajednica',
    path: '/community',
    icon: FiUsers
  },
  {
    label: 'Profil',
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
              isActive
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