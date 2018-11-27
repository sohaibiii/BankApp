import React, { Component } from 'react'

class Accounts extends Component {
  componentWillMount () {
    if (localStorage.getItem('accounts')) {
      this.setState({
        account: JSON.parse(localStorage.getItem('accounts'))
      })
    }
  }

  state = {
    account: []
  }

  render () {
    const { account } = this.state
    return (
      <div>
        <table className='table table-hover table-white   col-lg-8 col-sm-12 offset-lg-2 offset-sm-0 mt-3'>
          <thead className='bg-primary'>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Type</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Time</th>
            </tr>
          </thead>
          <tbody>
            {account
              ? account.map(obj => {
                return (
                  <tr>
                    <td>{obj.name}</td>
                    <td>{obj.accounttype}</td>
                    <td>{obj.amount}</td>
                    <td>{obj.time}</td>
                  </tr>
                )
              })
              : <tr>No transactions have been made</tr>}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Accounts
