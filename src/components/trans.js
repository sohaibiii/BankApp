import React, { Component } from 'react'

class Trans extends Component {
  componentWillMount () {
    var arr = []
    if (localStorage.getItem('trans')) {
      arr = JSON.parse(localStorage.getItem('trans'))
    }

    this.setState({
      trans: arr
    })
  }
  state = {
    trans: []
  }
  render () {
    var { trans } = this.state
    console.log(trans)
    return (
      <div>
        <h1 className='text-center mt-3 mb-0 bg-light col-lg-8 col-sm-12 offset-lg-2 offset-sm-0'>
          Transactions
        </h1>
        <table className='table table-hover table-white   col-lg-8 col-sm-12 offset-lg-2 offset-sm-0'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Account Type</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Transacted At</th>
            </tr>
          </thead>
          <tbody>
            {trans
              ? trans.map(obj => {
                return (
                  <tr>
                    <td>{obj.name}</td>
                    <td>{obj.accounttype}</td>
                    <td>{obj.amount}</td>
                    <td>{obj.time}</td>
                  </tr>
                )
              })
              : <tr><h2>No transactions have been made yet</h2></tr>}

          </tbody>
        </table>
      </div>
    )
  }
}

export default Trans
