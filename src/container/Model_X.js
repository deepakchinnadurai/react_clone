import React from 'react';
import './HeaderBlock.css';

export function HeaderBlock3() {
  return (
    <div>
    <div className='headerBlock' style ={ { backgroundImage: "url('https://media.zigcdn.com/media/model/2021/Jan/rear-3-4-left-1206486784_930x620.jpg')" } }>
    
      <div className='headerBlock__info'>
        <div className='headerBlock__infoText'>
          <h1 >Model X</h1>
          <h4 >
            Order Online for <span >Touchless Delivery</span>
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

export default HeaderBlock3