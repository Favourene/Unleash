import './App.scss'
import Logo from './images/logo.jpg'
import Teen from './images/teen.jpg'
import Teen2 from './images/teen2.jpg'
import Unleash from './images/unleash.jpg'
import Frame from './images/frame.png'

function App() {
  return (
    <div className='App'>
      <div className='hero'>
        <div className='head'>
          <img src={Logo} alt='' className='two' />
          <img src={Teen} alt='' className='one' />
        </div>
        <div className='texts'>
          <div className='cover'>
            <h1>Unleash Your Faith</h1>
            <p>NAVIGATE CONFRENCE 2023</p>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSe0eIjJeTMydoL2PyKKzHYQ20dAIONVa8_n8jAqVZDQOzyLHw/viewform'
              target='_blank'
              rel='noreferrer'
            >
              <button>RSVP</button>
            </a>
          </div>
        </div>
      </div>
      <div className='about'>
        <div className='left'>
          <img src={Unleash} alt='' />
        </div>
        <div className='right'>
          <h1>About Navigate</h1>
          <p>
            The Navigate Conference is the Elevation Church’s (TEC) annual
            conference organized to make spiritual, emotional and mental
            investments in the teenage demography, teaching them life and
            vocational skills. The programme is designed to address the
            developmental gap within the teenage community. The conference
            addresses key issues like self-concept/esteem, leadership, nation
            building and personal & group productivity in addition to skill
            development sessions that give participants the opportunity to learn
            a new skill.
          </p>
        </div>
      </div>
      <div className='locat'>
        <div className='left'>
          <div>
            <div className='cover'>
              <div className='one'>
                <h1>Monday, July 24th</h1>
                <div className='linee'>
                  <div className='line'></div>
                </div>
                <h1>Friday, July 28th</h1>
              </div>
              <div className='two'>
                <h1>2</h1>
                <h1>0</h1>
                <h1>2</h1>
                <h1>3</h1>
              </div>
            </div>
            <div className='time'>
              <h1>8am - 4pm</h1>
            </div>
            <div className='time'>
              <h1>at Elevation church, Lekki.</h1>
            </div>
          </div>
        </div>
        <div className='right'>
          <img src={Teen2} alt='' />
        </div>
      </div>
      <div className='rsvp'>
        <div className='cover'>
          <div className='rs'>
            <h1>RS</h1>
          </div>
          <div className='content'>
            <p>Let us know you'll be there</p>
            <img src={Frame} alt='' />
          </div>
          <div className='vp'>
            <h1>VP</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
