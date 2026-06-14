import React, { useState } from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  const handleNavClick = (slug) => {
    navigate(slug)
    setMenuOpen(false)
  }

  return (
    <header className='py-3 shadow-200 bg-yellow-500 text-black sticky top-0 z-50'>
      <Container>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <div className='mr-4 flex-shrink-0'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          {/* Desktop nav */}
          <ul className='hidden md:flex ml-auto items-center flex-wrap'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-4 py-2 duration-200 text-black hover:bg-blue-100 rounded-full text-sm lg:text-base lg:px-6'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          {/* Mobile hamburger */}
          <button
            className='md:hidden ml-auto p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300'
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label='Toggle menu'
            aria-expanded={menuOpen}
          >
            <span className='block w-6 h-0.5 bg-black mb-1.5'></span>
            <span className='block w-6 h-0.5 bg-black mb-1.5'></span>
            <span className='block w-6 h-0.5 bg-black'></span>
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <ul className='md:hidden flex flex-col mt-2 border-t border-gray-200 pt-2 pb-1'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.slug)}
                    className='w-full text-left px-4 py-2 text-black hover:bg-blue-50 rounded-md text-base'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='px-4 py-1'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        )}
      </Container>
    </header>
  )
}

export default Header
