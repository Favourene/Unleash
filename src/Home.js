import React from 'react'
import './App.scss'
import Logo from './images/logo.jpg'
import Teen from './images/teen.jpg'
import Teen2 from './images/teen2.jpg'
import Frame from './images/frame.png'
import Logo3 from './images/bgg.png'
import { useNavigate } from 'react-router-dom'

function Home() {
  const List = [
    {
      name: 'Culinary',
      image:
        'https://cpe.kennesaw.edu/wp-content/uploads/2021/07/Culinary-2.jpg',
    },
    {
      name: 'Nail Techinician',
      image:
        'https://static.wixstatic.com/media/0573f2_8a33e18c999e4d2e989c7c35e78378c7~mv2.png/v1/fill/w_740,h_493,al_c,q_90/0573f2_8a33e18c999e4d2e989c7c35e78378c7~mv2.png',
    },
    {
      name: 'Skin Care',
      image:
        'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_20/1435573/overdoing-skincare-today-main-190509.jpg',
    },
    {
      name: 'Learning Instruments',
      image:
        'https://img.freepik.com/premium-vector/graphic-colorful-treble-clef-paint-white-background-vector-file_638392-27.jpg?w=360',
    },
    {
      name: 'Fashion Designing',
      image:
        'https://d92mrp7hetgfk.cloudfront.net/images/sites/H2B/Fashion-Designer/original.jpg?1532640552',
    },
    {
      name: 'Hair Styling',
      image:
        'https://heygoldie.com/blog/wp-content/uploads/2022/02/hair-salon-tools-kit.jpg',
    },
    {
      name: 'Digital marketing',
      image:
        'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg',
    },
    {
      name: 'Content Writing',
      image: 'https://contentwriters.com/blog/wp-content/uploads/PPC2018.jpg',
    },
    {
      name: 'Public Speaking',
      image:
        'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/student%201_0.png.jpg?itok=OGKnNwNN',
    },
    {
      name: 'Creatives',
      image:
        'https://pittnews.com/wp-content/uploads/2022/10/dance-is-a-sport.jpg',
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
            <h1>We know God, We Love God and we Serve God</h1>
            <p>NAVIGATE CONFRENCE 2023</p>

            <button onClick={() => navigate('/register')}>Register</button>
          </div>
        </div>
      </div>
      <div className='covers'>
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
              development sessions that give participants the opportunity to
              learn a new skill.
            </p>
            <p>
              <b> Scripture: Judges 15: 4-5</b> Samson then went out and caught
              three hundred jackals. He lashed the jackals’ tails together in
              pairs and tied a torch between each pair of tails. He then set
              fire to the torches and let them loose in the Philistine fields of
              ripe grain. Everything burned, both stacked and standing grain,
              vineyards and olive orchards—everything.
            </p>
          </div>
        </div>
        {/* <div className='locat'>
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
        </div> */}
        <div className='vocations'>
          <div className='head'>
            <h1>Vocational Skills available</h1>
          </div>
          <div className='cards'>
            {List.map((item) => (
              <div className='card' key={item.name}>
                <div className='img'>
                  <img src={item.image} alt='' />
                </div>
                <h2>{item.name}</h2>
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
      <div className='footer'>
        <div className='footer-covers'>
          <div className='top'>
            <h1>Stay in touch</h1>
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
