import React from 'react'
import './App.scss'
import Logo from './images/logo.jpg'
import Teen from './images/teen.jpg'
import Teen2 from './images/teen2.jpg'
import Frame from './images/frame.png'
import Logo3 from './images/bgg-removebg-preview.png'
import { useNavigate } from 'react-router-dom'

function Home() {
  const List = [
    {
      name: 'Culinary',
      tutor: 'Demola	',
    },
    {
      name: 'Nail Techinician',
      tutor: 'Bidemi	',
    },
    {
      name: 'Skin Care',
      tutor: 'Jane	',
    },
    {
      name: 'Learning Instruments',
      tutor: 'Tomiwa/princewil',
    },
    {
      name: 'Fashion Designing',
      tutor: 'Kemah	',
    },
    {
      name: 'Hair Styling',
      tutor: '?',
    },
    {
      name: 'Digital marketing',
      tutor: 'Wale	',
    },
    {
      name: 'Content Writing',
      tutor: 'Gloria	',
    },
    {
      name: 'Public Speaking',
      tutor: 'P mols	',
    },
    {
      name: 'Creatives	',
      tutor: 'P kelechi',
    },
  ]
  const navigate = useNavigate()
  return (
    <div className='App'>
      <div className='hero'>
        <div className='head'>
          <img src={Logo} alt='' className='two' />
          <img src={Teen} alt='' className='one' />
        </div>
        <div className='texts'>
          <div className='cover'>
            <img src={Logo3} alt='' />
            <h1>Unleash Your Faith</h1>
            <p>NAVIGATE CONFRENCE 2023</p>

            <button onClick={() => navigate('/register')}>Register</button>
          </div>
        </div>
      </div>
      <div className='about'>
        <div className='left'>
          <img
            src='https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80'
            alt=''
          />
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
                <h1>Sunday, July 25th</h1>
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
          </div>
        </div>
        <div className='right'>
          <img src={Teen2} alt='' />
        </div>
      </div>
      <div className='vocations'>
        <div className='head'>
          <h1>Vocational Skills available</h1>
        </div>
        <div className='cards'>
          {List.map((item) => (
            <div className='card' key={item.name}>
              <h2>{item.name}</h2>
              <p>by</p>
              <h4>{item.tutor}</h4>
            </div>
          ))}
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

export default Home
