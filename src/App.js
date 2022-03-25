import image from './imageInSrc.jpg'
import maVideo from './maVideo.mp4'
import './App.css'
function App() {
  return (
    <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

 <h1 className="title_red">Votre nom ici</h1>

 <br/>

 <img src={image} className='imageSrc' alt="imageInSrc" />

 <br/>

 <img src={"/imageInPublic.jpg"} className='imagePub' alt="imageInPublic" />

 <video src={maVideo} className='maVideo' type="video/mp4" alt="maVideo" width="320" height="240" controls />

 </div>
  );
}

export default App;