import React from 'react';
import './HeaderBlock.css';

export function HeaderBlock2() {
  return (
    <div>
    <div className='headerBlock' style ={ { backgroundImage: "url('https://www.dmarge.com/wp-content/uploads/2021/02/tesla-australia.jpeg')" } }>
    
      <div className='headerBlock__info'>
        <div className='headerBlock__infoText'>
          <h1 >Model 3</h1>
          <h4 >
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



    <div className='headerBlock2' style ={ { backgroundImage: "url('https://gaadiwaadi.com/wp-content/uploads/2020/10/2021-Tesla-Model-3-feature.jpg')" } }>
    
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

export default HeaderBlock2