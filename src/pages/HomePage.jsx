import React from 'react'
import {Link} from 'react-router-dom'
 import MainLayout from '../layouts/MainLayout'

function HomePage() {
  return (
    <MainLayout>
      <div className='container mt-3 bg-light'>
        <h2>Welcome to the simple POS for small business</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolore omnis, ullam, dolores modi deserunt atque fugiat nulla delectus!</p>
        <p>If you have an issue,  call 443-444-xxxx anytime</p>
        <Link to='/pos' className='btn btn-primary'>Click Here</Link>
      </div>
    </MainLayout>
  )
}

export default HomePage 