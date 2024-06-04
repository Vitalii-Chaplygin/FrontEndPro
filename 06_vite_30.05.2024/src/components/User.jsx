// import { Component } from 'react'
// /* eslint-disable no-unused-vars */
// import UserList from './UserList'

// export class User extends Component {

// constructor(props){
//   super(props)
// this.state ={
//   users:data,
//   isUser:false
// }

// }

// componentDidMount(){
//   this.state
// }

//   render() {
//     return (
//       <div>User</div>
//     )
//   }
// }

// export default User

////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'

export class User extends Component {
  
  render() {
   const {name,email,address:{city},company:{name:companyName}}= this.props.person
    return (
      <div className='border my-5'>
      <div>{name}</div>
      <div>{email}</div>
      <div>{city}</div>
      <div>{companyName}</div>
      </div>
    )
  }
}

export default User