import HeroImg from './images/image-hero-mobile.png';
import './section1.css';
import img1 from './images/client-databiz.svg';
import img2 from './images/client-audiophile.svg';
import img3 from './images/client-meet.svg';
import img4 from './images/client-maker.svg';
import heroImgD from './images/image-hero-desktop.png'

function Section1() {
  return (
    <div className='main'>
      <img src= {HeroImg} alt='Hero' className='heroImg'/>
      <div className='main2'>
        <div className='leftsec'>
          <div className='mainC'>
            <h1 className='heroTxt'>Make remote work</h1>
            <p className='heroP'>
                Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
            </p>
            <button className='learn'>
                learn More
            </button>
          </div>
       

          <div className = 'footerLogo'>
            <img src= {img1} alt='Hero' className='footerImg'/>
            <img src= {img2} alt='Hero' className='footerImg'/>
            <img src= {img3} alt='Hero' className='footerImg'/>
            <img src= {img4} alt='Hero' className='footerImg'/>
          </div>
          </div>
          <img src= {heroImgD} alt='Hero' className='heroImgD'/>
      </div>
    </div>
  )
}
export default Section1