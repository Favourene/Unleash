import { useState } from 'react'
import './App.scss'
import Logo from './images/logo.jpg'
import Teen from './images/teen.jpg'

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
function Register() {
  const [childInfo, setChildInfo] = useState([
    {
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      class: '',
      email: '',
      phone: '',
    },
  ])
  const handleAddressChange = (event, index) => {
    let data = [...childInfo]
    data[index][event.target.name] = event.target.value
    setChildInfo(data)
  }
  const addAddressFields = () => {
    let object = {
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      class: '',
      email: '',
      phone: '',
    }
    setChildInfo([...childInfo, object])
  }
  const removeAddressFields = (index) => {
    let data = [...childInfo]
    data.splice(index, 1)
    setChildInfo(data)
  }
  const openPDF = () => {
    window.open('./images/camprules.pdf', '_blank')
  }
  return (
    <div className='register'>
      <div className='head'>
        <img src={Logo} alt='' className='two' />
        <img src={Teen} alt='' className='one' />
      </div>
      <div className='form-head'>
        <h1>Camp Registration Form</h1>
        <p>Please fill the form below to register</p>
      </div>
      <div className='form'>
        <div className='cover'>
          <div className='tag'>
            <h2>Parent information</h2>
          </div>
          <div className='form-body'>
            <div className='card'>
              <p>First Name</p>
              <input type='text' placeholder='Input First Name' />
            </div>
            <div className='card'>
              <p>Last Name</p>
              <input type='text' placeholder='Input Last Name' />
            </div>
            <div className='card'>
              <p>Email Address</p>
              <input type='email' placeholder='Input Email Address' />
            </div>
            <div className='card'>
              <p>Phone Number</p>
              <input type='text' placeholder='Input Phone Number' />
            </div>
            <div className='card'>
              <p>Are you a member of the Elevation Church?</p>
              <select name='' id=''>
                <option value=''>-select-</option>
                <option value=''>-Yes-</option>
                <option value=''>-No-</option>
              </select>
            </div>
            <div className='card'>
              <p>Address</p>
              <input type='text' placeholder='Input Address' />
            </div>
          </div>
          <div className='tag2'>
            <h2>Teenager's Information</h2>
          </div>
          {childInfo.map((form, index) => (
            <div className='form-body'>
              <div className='card'>
                <p>First Name</p>
                <input
                  type='text'
                  placeholder='Input First Name'
                  onChange={(event) => handleAddressChange(event, index)}
                  defaultValue={form.firstName}
                />
              </div>
              <div className='card'>
                <p>Last Name</p>
                <input
                  type='text'
                  placeholder='Input Last Name'
                  onChange={(event) => handleAddressChange(event, index)}
                  defaultValue={form.lastName}
                />
              </div>
              <div className='card'>
                <p>Gender</p>
                <select
                  name=''
                  id=''
                  onChange={(event) => handleAddressChange(event, index)}
                  defaultValue={form.gender}
                >
                  <option value=''>-select-</option>
                  <option value=''>Female</option>
                  <option value=''>Male</option>
                </select>
              </div>
              <div className='card'>
                <p>Age range</p>
                <select
                  name=''
                  id=''
                  onChange={(event) => handleAddressChange(event, index)}
                  defaultValue={form.age}
                >
                  <option value=''>-select-</option>
                  <option value=''>13 - 14 years</option>
                  <option value=''>15 - 16 years</option>
                  <option value=''>17 - 19 years</option>
                </select>
              </div>
              <div className='card'>
                <p>Email Address</p>
                <input
                  type='email'
                  placeholder='Input Email Address'
                  onChange={(event) => handleAddressChange(event, index)}
                  defaultValue={form.email}
                />
              </div>
              <div className='card'>
                <p>Phone Number</p>
                <input
                  type='tel'
                  placeholder='Input Phone Number'
                  onChange={(event) => handleAddressChange(event, index)}
                  defaultValue={form.phone}
                />
              </div>
              <div className='card'>
                <p>Vocational class</p>
                <select
                  name=''
                  id=''
                  onChange={(event) => handleAddressChange(event, index)}
                  defaultValue={form.class}
                >
                  <option value=''>-select-</option>
                  {List.map((item) => (
                    <option value={item.name}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className='long'>
                <div
                  className='remove'
                  onClick={() => removeAddressFields(index)}
                >
                  <p>remove</p>
                </div>
              </div>
            </div>
          ))}
          <div className='lons'>
            <div className='add' onClick={addAddressFields}>
              <p>add attendee</p>
            </div>
          </div>
          <div className='accept'>
            <input type='checkbox' name='' id='' />
            <p>I agree that i have read the </p>
            <a
              href='https://drive.google.com/file/d/1kPzqk_QU3Oj_2pUPaVE2pAs_RCUylkaO/view?usp=sharing'
              target='_blank'
            >
              <p>camp rules </p>
            </a>
            and i consent that i'm allowing my child/ward to attend.
          </div>
          <div className='submit'>
            <button>Proceed</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
