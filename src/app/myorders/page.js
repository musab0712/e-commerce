import NavBar from '@/redux/features/navbar/NavBar'
import UserOrders from '@/redux/features/user/components/UserOrders'
import React from 'react'

export default function MyOrders() {
  return (
    <div>
    <NavBar>
      <h1 className='mx-auto text-2xl'>My Orders</h1>
      <UserOrders/>
    </NavBar>
  </div>
  )
}
