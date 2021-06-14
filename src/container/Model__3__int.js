import React,{ useState} from 'react';
import './HeaderBlock.css';
import './Header.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'






export function Model_s3() {



  return (
    <div className="model_s">

    <div className='headerBlock' style ={ { backgroundImage: "url('https://tesla-cdn.thron.com/delivery/public/image/tesla/3489a82e-b19c-457a-86a4-7ea9ac91aa1c/bvlatuR/std/1920x1080/lhd-performance-hero-desktop')" } }>
      
    <div className='header__logo' style={{position:"relative",right:"550px",bottom:"40px"}}>
        <Link to='/'>
          <img
            className='header__logoImg'
            src= 'https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
            
          />
        </Link>
      </div>
 



      <div className='headerBlock__info'>
        <div className='headerBlock__infoText'>
          <h1 style={{position:'relative',bottom:'150px'}}>Model 3</h1>
          
        </div>
        <div className='pos'>
        <div className='headerBlock__actions' style={{position:'relative',bottom:'50px'}}>
        <div> <h1 style={{fontSize:'20px',color:"white",position:"relative",bottom:"30px"}}>390 mi<br>
        </br><h2 style={{fontSize:'10px'}}>Range(est.)</h2></h1></div>
       
        <div> <h1 style={{fontSize:'20px',color:"white",position:"relative",bottom:"30px"}}>1.99s<br>
        </br><h2 style={{fontSize:'10px'}}>0-50mph*</h2></h1></div>

        <div> <h1 style={{fontSize:'20px',color:"white",position:"relative",bottom:"30px"}}>200mph<br>
        </br><h2 style={{fontSize:'10px'}}>Top speed</h2></h1></div>

        <div> <h1 style={{fontSize:'20px',color:"white",position:"relative",bottom:"30px"}}>1,020hp<br>
        </br><h2 style={{fontSize:'10px'}}>Peak power</h2></h1></div>

          <button className='headerBlock__buttonPrimary1' style={{fontSize:'10px',color:"black",position:"relative",bottom:"30px"}}>order now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}


export function Model_s31() {


    return (
      <div className="model_s">
      <div className='headerBlock' style ={ { backgroundImage: "url('https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/04/esla-Model-3-new-trim-white.jpg?ssl=1')" } }>
      
        <div className='headerBlock__info'>
          <div className='headerBlock__infoText'>
            <h1 style={{color:"white",position :"relative",top:"-130px"}}>All-New Interior</h1>
          </div>
         
        </div>
      </div>
      </div>
    )
  }

 
  export function Model_s33(){

     const [state,setState] = useState('show')
     const [state1,setState1] = useState('none')
     const [state2,setState2] = useState('none')
     const [state3,setState3] = useState('none')
     const [state4,setState4] = useState('show')
     const [state5,setState5] = useState('none')

    
 




      return(
        <div className="carousel">

        <div  style={{display:"flex"}}>
            <img  style ={{width:"1400px"}} src="https://www.poppr.be/wp-content/uploads/tesla-model-3-virtual.jpg"/>
        </div>
      



        <div  style={{display:"inline-block",backgroundColor:"black",width:"1350px",height:"600px"}}>
            <img  style ={{width:"900px",height:"600px"}} src="https://gaadiwaadi.com/wp-content/uploads/2021/01/2021-Tesla-Model-S-Plaid-interior-rear-seats.jpg"/>
            <h1 style={{fontSize:'20px',position:"relative",bottom:"420px",color:"white",left:'970px'}}>Stay connected
            <br></br>
            <h1 style={{fontSize:'10px',fontWeight:"5px"}}>Multi-device Bluetooth,wireless and USB-C <br></br>charging for every passenger, with enough <br></br>power to fast-charge your tablets and laptop.</h1>
            </h1>
        </div>


        <div style={{display:"inline-block",backgroundColor:"black",width:"1350px",height:"600px",position:"relative",bottom:"150px"}}>
            <img  style ={{width:"900px",height:"600px",position:"relative",left:"500px"}} src="https://cdn.motor1.com/images/mgl/0MnWm/s1/2021-tesla-model-s-plaid.jpg"/>
            <h1 style={{fontSize:'20px',position:"relative",bottom:"360px",color:"white",left:'80px'}}>Your Best Audio System
            <br></br>
            <h1 style={{fontSize:'10px',fontWeight:"5px"}}>Multi-device Bluetooth,wireless and USB-C <br></br>charging for every passenger, with enough <br></br>power to fast-charge your tablets and laptop.</h1>
            </h1>
        </div>

        
     
        <div  style={{position:"relative",bottom:"230px",display:"inline-block",backgroundColor:"black",width:"1350px",height:"600px"}}>
            <img  style ={{width:"900px",height:"600px"}} src="https://cimg1.ibsrv.net/ibimg/hgm/1920x1080-1/100/777/2021-tesla-model-s_100777929.jpg"/>
            <h1 style={{fontSize:'20px',position:"relative",bottom:"420px",color:"white",left:'970px'}}>Better Gaming
            <br></br>
            <h1 style={{fontSize:'10px',fontWeight:"5px"}}>Multi-device Bluetooth,wireless and USB-C <br></br>giving the best gaming experience <br></br>power to fast-charge your tablets and laptop.</h1>
            </h1>
        </div>



        <div  style={{position:"relative",bottom:"900px",display:"inline-block",backgroundColor:"black",width:"1350px",height:"800px"}}>
            <img  style ={{width:"1390px",height:"800px"}} src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b2b118a7-7e86-4e8f-b7af-092f3e64d847/bvlatuR/std/1254x1080/lhd-range-hero-desktop"/>
            <div className='headerBlock__actions' style={{position:"relative",bottom:"430px",left:"300px"}}>
        <div> <h1 style={{fontSize:'20px',color:"white",position:"relative",bottom:"30px"}}>390 mi<br>
        </br><h2 style={{fontSize:'10px'}}>Range(est.)</h2></h1></div>
       
        <div> <h1 style={{fontSize:'20px',color:"white",position:"relative",bottom:"30px"}}>1.99s<br>
        </br><h2 style={{fontSize:'10px'}}>0-50mph*</h2></h1></div>

        <div> <h1 style={{fontSize:'20px',color:"white",position:"relative",bottom:"30px"}}>200mph<br>
        </br><h2 style={{fontSize:'10px'}}>Top speed</h2></h1></div>

        <div> <h1 style={{fontSize:'20px',color:"white",position:"relative",bottom:"30px"}}>1,020hp<br>
        </br><h2 style={{fontSize:'10px'}}>Peak power</h2></h1></div>

          <button className='headerBlock__buttonPrimary1' style={{fontSize:'10px',color:"black",position:"relative",bottom:"30px"}}>order now</button>
          </div>
        </div>

       <div style={{position:"relative",bottom:"1100px"}}>
           <p1 style={{position:"relative",left:"100px"}}>plaid</p1>
           <h1 style={{position:"relative",left:"100px"}}>Beyond Ludicrous</h1>
           <div className='headerBlock__actions' style={{position:"relative",bottom:"230px",left:"100px"}}>
           <button className='headerBlock__buttonPrimary1' style={{fontSize:'10px',color:"black",position:"relative",bottom:"30px"}}>order now</button>
           </div>
        <p1 style={{position:"relative",bottom:"400px",left:"600px"}}>With the longest range and quickest acceleration of any electric vehicle in<br></br> production, Model S Plaid is the highest performing sedan ever built. Both Long <br></br>Range and Plaid powertrains, with updated battery architecture, are capable of<br></br> back-to-back, consistent 1/4 mile runs.</p1>
       </div>


       <div style={{position:'relative',bottom:'1300px'}}>
           <h1 style={{position:'relative',left:'230px'}}>Electric powertrain</h1>
           <p1 style={{position:'relative',left:'230px',fontSize:'16px'}}>Long Range and Plaid platforms unite powertrain and battery technologies for unrivaled performance,<br></br> range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p1>
          <img style={{width:'900px',position:'relative',top:'100px',left:'300px'}} src="https://tesla-cdn.thron.com/delivery/public/image/tesla/3da49427-d22a-4fe1-bc36-3653dc426dfd/bvlatuR/std/1920x900/Model-S-Performance-Tri-Motor-Desktop"></img>
       </div>




       <div>
           <div style={{background:'black',border:'0.1px',position:'relative',bottom:'1100px',height:'5px',width:'400px',left:'300px'}}>
           <h1 style={{fontSize:'20px'}}>Long Range</h1>
           <p1 style={{fontSize:'15px'}}>Dual Motor All-Wheel Drive platform allows for the longest range,and now delivers insane power and acceleration.</p1>
        
           <h1 style={{fontSize:'25px',position:'relative',top:'80px'}}>3.1s</h1><br></br>
           <p1 style={{fontSize:'15px',position:'relative',top:'48px'}}>0-60mph</p1>

           <h1 style={{fontSize:'25px',position:'relative',bottom:'5px',left:'100px'}}>405 mi</h1><br></br>
           <p1 style={{fontSize:'15px',position:'relative',bottom:'37px',left:'100px'}}>range(EPA est)</p1>

           <h1 style={{fontSize:'25px',position:'relative',bottom:'90px',left:'250px'}}>670hp</h1><br></br>
           <p1 style={{fontSize:'15px',position:'relative',bottom:'120px',left:'250px'}}>peak power</p1>
           </div>   
       </div>




       <div>
           <div style={{background:'black',border:'0.1px',position:'relative',bottom:'1106px',height:'5px',width:'400px',left:'800px'}}>
           <h1 style={{fontSize:'20px'}}>Plaid</h1>
           <p1 style={{fontSize:'15px'}}>Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with a carbon-sleeved rotor that maintains peak power output all the way to top speed.</p1>
        
           <h1 style={{fontSize:'25px',position:'relative',top:'30px'}}>1.99s</h1><br></br>
           <p1 style={{fontSize:'15px'}}>0-60mph</p1>

           <h1 style={{fontSize:'25px',position:'relative',bottom:'55px',left:'100px'}}>390 mi</h1><br></br>
           <p1 style={{fontSize:'15px',position:'relative',bottom:'87px',left:'100px'}}>range(EPA est)</p1>

           <h1 style={{fontSize:'25px',position:'relative',bottom:'140px',left:'250px'}}>1,020hp</h1><br></br>
           <p1 style={{fontSize:'15px',position:'relative',bottom:'172px',left:'250px'}}>peak power</p1>
           </div>   
       </div>


  

     
     <div style={{position:'relative',bottom:'700px'}}>
         <img style={{position:'relative',width:'1400px'}} src="https://cdn.vox-cdn.com/thumbor/aJzjfHu0lypLqRpN2BdVIOmWm_A=/0x0:2782x1844/1200x800/filters:focal(1169x700:1613x1144)/cdn.vox-cdn.com/uploads/chorus_image/image/69316556/Screen_Shot_2021_01_27_at_6.50.29_PM.0.png"></img>
         <p1 style={{position:'relative',left:'100px',bottom:'200px',color:'white'}}>performance focused chassis</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <p1  style={{position:'relative',left:'100px',bottom:'200px',color:'white'}}>Lowest-drag car on earth</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <p1  style={{position:'relative',left:'100px',bottom:'200px',color:'white'}}>Refined exterior styling</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <h1 style={{position:'relative',left:'530px',bottom:'300px',color:'white'}}>0.208 cd</h1>
     </div>





     <div style={{position:"relative",bottom:"600px"}}>
           <p1 style={{position:"relative",left:"100px"}}>Exterior</p1>
           <h1 style={{position:"relative",left:"100px"}}>Designed For Efficiency</h1>
           <div className='headerBlock__actions' style={{position:"relative",bottom:"230px",left:"100px"}}>
           <button className='headerBlock__buttonPrimary1' style={{fontSize:'10px',color:"black",position:"relative",bottom:"30px"}}>order now</button>
           </div>
        <p1 style={{position:"relative",bottom:"400px",left:"600px"}}>With the lowest drag coefficient on earth and unmatched efficiency, Model S is built <br></br>for speed and range. Together with a wider body and chassis, these elements help<br></br> you go down the straight or around corners quicker than ever.</p1>
       </div>

 




       <div style={{position:'relative',bottom:'800px',backgroundColor:'black'}}>
           <img style={{position:'relative',width:'900px',height:'500px',left:'500px'}} src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2cf7296e-1bba-40b6-9490-929b47eb50cd/bvlatuR/std/1040x584/MS-Exterior-Grid-B-Desktop"></img>
           <h1 style={{color:'white',position:'relative',bottom:'200px',fontSize:'20px',left:'150px'}}>Responsive performance</h1>
           <p1 style={{color:'white',position:'relative',bottom:'200px',fontSize:'15px',left:'150px'}}>Staggered, performance-focused wheels and tires <br></br>keep the car planted and transfer even more power<br></br> down to the road.</p1>
       
       </div>






       <div style={{position:'relative',bottom:'800px',backgroundColor:'black'}}>
           <img style={{position:'relative',width:'900px',height:'500px',left:'10px'}} src="https://tesla-cdn.thron.com/delivery/public/image/tesla/5207af00-08c6-4b97-83c2-72b82e429977/bvlatuR/std/1040x584/MS-Exterior-Grid-A-Desktop"></img>
           <h1 style={{color:'white',position:'relative',bottom:'400px',fontSize:'20px',left:'1000px'}}>Refined Styling</h1>
           <p1 style={{color:'white',position:'relative',bottom:'400px',fontSize:'15px',left:'1000px'}}>Exterior design combines an iconic look <br></br>with elegant proportions.</p1>
       
       </div>



       <div style={{position:'relative',bottom:'800px',backgroundColor:'black'}}>
           <img style={{position:'relative',width:'900px',height:'500px',left:'450px'}} src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2b807bf9-bd89-46a3-97a3-2fecca31beaf/bvlatuR/std/1040x584/MS-Exterior-Grid-C-Desktop"></img>
           <h1 style={{color:'white',position:'relative',bottom:'400px',fontSize:'20px',left:'100px'}}>Optimized Aerodynamics</h1>
           <p1 style={{color:'white',position:'relative',bottom:'400px',fontSize:'15px',left:'100px'}}>Attention to detail on all exterior <br></br>surfaces makes Model S the most<br></br> aerodynamic production car on Earth..</p1>
       
       </div>


       


       <div style={{position:'relative',bottom:'800px'}}>
           <img style={{width:'1000px'}} src="https://www.topgear.com/sites/default/files/2021/06/0x0-ModelS_04.jpg"></img>
           <h1 style={{position:'relative',bottom:'170px',color:'white',fontSize:'20px',left:'210px'}}>405mi</h1>
           <p1 style={{position:'relative',bottom:'170px',color:'white',fontSize:'15px',left:'150px'}}>Go anywhere with upto 405 miles<br></br>&nbsp;&nbsp; of estimate range on a single<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; charge</p1>
           <h1 style={{position:'relative',bottom:'280px',color:'white',fontSize:'20px',left:'490px'}}>200mi</h1>
           <p1 style={{position:'relative',bottom:'280px',color:'white',fontSize:'15px',left:'450px'}}>supercharge upto 200 miles<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; in 15 minutes</p1>
           <h1 style={{position:'relative',bottom:'360px',color:'white',fontSize:'20px',left:'810px'}}>25,000+</h1>
           <p1 style={{position:'relative',bottom:'360px',color:'white',fontSize:'15px',left:'710px'}}>superchargers placed among popular <br></br>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; routes</p1>
       </div>




       <div style={{position:'relative',left:'1050px',bottom:'1600px'}}>
           <p1>Range</p1>
           <h1>Go Anywhere</h1>
           <p1 style={{fontSize:'15px'}}>Travel farther on a single charge than any<br></br> other electric vehicle—and keep going with <br></br>access to 25,000+ Superchargers globally. By<br></br> combining up to 405 miles of estimated <br></br>range with Tesla fast charging technology,<br></br> you’ll spend less time charging and even <br></br>more time on the road.</p1>
           <div className='headerBlock__actions' style={{position:"relative",bottom:"230px",left:"100px"}}>
           <button className='headerBlock__buttonPrimary1' style={{fontSize:'10px',color:"black",position:"relative",bottom:"30px",right:'100px'}}>order now</button>
           </div>
       
       </div>





     <div style={{position:'relative',bottom:'1700px'}}>
         <img style={{width:'1000px' ,position:'relative',left:'400px'}} src='https://i.pinimg.com/originals/98/ae/7e/98ae7e2d0d9a0a94a03a905b6f4310c0.png'></img>
         <p1 style={{position:'relative',bottom:'600px',right:'974px',fontSize:'20px'}}>Safety</p1>
         <h1 style={{position:'relative',bottom:'600px',fontSize:'30px',left:'20px'}}>High protection</h1>
         <p1 style={{position:'relative',bottom:'600px',fontSize:'15px',left:'20px'}}>Model S is built from the ground up as an<br></br> electric vehicle, with a high-strength<br></br> architecture and floor-mounted battery <br></br>pack for incredible occupant protection <br></br>and low rollover risk. Every Model S <br></br>includes Tesla’s latest active safety <br></br>features, such as Automatic Emergency<br></br> Braking, at no extra cost.</p1>   
     </div>




      <div id = "autopilot" style={{position:'relative',bottom:'1800px'}}>
      <h1 style={{position:'relative',left:'200px'}}>Features</h1>
      <p1 style={{position:'relative',left:'200px',fontSize:'16px'}}>Full Self-Driving Capability introduces additional features and improves existing functionality to make your<br></br> car more capable over time including:</p1>
      <div id = "autopilot" style={{display:state}}>
      <video src="https://tesla-cdn.thron.com/delivery/public/video/tesla/74b8f01e-5020-438b-be44-446e5975c54c/bvlatuR/WEBHD/Model_S_Navigate_0"  controls="controls" autoplay="true"/>
      </div>
      <div id ="autolane" style={{display:state1}}>
      <video src="https://tesla-cdn.thron.com/static/A7I6LP_lane_change_0.mp4-2000_PYSUF4.mp4"  controls="controls" autoplay="true"/>
      </div>
      <div id ="summon" style={{display:state2}}>
      <video src="https://tesla-cdn.thron.com/delivery/public/video/tesla/14877527-9b58-40e9-8a5e-fc47c4afb126/bvlatuR/WEBHD/summon_1"  controls="controls" autoplay="true"/>
      </div>
      <div id ="autopark" style={{display:state3}}>
      <video src="https://tesla-cdn.thron.com/delivery/public/video/tesla/53faf083-f129-4c48-a28f-0f56c8ca5d90/bvlatuR/WEBHD/parking"  controls="controls" autoplay="true"/>
      </div>
      
      </div>
      


      <a href="#autopilot" onClick={()=>{setState(!state);setState3('none');setState2('none');setState1('none')}} style={{textDecoration:"none",color:"black",position:"relative",bottom:"1750px",left:'200px'}}>
          <h1 style={{fontSize:'20px'}}>Navigate on <br></br>Autopilot</h1>
          <p1 style={{fontSize:'15px'}}>Active guidance from<br></br> on-ramp to off-ramp</p1>
      </a>

      <a href="#autopilot" onClick={()=>{setState1(!state1);setState3('none');setState('none');setState2('none')}} style={{textDecoration:"none",color:"black",position:"relative",bottom:"1860px",left:'450px'}}>
          <h1 style={{fontSize:'20px'}}>Auto Lane <br></br>change</h1>
          <p1 style={{fontSize:'15px'}}>Automatically change lanes<br></br> while driving on highway</p1>
      </a>

      <a href="#autopilot" onClick={()=>{setState2(!state2);setState3('none');setState('none');setState1('none')}} style={{textDecoration:"none",color:"black",position:"relative",bottom:"1965px",left:'700px'}}>
          <h1 style={{fontSize:'20px'}}>Summon</h1>
          <p1 style={{fontSize:'15px'}}>Automatically retrieve your car<br></br> car</p1>
      </a>

      <a href="#autopilot" onClick={()=>{setState3(!state3);setState2('none');setState('none');setState1('none')}}  style={{textDecoration:"none",color:"black",position:"relative",bottom:"2045px",left:'1000px'}} >
          <h1 style={{fontSize:'20px'}}>Autopark </h1>
          <p1 style={{fontSize:'15px'}}>Parallel and perpendicular<br></br> parking with a single touch</p1>
      </a>

     
     
     <div style={{backgroundColor:'black',position:'relative',bottom:'1900px',height:'840px'}}>
       <img style={{position:'relative',left:'-200px',width:'1100px'}} src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ea201786-4dec-4ca2-b266-c7a180443853/bvlatuR/std/1440x1080/MS-Specs-Hero-Desktop"></img>
       <h1 style={{color:'white',position:'relative',bottom:'800px',left:'800px'}}>Model 3 &nbsp;
       <p1 style={{color:'white',position:'relative',fontWeight:"normal"}}>Specs</p1></h1>
       <button onClick = {()=>{setState4(!state4);setState5('none')}} style={{position:'relative',bottom:'750px',left:'800px',width:'100px',backgroundColor:'black',color:'white',height:'40px',borderColor:'white',borderRadius:'10px'}}>plaid </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <button onClick = {()=>{setState5(!state5);setState4('none')}}style={{position:'relative',bottom:'750px',left:'800px',width:'100px',backgroundColor:'black',color:'white',height:'40px',borderColor:'white',borderRadius:'10px'}}>long range</button>
       
       <div id= 'plaid' style={{display:state4}}>
      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Range</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>390mi (est).</p1><br></br><br></br>
      

      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>1/4 Mile</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>9.23@155 mph trap speed</p1><br></br><br></br>


      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Peak Power</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>1,020hp</p1><br></br><br></br>


      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Wheels</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>19" or 21"</p1><br></br><br></br>


      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Cargo</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>28 cu ft</p1><br></br><br></br>


      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Weight</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>4,766 lbs</p1><br></br><br></br>
      
      
      <div style={{position:'relative',left:'300px',bottom:'450px'}}>
      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Acceleration</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>4,766 lbs</p1><br></br><br></br>
      
      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Top speed</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>200 mph</p1><br></br>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>†when equipped with the proper<br></br> wheels and tires<br></br> (available fall 2021</p1><br></br><br></br>
      

      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Drag coefficient</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>0.208 Cd</p1><br></br><br></br>
      

      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Power train</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>Tri Motor</p1><br></br><br></br>
      

      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Supercharging Max</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>250 kW</p1><br></br><br></br>

      
      </div>
      </div>



      <div id= 'longrange' style={{display:state5}}>
      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Range</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>405mi (est).</p1><br></br><br></br>
      

      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>1/4 Mile</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>9.23@155 mph trap speed</p1><br></br><br></br>


      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Peak Power</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>670hp</p1><br></br><br></br>


      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Wheels</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>19" or 21"</p1><br></br><br></br>


      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Cargo</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>28 cu ft</p1><br></br><br></br>


      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Weight</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>4,561 lbs</p1><br></br><br></br>
      
      
      <div style={{position:'relative',left:'300px',bottom:'450px'}}>
      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Acceleration</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>3.1s 0-60 mph</p1><br></br><br></br>
      
      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Top speed</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>155 mph</p1><br></br>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>†when equipped with the proper<br></br> wheels and tires<br></br> (available fall 2021</p1><br></br><br></br>
      

      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Drag coefficient</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>0.208 Cd</p1><br></br><br></br>
      

      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Power train</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>Dual Motor</p1><br></br><br></br>
      

      <h1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'16px'}}>Supercharging Max</h1>
      <p1 style={{color:'white',position:'relative',bottom:"700px",left:'800px',fontSize:'14px'}}>250 kW</p1><br></br><br></br>

      
      </div>
      </div>
     </div>
     
     

     <div style={{position:'relative',bottom:'1700px'}}>
       <img style={{width:'1000px',position:'relative',left:'400px'}} src="https://tesla-cdn.thron.com/delivery/public/image/tesla/1c9e3fa8-7eba-4d75-bf00-03a3dbdd6d06/bvlatuR/std/1660x920/MS-Order-Hero-Desktop"></img>
       <h1 style={{position:'relative',bottom:'400px',left:'90px'}}>Model S</h1>
      <a style={{position:'relative',left:'80px',borderColor:'black',border:'4px solid black',padding:'10px',margin:'15px',borderRadius:'20px',width:'40px',bottom:'350px'}}>&nbsp;&nbsp;&nbsp;&nbsp;order now&nbsp;&nbsp;&nbsp;&nbsp;</a>
      <a style={{position:'relative',left:'120px',borderColor:'black',border:'4px solid black',padding:'10px',margin:'15px',borderRadius:'20px',width:'40px',bottom:'350px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;compare &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
     </div>
      




     <div>
       <p1 style={{fontSize:'15px',position:'relative',bottom:'300px',left:'200px'}}>Tesla @ 2021</p1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <p1 style={{fontSize:'15px',position:'relative',bottom:'300px',left:'200px'}}>Privacy and Legal</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <p1 style={{fontSize:'15px',position:'relative',bottom:'300px',left:'200px'}}>contact</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <p1 style={{fontSize:'15px',position:'relative',bottom:'300px',left:'200px'}}>careers</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <p1 style={{fontSize:'15px',position:'relative',bottom:'300px',left:'200px'}}>Newsletters</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <p1 style={{fontSize:'15px',position:'relative',bottom:'300px',left:'200px'}}>News</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <p1 style={{fontSize:'15px',position:'relative',bottom:'300px',left:'200px'}}>Forums</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <p1 style={{fontSize:'15px',position:'relative',bottom:'300px',left:'200px'}}>Location</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </div>
     
    

     
    
    </div>
      );
  }