import React from 'react';
import './HeaderBlock.css';

function HeaderBlock() {
  return (
    <div>
    <div className='headerBlock' style ={ { backgroundImage: "url('https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop')" } }>
    
      <div className='headerBlock__info'>
        <div className='headerBlock__infoText'>
          <h1>Model S</h1>
          <h4>
            Order Online for <span>Touchless Delivery</span>
          </h4>
        </div>
        <div className='headerBlock__actions'>
          <button className='headerBlock__buttonPrimary'>custom order</button>
          <button className='headerBlock__buttonSecondary'>
            existing inventory
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeaderBlock