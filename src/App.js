import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './container/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Menu from './container/Menu'
import HeaderBlock from './container/HeaderBlock'
import {HeaderBlock1} from './container/Model_y'
import {HeaderBlock2} from './container/Model_3'
import {HeaderBlock3} from './container/Model_X'
import {Solar} from './container/Solar'
import {Roofs} from './container/Roofs'
import Login from './container/Login'
import {Accessories}  from './container/Accessories'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './container/features/userSlice'
import Signup from './container/Signup'
import TeslaAccount from './container/TeslaAccount'
import { auth } from './container/firebase'
import {Model_y} from './container/Model_y'
import {Model_s,Model_s1,Model_s2} from './container/Model__S__int'
import {Model_s31,Model_s3,Model_s33} from './container/Model__3__int'


function App() {
  const user = useSelector(selectUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>
          <Route exact path='/login'>
            {user ? <Redirect to='/teslaaccount' /> : <Login />}
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/teslaaccount'>
            {!user ? (
              <Redirect to='/login' />
            ) : (
              <>
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}
          </Route>
        </Switch>
      </div>

    


      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <HeaderBlock1 />
          </Route>
        </Switch>
      </div>


     

      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <HeaderBlock2 />
          </Route>
        </Switch>
      </div>




      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <HeaderBlock3 />
          </Route>
        </Switch>
      </div>




      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Solar />
          </Route>
        </Switch>
      </div>


      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Roofs />
          </Route>
        </Switch>
      </div>



      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Accessories />
          </Route>
        </Switch>
      </div>




      <div className='app1'>
        <Switch>
          <Route exact path='/model_s'>
            <Model_s />
            
          </Route>
        </Switch>
      </div>


      <div className='app2'>
        <Switch>
          <Route exact path='/model_s'>
            <Model_s1 />
           
          </Route>
        </Switch>
      </div>



      <div className='app2'>
        <Switch>
          <Route exact path='/model_s'>
            <Model_s2 />
           
          </Route>
        </Switch>
      </div>





      <div className='app3'>
        <Switch>
          <Route exact path='/model_s3'>
            <Model_s3 />
            
          </Route>
        </Switch>
      </div>


      <div className='app3'>
        <Switch>
          <Route exact path='/model_s3'>
            <Model_s31 />
           
          </Route>
        </Switch>
      </div>



      <div className='app3'>
        <Switch>
          <Route exact path='/model_s3'>
            <Model_s33 />
           
          </Route>
        </Switch>
      </div>


      </Router>

    </Router>
  )
}

export default App