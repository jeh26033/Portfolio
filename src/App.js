import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import myDumbHead from './pixeljoe2.0.gif' 
import TypedReactDemo from './TypedReactDemo.js'


class App extends Component {
  render() {

    return (

      <div className="App">
        <header className="App-header">
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P|VT323" rel="stylesheet"/>
        </header>
        <div className= "container-fluid">

          <div className= "row">
            <div className= "text-center text col-lg-8 col-md-12 col-sm-12" id="intro">  
              <div className = "row">           
                <h2 className="text-center"> Character Selection:</h2>
                <hr className="hr" />
                <div className="col-md-8 text">
                  <TypedReactDemo strings={['<h1><span id="joe" className="name">Joseph\nHarskamp</span></h1>^200\n`<span>Class: Web Developer</span>`']}/>
                  <hr />                    
                  <h4 class="text-center">Credits: 1 </h4>
                  <div className="col-md-12 row text">
                    <div className="col-md-4 col-sm-12"><a href="https://twitter.com/josephharskamp" rel="noopener noreferrer" target="_blank">Twitter</a></div>                  
                    <div className="col-md-4 col-sm-12"><a href="https://www.linkedin.com/in/joseph-harskamp/" rel="noopener noreferrer" target="_blank">LinkedIn|</a></div>
                    <div className="col-md-4 col-sm-12"><a href="https://github.com/jeh26033" rel="noopener noreferrer" target="_blank">Github</a></div>
                  </div>
                  <hr />
                   <ul id="stats">
                    <li>Class: Web Developer </li>
                    <li>Main Weapon: Keyboard/mouse combo</li>
                    <li>Special move: Hot Pocket Power-up</li>
                    <li>Intelligence: <span class="triple oi oi-star" title="star" aria-hidden="true"></span><span class="triple oi oi-star" title="star" aria-hidden="true"></span><span class="triple oi oi-star" title="star" aria-hidden="true"></span></li>

                    <li>Dexterity: fa("fort-awesome") <span class="double oi oi-star" title="star" aria-hidden="true"></span><span class="double oi oi-star" title="star" aria-hidden="true"></span></li>

                    <li>Endurance: <span class="double oi oi-star" title="star" aria-hidden="true"></span><span class="double oi oi-star" title="star" aria-hidden="true"></span></li>

                    <li>Strength: <span class="double oi oi-star" title="star" aria-hidden="true"></span><span class="double oi oi-star" title="star" aria-hidden="true"></span></li>


                    
                  </ul>
                </div>
                <div className='col-md-4'>
                  <img className=" rounded img-fluid" idName='myBigDumbHead'altName="A pixel portrait" src={myDumbHead}/>
                </div>
              </div>

            <div classsName='col-md-4'></div> {/*bio*/}

          </div> {/*text center*/}
        </div> {/*row*/}
      </div> {/*container*/}
    </div>
      
    ); 
  }
}

export default App;
