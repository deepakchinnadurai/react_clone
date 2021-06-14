import React from 'react';
import './HeaderBlock.css';

export function Solar() {
  return (
    <div>
    <div className='headerBlock' style ={ { backgroundImage: "url('https://tesla-cdn.thron.com/delivery/public/image/tesla/a86dcec8-ff70-4ae5-b1b2-d598575698bc/bvlatuR/std/2880x1800/us_homepage_sp_hero_d')" } }>
    
      <div className='headerBlock__info'>
        <div className='headerBlock__infoText'>
          <h1>Lowest Cost Solar Panels In America</h1>
          <h4>
            Money-back guarantee
          </h4>
        </div>
        <div className='headerBlock__actions'>
          <button className='headerBlock__buttonPrimary'>order now</button>
          <button className='headerBlock__buttonSecondary'>
            learn more
          </button>
        </div>
      </div>
    </div>



    <div className='headerBlock2' style ={ { backgroundImage: "url('https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop')" } }>
    
      <div className='headerBlock__info2'>
        <div className='headerBlock__infoText2'>
          <h1>Model Y</h1>
          <h4>
            Order Online for <span>Touchless Delivery</span>
          </h4>
        </div>
        <div className='headerBlock__actions2'>
          <button className='headerBlock__buttonPrimary2'>custom order</button>
          <button className='headerBlock__buttonSecondary2'>
            existing inventory
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Solar