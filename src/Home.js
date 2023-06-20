import React, { useState, useEffect } from 'react'
import './App.scss'
import Logo from './images/logo.jpg'
import Teen from './images/teen.jpg'
import Teen2 from './images/teen2.jpg'
import Frame from './images/frame.png'
import Logo3 from './images/bgg.png'
import img1 from './images/one (1).jpg'
import img2 from './images/one (2).jpg'
import img3 from './images/one (3).jpg'
import img4 from './images/one (4).jpg'
import img5 from './images/one (5).jpg'
import img6 from './images/one (6).jpg'
import img7 from './images/one (7).jpg'
import img8 from './images/one (8).jpg'
import img9 from './images/one (9).jpg'
import img10 from './images/one (10).jpg'
import img11 from './images/one (11).jpg'
import img12 from './images/one (12).jpg'
import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
  FaBed,
  FaHandHoldingHeart,
  FaHandshake,
  FaPray,
  FaDumbbell,
  FaPeopleArrows,
  FaTools,
  FaShower,
  FaPlaneArrival,
  FaChurch,
  FaQuestion,
} from 'react-icons/fa'
import {
  MdFastfood,
  MdOutlineFreeBreakfast,
  MdDinnerDining,
  MdNightsStay,
  MdOutlineCleaningServices,
  MdBathtub,
  MdFreeBreakfast,
  MdSportsBasketball,
} from 'react-icons/md'
import {
  BsLightbulbOffFill,
  BsFillBookFill,
  BsFillChatFill,
  BsMicFill,
} from 'react-icons/bs'
import {
  GiPopcorn,
  GiDiscussion,
  GiPrayer,
  GiCampCookingPot,
  GiPartyFlags,
} from 'react-icons/gi'
import { GoLaw } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
  const schedule = [
    {
      day: 'SUNDAY',
      date: '23rd July 2023',
      content: [
        {
          content: 'Welcome/ Registration/ Settling in',
          icon: FaHandHoldingHeart,
          time: '8.00 am ‐ 12.00 pm',
        },
        {
          content: 'Cluster bonding',
          icon: FaHandshake,
          time: '12.00 pm ‐ 2.00 pm',
        },
        {
          content: 'Lunch',
          icon: MdFastfood,
          time: '2.00 pm ‐ 3.00 pm',
        },
        {
          content: 'Siesta',
          icon: MdOutlineFreeBreakfast,
          time: '3.00 pm ‐ 3.50 pm',
        },
        {
          content: 'Cluster bonding',
          icon: FaHandshake,
          time: '4.00 pm ‐ 6.00 pm',
        },
        {
          content: 'Dinner',
          icon: MdDinnerDining,
          time: '6.00 pm ‐ 7.00 pm',
        },
        {
          content: 'Opening night',
          icon: MdNightsStay,
          time: '7.00pm ‐ 10.00 pm',
        },
        {
          content: 'Prayers',
          icon: FaPray,
          time: '10.00 pm ‐ 10.15 pm',
        },
        {
          content: 'Lights out',
          icon: BsLightbulbOffFill,
          time: '10.30',
        },
      ],
    },
    {
      day: 'MONDAY',
      date: '24th July 2023',
      content: [
        {
          content: 'Wake up',
          icon: FaBed,
          time: '5.30am',
        },
        {
          content: 'Aerobics',
          icon: FaDumbbell,
          time: '6.00 am ‐6.30 am',
        },
        {
          content: 'Group Devotion',
          icon: FaPeopleArrows,
          time: '6.35 am ‐ 7.10 am',
        },
        {
          content: 'Chores',
          icon: MdOutlineCleaningServices,
          time: '7.10 am ‐ 7.30 am',
        },
        {
          content: 'Bath/Dress up',
          icon: MdBathtub,
          time: '7.30 am ‐ 8.30 am',
        },
        {
          content: 'Breakfast',
          icon: MdFreeBreakfast,
          time: '8.30 am ‐ 9.30 am',
        },
        {
          content: 'Beyond Success',
          icon: BsFillBookFill,
          time: '10.00 am ‐ 11.00 am',
        },
        {
          content: 'Chat Forums',
          icon: BsFillChatFill,
          time: '11.00 am ‐ 12.00 pm',
        },
        {
          content: 'Vocational Classes',
          icon: FaTools,
          time: '12:00 pm - 2:00 pm',
        },
        {
          content: 'Lunch',
          icon: MdFastfood,
          time: '2.00 pm ‐ 3.00 pm',
        },
        {
          content: 'Siesta',
          icon: MdOutlineFreeBreakfast,
          time: '3.00 pm ‐ 3.50 pm',
        },
        {
          content: 'Sports',
          icon: MdSportsBasketball,
          time: '4.00 pm ‐ 6.00 pm',
        },
        {
          content: 'Refresh',
          icon: FaShower,
          time: '6.00 pm ‐ 7.00 pm',
        },
        {
          content: 'Dinner',
          icon: MdDinnerDining,
          time: '7.00 pm ‐ 8.00 pm',
        },
        {
          content: 'Open Mic',
          icon: BsMicFill,
          time: '8.10 pm ‐ 10.00 pm',
        },
        {
          content: 'Prayers',
          icon: FaPray,
          time: '10.00 pm ‐ 10.15 pm',
        },
        {
          content: 'Lights out',
          icon: BsLightbulbOffFill,
          time: '10.30 pm',
        },
      ],
    },
    {
      day: 'TUESDAY',
      date: '25th July 2023',
      content: [
        {
          content: 'Wake up',
          icon: FaBed,
          time: '5.30am',
        },
        {
          content: 'Aerobics',
          icon: FaDumbbell,
          time: '6.00 am ‐6.30 am',
        },
        {
          content: 'Group Devotion',
          icon: FaPeopleArrows,
          time: '6.35 am ‐ 7.10 am',
        },
        {
          content: 'Chores',
          icon: MdOutlineCleaningServices,
          time: '7.10 am ‐ 7.30 am',
        },
        {
          content: 'Bath/Dress up',
          icon: MdBathtub,
          time: '7.30 am ‐ 8.30 am',
        },
        {
          content: 'Breakfast',
          icon: MdFreeBreakfast,
          time: '8.30 am ‐ 9.30 am',
        },
        {
          content: 'Beyond Success',
          icon: BsFillBookFill,
          time: '10.00 am ‐ 11.00 am',
        },
        {
          content: 'Chat Forums',
          icon: BsFillChatFill,
          time: '11.00 am ‐ 12.00 pm',
        },
        {
          content: 'Vocational Classes',
          icon: FaTools,
          time: '12:00 pm - 2:00 pm',
        },
        {
          content: 'Lunch',
          icon: MdFastfood,
          time: '2.00 pm ‐ 3.00 pm',
        },
        {
          content: 'Siesta',
          icon: MdOutlineFreeBreakfast,
          time: '3.00 pm ‐ 3.50 pm',
        },
        {
          content: 'Sports',
          icon: MdSportsBasketball,
          time: '4.00 pm ‐ 6.00 pm',
        },
        {
          content: 'Refresh',
          icon: FaShower,
          time: '6.00 pm ‐ 7.00 pm',
        },
        {
          content: 'Dinner',
          icon: MdDinnerDining,
          time: '7.00 pm ‐ 8.00 pm',
        },
        {
          content: 'Movie Night',
          icon: GiPopcorn,
          time: '8.10 pm ‐ 10.00 pm',
        },
        {
          content: 'Prayers',
          icon: FaPray,
          time: '10.00 pm ‐ 10.15 pm',
        },
        {
          content: 'Lights out',
          icon: BsLightbulbOffFill,
          time: '10.30 pm',
        },
      ],
    },
    {
      day: 'WEDNESDAY',
      date: '26th July 2023',
      content: [
        {
          content: 'Wake up',
          icon: FaBed,
          time: '5.30am',
        },
        {
          content: 'Aerobics',
          icon: FaDumbbell,
          time: '6.00 am ‐6.30 am',
        },
        {
          content: 'Group Devotion',
          icon: FaPeopleArrows,
          time: '6.35 am ‐ 7.10 am',
        },
        {
          content: 'Chores',
          icon: MdOutlineCleaningServices,
          time: '7.10 am ‐ 7.30 am',
        },
        {
          content: 'Bath/Dress up',
          icon: MdBathtub,
          time: '7.30 am ‐ 8.30 am',
        },
        {
          content: 'Panel Sessions/Finance 101',
          icon: GiDiscussion,
          time: '8.30 am ‐ 9.30 am',
        },
        {
          content: 'Beyond Success',
          icon: BsFillBookFill,
          time: '10.00 am ‐ 11.00 am',
        },
        {
          content: 'Chat Forums',
          icon: BsFillChatFill,
          time: '11.00 am ‐ 1.00 pm',
        },
        {
          content: 'Personal time with God',
          icon: GiPrayer,
          time: '1:00 pm - 2:00 pm',
        },
        {
          content: 'Big Lunch',
          icon: MdFastfood,
          time: '2.00 pm ‐ 3.00 pm',
        },
        {
          content: 'Siesta',
          icon: MdOutlineFreeBreakfast,
          time: '3.00 pm ‐ 3.50 pm',
        },
        {
          content: 'Sports/Team Bonding',
          icon: MdSportsBasketball,
          time: '4.00 pm ‐ 6.00 pm',
        },
        {
          content: 'Refresh',
          icon: FaShower,
          time: '6.00 pm ‐ 7.00 pm',
        },
        {
          content: 'Arrivals/Prep',
          icon: FaPlaneArrival,
          time: '7.00 pm ‐ 7.30 pm',
        },
        {
          content: 'BBQ/Festival Night',
          icon: GiCampCookingPot,
          time: '7.3  0 pm ‐ 10.00 pm',
        },
        {
          content: 'Prayers',
          icon: FaPray,
          time: '10.00 pm ‐ 10.15 pm',
        },
        {
          content: 'Lights out',
          icon: BsLightbulbOffFill,
          time: '10.30 pm',
        },
      ],
    },
    {
      day: 'THURSDAY',
      date: '27th July 2023',
      content: [
        {
          content: 'Wake up',
          icon: FaBed,
          time: '5.30am',
        },
        {
          content: 'Aerobics',
          icon: FaDumbbell,
          time: '6.00 am ‐6.30 am',
        },
        {
          content: 'Group Devotion',
          icon: FaPeopleArrows,
          time: '6.35 am ‐ 7.10 am',
        },
        {
          content: 'Chores',
          icon: MdOutlineCleaningServices,
          time: '7.10 am ‐ 7.30 am',
        },
        {
          content: 'Bath/Dress up',
          icon: MdBathtub,
          time: '7.30 am ‐ 8.30 am',
        },
        {
          content: 'Breakfast',
          icon: MdFreeBreakfast,
          time: '8.30 am ‐ 9.30 am',
        },
        {
          content: 'Beyond Success',
          icon: BsFillBookFill,
          time: '10.00 am ‐ 11.00 am',
        },
        {
          content: 'Chat Forums',
          icon: BsFillChatFill,
          time: '11.00 am ‐ 1.00 pm',
        },
        {
          content: 'Vocational Classes',
          icon: FaTools,
          time: '1:00 pm - 2:00 pm',
        },
        {
          content: 'Lunch',
          icon: MdFastfood,
          time: '2.00 pm ‐ 3.00 pm',
        },
        {
          content: 'Siesta',
          icon: MdOutlineFreeBreakfast,
          time: '3.00 pm ‐ 3.50 pm',
        },
        {
          content: 'Sports/Rehearsals',
          icon: MdSportsBasketball,
          time: '4.00 pm ‐ 6.00 pm',
        },
        {
          content: 'Refresh',
          icon: FaShower,
          time: '6.00 pm ‐ 7.00 pm',
        },
        {
          content: 'Dinner',
          icon: MdDinnerDining,
          time: '7.00 pm ‐ 8.00 pm',
        },
        {
          content: 'Rest',
          icon: FaBed,
          time: '8.00 pm ‐ 9.00 pm',
        },
        {
          content: 'Night Vigil - Praise, Word, Impartation',
          icon: FaChurch,
          time: '10.00 pm ‐ 1.30 am',
        },
        {
          content: 'Lights out',
          icon: BsLightbulbOffFill,
          time: '1:45 am',
        },
      ],
    },
    {
      day: 'FRIDAY',
      date: '28th July 2023',
      content: [
        {
          content: 'Wake up',
          icon: FaBed,
          time: '6.30am',
        },
        {
          content: 'Group Devotion',
          icon: FaPeopleArrows,
          time: '6.70 am ‐ 7.00 am',
        },
        {
          content: 'Bath/Dress up/ Pack',
          icon: MdBathtub,
          time: '7.00 am ‐ 8.00 am',
        },
        {
          content: 'Breakfast',
          icon: MdFreeBreakfast,
          time: '8.00 am ‐ 9.00 am',
        },
        {
          content: 'Closing Ceremony',
          icon: GiPartyFlags,
          time: '9.00 am ‐ 11.00 am',
        },
      ],
    },
  ]
  const Images = [
    img1,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img2,
  ]
  const navigate = useNavigate()
  const [showSchedule, setShowSchedule] = useState(schedule[0])
  const fixSchedule = (e) => {
    const found = schedule.find((item) => item.day === e)
    console.log(e, found)
    setShowSchedule(found)
  }
  const targetDate = new Date('July 23, 2023 08:00:00').getTime()

  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const timeDifference = targetDate - now

    if (timeDifference <= 0) {
      return {
        total: 0,
      }
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    )
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

    return {
      total: timeDifference,
      days,
      hours,
      minutes,
      seconds,
    }
  }
  const [remainingTime, setRemainingTime] = useState(calculateTimeLeft())

  const formatTime = (value) => {
    if (typeof value !== 'undefined') {
      return value.toString().padStart(2, '0')
    }
    return '00'
  }
  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft()
      setRemainingTime(timeLeft)
      console.log(timeLeft)

      if (timeLeft.total <= 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='App'>
      <div className='hero'>
        <div className='head'>
          <img src={Logo} alt='' className='two' />
          <img src={Teen} alt='' className='one' />
        </div>
        <div className='texts'>
          <div className='cover'>
            <img
              src={Logo3}
              alt=''
              data-aos='fade-up'
              data-aos-duration='1500'
            />
            <h1 data-aos='fade-up' data-aos-duration='1500'>
              We know God, We Love God and we Serve God
            </h1>
            <p data-aos='fade-up' data-aos-duration='1500'>
              NAVIGATE CONFRENCE 2023
            </p>

            <button
              data-aos='fade-up'
              data-aos-duration='1500'
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div className='covers'>
        <div className='about'>
          <div className='left'>
            <img
              data-aos='fade-up'
              data-aos-duration='1500'
              src='https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80'
              alt=''
            />
          </div>
          <div className='right' data-aos='fade-left' data-aos-duration='1500'>
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
            <p>
              <b>Date:</b> July 23rd - July 28th, 2023
            </p>
          </div>
        </div>
      </div>
      <div className='countdown'>
        <div className='cover'>
          <div className='top' data-aos='fade-up' data-aos-duration='1500'>
            <h1>Countdown To The Navigate Conference</h1>
          </div>
          <div className='count'>
            <div
              className='card'
              data-aos='fade-right'
              data-aos-duration='1500'
            >
              <h2>{formatTime(remainingTime.days)}</h2>
              <div className='pic'>
                <p>Day{remainingTime.days > 0 && 's'}</p>
              </div>
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1500'>
              <h2>{formatTime(remainingTime.hours)}</h2>
              <div className='pic'>
                <p>Hour{remainingTime.hours > 0 && 's'}</p>
              </div>
            </div>
            <div className='card' data-aos='fade-down' data-aos-duration='1500'>
              <h2>{formatTime(remainingTime.minutes)}</h2>
              <div className='pic'>
                <p>Minute{remainingTime.minutes > 0 && 's'}</p>
              </div>
            </div>
            <div className='card' data-aos='fade-left' data-aos-duration='1500'>
              <h2>{formatTime(remainingTime.seconds)}</h2>
              <div className='pic'>
                <p>Sec{remainingTime.seconds > 0 && 's'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='covers'>
        <div className='vocations'>
          <div className='head' data-aos='fade-down' data-aos-duration='1500'>
            <p>SKILLS</p>
            <h1>VOCATIONAL SKILLS AVAILABLE</h1>
          </div>
          <div className='cards'>
            {List.map((item, i) => (
              <div
                className='card'
                key={i}
                data-aos='fade-up'
                data-aos-duration='1500'
              >
                <div className='img'>
                  <img src={item.image} alt='' />
                </div>
                <h2>{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='schedule'>
        <div className='coverx'>
          <div className='top' data-aos='fade-down' data-aos-duration='1500'>
            <p>OUR TIMETABLE</p>
            <h2>SCHEDULE PLAN</h2>
          </div>
          <div className='switch' data-aos='fade-up' data-aos-duration='1500'>
            <div className='box'>
              <div
                className={
                  showSchedule.day === 'SUNDAY' ? 'card active' : 'card'
                }
                onClick={() => fixSchedule('SUNDAY')}
              >
                <h2>SUNDAY</h2>
                <p>Unleash</p>
                <p>23rd July 2023</p>
              </div>
              <div
                className={
                  showSchedule.day === 'MONDAY' ? 'card active' : 'card'
                }
                onClick={() => fixSchedule('MONDAY')}
              >
                <h2>MONDAY</h2>
                <p>Unleash Relationships</p>
                <p>24th July 2023</p>
              </div>
              <div
                className={
                  showSchedule.day === 'TUESDAY' ? 'card active' : 'card'
                }
                onClick={() => fixSchedule('TUESDAY')}
              >
                <h2>TUESDAY</h2>
                <p>Unleash ME</p>
                <p>25th July 2023</p>
              </div>
              <div
                className={
                  showSchedule.day === 'WEDNESDAY' ? 'card active' : 'card'
                }
                onClick={() => fixSchedule('WEDNESDAY')}
              >
                <h2>WEDNESDAY</h2>
                <p>Unleash My Mind</p>
                <p>26th July 2023</p>
              </div>
              <div
                className={
                  showSchedule.day === 'THURSDAY' ? 'card active' : 'card'
                }
                onClick={() => fixSchedule('THURSDAY')}
              >
                <h2>THURSDAY</h2>
                <p>Unleash Uncut</p>
                <p>27th July 2023</p>
              </div>
              <div
                className={
                  showSchedule.day === 'FRIDAY' ? 'card active' : 'card'
                }
                onClick={() => fixSchedule('FRIDAY')}
              >
                <h2>FRIDAY</h2>
                <p>Unleash my Spirit</p>
                <p>28th July 2023</p>
              </div>
            </div>
          </div>
          <div className='schedulebody'>
            <div className='wrap'>
              {showSchedule.content.map((item, i) => (
                <div
                  className='card'
                  key={i + 1}
                  data-aos='flip-up'
                  data-aos-duration='1500'
                >
                  <div className='left'>
                    <item.icon />
                  </div>
                  <div className='right'>
                    <h2>{item.content}</h2>
                    <p>{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='covers'>
        <div className='gallery'>
          <div className='top' data-aos='fade-down' data-aos-duration='1500'>
            <p>GALLERY</p>
            <h2>PHOTOS FROM PAST EVENTS</h2>
          </div>
          <div className='wrapper'>
            {Images.map((item, i) => (
              <div
                className='img'
                key={item}
                data-aos='fade-up'
                data-aos-duration='1500'
              >
                <img src={item} alt='' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-covers'>
          <div className='left'>
            <div className='top'>
              <h1>RSVP</h1>
            </div>
            <ul>
              <li>
                <b>Date:</b> <p>July 23rd - July 28th, 2023</p>
              </li>
              <li>
                <b>Type:</b> <p>Residential</p>
              </li>
              <li>
                <button onClick={() => navigate('/register')}>Register</button>
              </li>
            </ul>
          </div>
          <div className='left'>
            <div className='top'>
              <h1>Information</h1>
            </div>
            <ul className='icons'>
              <a
                href='https://drive.google.com/file/d/1RjPlkIM-_mVxRkSBaomCcDkOMwiglSMa/view?usp=sharing'
                target='_blank'
              >
                <li>
                  <FaQuestion />
                  <p>FAQs</p>
                </li>
              </a>
              <a
                href='https://drive.google.com/file/d/1WUoE7oy1X4pNPLvwwuw-W1YZ8GLXiR3A/view?usp=sharing'
                target='_blank'
              >
                <li>
                  <GoLaw />
                  <p>Camp rules</p>
                </li>
              </a>
            </ul>
          </div>
          <div className='left'>
            <div className='top'>
              <h1>Stay in touch</h1>
            </div>
            <ul className='icons'>
              <a href='https://www.tiktok.com/@elevationteenz'>
                <li>
                  <FaTiktok />
                  <p>Titok</p>
                </li>
              </a>
              <a href='https://www.instagram.com/elevationteenz'>
                <li>
                  <FaInstagram />
                  <p>Instagram</p>
                </li>
              </a>
              <a href='https://www.youtube.com/@elevationteenz'>
                <li>
                  <FaYoutube />
                  <p>Youtube</p>
                </li>
              </a>
              <a href='mailto:teenznation@elevationng.org'>
                <li>
                  <FaPaperPlane />
                  <p>Email</p>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
