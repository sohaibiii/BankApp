import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HEAD extends Component {
  state = {}
  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <Link
            className=' ml-5 h1  text-light'
            to='/'
            style={{
              fontSize: '1.4em',
              padding: 'none !important',
              textDecoration: 'none'
            }}
          >
            Bank
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ml-auto mr-5'>
              <Link className='nav-item nav-link text-light ' to='/form'>
                Dashboards <span className='sr-only'>(current)</span>
              </Link>
              <Link className='nav-item nav-link text-light' to='/trans'>
                Transaction
              </Link>
              <Link className='nav-item nav-link text-light' to='/accounts'>
                Accounts
              </Link>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default HEAD
