import { Link, useLocation } from 'react-router-dom'

const navItems = [
  {
    label: 'Map',
    path: '/',
    icon: '🗺️'
  },
  {
    label: 'Explore',
    path: '/explore',
    icon: '🔍'
  },
  {
    label: 'Community',
    path: '/community',
    icon: '👥'
  },
  {
    label: 'Profile',
    path: '/profile',
    icon: '⚙️'
  }
]

function BottomNavigation() {
  const location = useLocation()

  return (
    <nav className="bottom-navigation">
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          className={
            location.pathname === item.path
              ? 'bottom-nav-item bottom-nav-item-active'
              : 'bottom-nav-item'
          }
        >
          <span>{item.icon}</span>
          <small>{item.label}</small>
        </Link>
      ))}
    </nav>
  )
}

export default BottomNavigation