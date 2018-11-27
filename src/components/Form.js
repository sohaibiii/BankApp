import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import swal from 'sweetalert2'

class Form extends Component {
  state = {}
  refresh (e) {
    e.preventDefault()
  }

  handlesubmit () {
    var accounts = {
      name: this.refs.name.value,
      accounttype: this.refs.type.value,
      amount: this.refs.amount.value,
      time: moment().format('LLL')
    }

    if (
      accounts.name === '' ||
      accounts.accounttype === '' ||
      accounts.amount === ''
    ) {
      swal({
        title: 'Sweet!',
        text: 'Please fill up the form',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: true
      })
      return false
    } else if (
      accounts.accounttype.length > 9 ||
      (accounts.accounttype.toLowerCase() !== 'personal' &&
        accounts.accounttype.toLowerCase() !== 'private')
    ) {
      console.log(accounts.accounttype.toLowerCase())
      swal({
        title: 'Account Type',
        text: 'Account type must be Personal or Private',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: true
      })
      return false
    } else {
      var account = []

      var currentaccounts = localStorage.getItem('accounts')
      if (currentaccounts) {
        account = JSON.parse(currentaccounts)
      }
      account.push(accounts)
      localStorage.setItem('accounts', JSON.stringify(account))
      swal({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: true,
        timer: 1900
      })
      this.props.history.push('/lists')
    }
  }

  render () {
    return (
      <div
        className='main col-lg-8  col-sm-12 offset-lg-2 offset-sm-0 mt-5 p-0 '
        style={{
          border: '1px solid white'
        }}
      >
        <div
          className='h text-center p-2 bg-dark'
          style={{
            border: '1px solid black ',
            color: 'white'
          }}
        >
          <h1>Enter Account Details Below</h1>

        </div>
        <div
          className='f p-2'
          style={{
            border: '1px solid #F5F5F5'
          }}
        >

          <form onSubmit={this.refresh}>
            <div className='form-group row'>
              <label for='colFormLabel' className='col-sm-2 col-form-label'>
                Full Name:
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  id='colFormLabel '
                  placeholder='Enter your full name'
                  ref='name'
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
        <div
          className='s p-2'
          style={{
            border: '1px solid #F5F5F5'
          }}
        >

          <form onSubmit={this.refresh}>
            <div className='form-group row'>
              <label for='colFormLabel' className='col-sm-2 col-form-label'>
                Account Type:
              </label>
              <div className='col-sm-10'>
                <input
                  type='email'
                  className='form-control'
                  id='colFormLabel'
                  placeholder='Enter the Account Type'
                  ref='type'
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
        <div
          className='t p-2'
          style={{
            border: '1px solid #F5F5F5'
          }}
        >

          <form onSubmit={this.refresh}>
            <div className='form-group row'>
              <label for='colFormLabel' className='col-sm-3 col-form-label'>
                Initial Desosit in Rs:
              </label>
              <div className='col-sm-4'>
                <select className='form-control my' ref='amount'>
                  <option value=''>Select</option>
                  <option>1000</option>
                  <option>100000</option>
                  <option>100000</option>
                  <option>1000000</option>
                </select>
              </div>
            </div>
          </form>

        </div>
        <div
          className='f p-2'
          style={{
            border: '1px solid #F5F5F5'
          }}
        >
          <button
            type='submit'
            className='btn btn-primary btn-sm '
            onClick={this.handlesubmit.bind(this)}
          >
            Create Acoount
          </button>
          <button
            type='submit'
            className='btn btn-secondary btn-sm ml-3'
            onClick={() => {
              this.props.history.push('/trans')
            }}
          >
            Transactions
          </button>
        </div>

      </div>
    )
  }
}

export default Form
