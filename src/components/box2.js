import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Box2 extends Component {
  componentWillMount () {
    var i = 0
    var t = 0
    if (localStorage.getItem('accounts')) {
      JSON.parse(localStorage.getItem('accounts')).map(d => {
        i = i + 1

        this.setState({
          num: i
        })
      })
    }

    if (localStorage.getItem('trans')) {
      JSON.parse(localStorage.getItem('trans')).map(d => {
        t = t + 1

        this.setState({
          trn: t
        })
      })
    }
  }
  state = {
    num: 0,
    trn: 0
  }
  render () {
    return (
      <div className='container col-sm-12 d-flex justify-content-center mt-3 flex-wrap'>

        <div className='card p-2 col-lg-4 col-sm-12 col-md-5 mr-lg-2 mr-sm-0  text-white bg-dark card border-black'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              borderBottom: '1px solid white',
              paddingBottom: 10
            }}
          >
            <div>
              <span><i class='fas fa-2x fa-user' /></span>
              <span className='ml-3 h3'>Accounts</span>
            </div>
            <div>
              <Link to='/form' class='badge badge-success'>
                <span><i class='fas fa-plus' /></span> Add new account
              </Link>
              <Link to='/accounts' class='badge badge-secondary ml-2'>
                View All
              </Link>
            </div>
          </div>
          <div className='card-body justify-content-center align-items-center d-flex flex-column'>
            <h2>Accounts</h2>
            <h1>
              {this.state.num}
            </h1>
          </div>

        </div>

        <div className='card p-2 col-lg-4 col-sm-12 col-md-5 ml-lg-2 ml-sm-0  text-white bg-dark card border-black'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              borderBottom: '1px solid white',
              paddingBottom: 10
            }}
          >
            <div>
              <span><i class='fas fa-2x fa-money-bill-alt' /></span>
              <span className='ml-3 h3'>Transaction</span>
            </div>
            <div>
              <Link to='/form' class='badge badge-success'>
                <span><i class='fas fa-plus' /></span> Add new account
              </Link>

            </div>
          </div>
          <div className='card-body justify-content-center align-items-center d-flex flex-column'>
            <h2>Transactions</h2>
            <h1>
              {this.state.trn}
            </h1>

          </div>

        </div>

      </div>
    )
  }
}

export default Box2
