import React from 'react';
import './HeaderBlock.css';

export function Accessories() {
  return (
    <div>
    <div className='headerBlock' style ={ { backgroundImage: "url('https://www.cnet.com/a/img/fob8S5lZps8lrFcUk0jZ3WUX_Wg=/940x0/2021/01/27/d6763759-27db-447a-822c-b15e0f31ae98/tesla-model-s-refresh-112.jpg')" } }>
    
      <div className='headerBlock__info'>
        <div className='headerBlock__infoText'>
          <h1 style={{color:"white"}}>Accessories</h1>
          
        </div>
        <div className='headerBlock__actions'>
          <button className='headerBlock__buttonPrimary'>shop now</button>
         
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

export default Accessories