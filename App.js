// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';
import photo4 from './images/photo4.jpg';



function App() {
  return (
    <body>
    <div className="App">
      <img src={photo1} alt="photo1" className="logo"/>
     <Navbar />
     <div className='image-text'>
       <h1>Save time by building <br />
          fast with Boldo Template
       </h1>
       <p> Funding handshake buyer bussiness-to-bussiness metrics ipad partnership. <br />
        First mover advantageinnovator success deployment non-disclosure.</p>

        <div className="button-btn">
        <button className="button1">Buy template</button >
        <button className="button2">Explore</button>
        </div>
          </div>
          <div className="images">
          <img src={photo2} alt="photo2" className="percentage-img"/>
          <img src={photo3} alt="photo3" className="percentage2-img"/>
          <img src={photo4} alt="photo4" className="elicps-img"/>
          </div>
          <div className='footer'>
            <p>Boldo</p>
            <p>Presto</p>
            <p>Boldo</p>
            <p>Presto</p>
            <p>Boldo</p>
            <p>Presto</p>
          </div>
     </div>
     </body>
    
  );
}

export default App;
