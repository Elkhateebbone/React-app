import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    const {handleChange , handleSubmit , search} = this.props;

    return (
      <div className='container'>
         <div className='col-10 max-auto col-md-8 mt-5 text-center'>
          <h1 className='text-slanted text-capitalize'>
            
          Search recipes with{" "}
          <strong className='text-orange'>Food2Fork </strong>
          </h1>
          <form className='mt-4'>
            <label htmlFor='search' className='text-capitalize'>
              types recipes sperated by comma
            </label>
            <div className='input-group'>
              <input type='text' name='search' className='form-control form-control-lg' value={search} onChange={handleChange}  placeholder='chicken,onion,carrots'/>
            <div className='input-group-append'>
              <button type='submit'  className='input-group-text bg-primary' onClick={handleSubmit}>
                <i className='fa fa-search' style={{ fontSize: '1rem' }}></i>
              </button>
            </div>
            </div>

          </form>
         </div>
      </div>
    )
  }
}
