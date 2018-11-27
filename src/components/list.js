import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Lists extends Component {
  componentWillMount () {
    var list = JSON.parse(localStorage.getItem('accounts')).slice()

    this.setState({
      mydata: list.pop()
    })
  }
  addamount () {
    let o
    var deposit = this.refs.amount.value
    // console.log(typeof JSON.parse(localStorage.getItem('accounts')))
    var d = JSON.parse(localStorage.getItem('accounts'))

    o = d.pop()

    o['amount'] = parseInt(o.amount) + parseInt(deposit)
    d.push(o)
    localStorage.setItem('accounts', JSON.stringify(d))

    this.setState({
      mydata: o
    })
  }

  removeitem () {
    var remove = JSON.parse(localStorage.getItem('accounts'))
    remove.pop()
    localStorage.setItem('accounts', JSON.stringify(remove))

    this.props.history.push('/accounts')
  }
  state = {
    mydata: {}
  }

  render () {
    var { mydata } = this.state
    return (
      <div className='col-lg-8  offset-lg-2  col-sm-12  offset-sm-0 mt-5 '>
        <h1 className='text-center'>Account details</h1>
        <ul className='list-group list-group-flush'>
          <li
            className='list-group-item'
            style={{
              border: '1px dotted #D3D3D3'
            }}
          >
            Account Name:
            <span
              style={{
                marginLeft: '500px'
              }}
            >
              {mydata.name}
            </span>
          </li>
          <li
            className='list-group-item'
            style={{
              border: '1px dotted #D3D3D3'
            }}
          >
            Account Type:<span
              style={{
                marginLeft: '500px'
              }}
            >
              {mydata.accounttype}
            </span>
          </li>
          <li
            className='list-group-item'
            style={{
              border: '1px dotted #D3D3D3'
            }}
          >
            CreatedAt:<span
              style={{
                marginLeft: '500px'
              }}
            >
              {mydata.time}
            </span>
          </li>
          <li
            className='list-group-item'
            style={{
              border: '1px dotted #D3D3D3'
            }}
          >
            Total Amount<span
              style={{
                marginLeft: '500px'
              }}
            >
              {mydata.amount}
            </span>
          </li>
          <li
            className='list-group-item'
            style={{
              border: '1px dotted #D3D3D3'
            }}
          >

            <button
              type='button'
              class='btn btn-primary btn-sm'
              data-toggle='modal'
              data-target='#exampleModal'
              data-whatever='@mdo'
            >
              Deposit
            </button>
            <button
              type='button'
              class='btn btn-danger btn-sm ml-5'
              onClick={this.removeitem.bind(this)}
            >
              Delete
            </button>
            <button
              type='button'
              class='btn btn-danger btn-sm ml-5'
              onClick={() => {
                var remove = JSON.parse(localStorage.getItem('accounts'))
                var lastitem = remove.pop()
                localStorage.setItem('accounts', JSON.stringify(remove))

                var arr = []
                if (localStorage.getItem('trans')) {
                  arr = JSON.parse(localStorage.getItem('trans'))
                }
                arr.push(lastitem)
                localStorage.setItem('trans', JSON.stringify(arr))

                this.props.history.push('/trans')
              }}
            >
              Transaction
            </button>
          </li>

        </ul>

        <div
          class='modal fade'
          id='exampleModal'
          tabindex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title' id='exampleModalLabel'>
                  Deposit Amount
                </h5>
                <button
                  type='button'
                  class='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div class='modal-body'>
                <form
                  onSubmit={e => {
                    e.preventDefault()
                  }}
                >
                  <div className='form-group row'>
                    <label
                      for='colFormLabel'
                      className='col-sm-2 col-form-label'
                    >
                      Amount:
                    </label>
                    <div className='col-sm-10'>
                      <input
                        type='text'
                        className='form-control'
                        id='colFormLabel '
                        placeholder='Enter total amount to deposit'
                        required
                        ref='amount'
                        style={{
                          borderTop: 'none',
                          borderLeft: 'none',
                          borderRight: 'none',
                          borderBottom: '1px dotted #20B2AA',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-secondary'
                  data-dismiss='modal'
                >
                  Close
                </button>
                <button
                  type='submit'
                  class='btn btn-success'
                  onClick={this.addamount.bind(this)}
                  data-dismiss='modal'
                >
                  Deposit
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Lists
