import { useState } from 'react'
import './App.scss'
import Logo from './images/logo.jpg'
import Teen from './images/teen.jpg'
import { useNavigate } from 'react-router-dom'

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
function Register({ notify }) {
  const navigate = useNavigate()
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
    console.log(data)
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
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isElevationChurchMember, setIsElevationChurchMember] = useState('')
  const [address, setAddress] = useState('')
  const [childFirstName, setChildFirstName] = useState('')
  const [childLastName, setChildLastName] = useState('')
  const [childGender, setChildGender] = useState('')
  const [childAge, setChildAge] = useState('')
  const [childClass, setChildClass] = useState('')
  const [childEmail, setChildEmail] = useState('')
  const [childPhone, setChildPhone] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked)
    console.log(event.target.checked)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(childInfo)
    if (firstName.length < 3) {
      notify('warn', 'Parent/Guardian First Name field is empty')
    } else if (lastName.length < 3) {
      notify('warn', 'Parent/Guardian Last Name field is empty')
    } else if (emailAddress.length < 3) {
      notify('warn', 'Parent/Guardian Email Address field is empty')
    } else if (phoneNumber.length < 3) {
      notify('warn', 'Parent/Guardian Phone Number field is empty')
    } else if (isElevationChurchMember.length < 2) {
      notify(
        'warn',
        ' Are you a member of the Elevation Church? field is empty'
      )
    } else if (address.length < 3) {
      notify('warn', 'Parent/Guardian Address field is empty')
    } else if (childFirstName.length < 3) {
      notify('warn', 'Child/Ward First Name field is empty')
    } else if (childLastName.length < 3) {
      notify('warn', 'Child/Ward Last Name field is empty')
    } else if (childEmail.length < 3) {
      notify('warn', 'Child/Ward Email Address field is empty')
    } else if (childPhone.length < 3) {
      notify('warn', 'Child/Ward Phone Number field is empty')
    } else if (childGender.length < 3) {
      notify('warn', 'Child/Ward Gender field is empty')
    } else if (childAge.length < 3) {
      notify('warn', 'Child/Ward Age field is empty')
    } else if (childClass.length < 3) {
      notify('warn', 'Child/Ward Class field is empty')
    } else if (!isChecked) {
      notify(
        'warn',
        'You have to agreee to the camp rules and give consent to continue.'
      )
    } else {
      let askChruc = null
      if (isElevationChurchMember === 'Yes') {
        askChruc = true
      } else {
        askChruc = false
      }
      const url = 'http://digicomme.com:7777/api/unleash-navigate/auth/register'
      const Payurl = 'https://paystack.com/pay/tecnavigate23'

      const data = {
        attendees: [
          {
            teen_first_name: childFirstName,
            teen_last_name: childLastName,
            teen_phone: childPhone,
            teen_email: childEmail,
            vocational_class: childClass,
            age_range: childAge,
            gender: childGender,
          },
        ],
        parent_first_name: firstName,
        parent_last_name: lastName,
        parent_phone: phoneNumber,
        parent_email: emailAddress,
        address: address,
        is_elevation_church_member: askChruc,
      }

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(data),
        })
        console.log(response)
        const jsonResponse = await response.json()
        if (response.status === 200) {
          notify(
            'success',
            'Registration successful, please proceed to payment. Redirecting ...'
          )
          setTimeout(() => {
            window.open(Payurl, '_blank')
          }, 3000)
        } else {
          Object.keys(jsonResponse).forEach((key) => {
            jsonResponse[key].forEach((errorMessage) => {
              notify('error', errorMessage)
            })
          })
        }
        console.log(jsonResponse)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    // Perform any necessary actions with the form values
  }
  return (
    <div className='register'>
      <div className='head'>
        <img
          src={Logo}
          alt=''
          className='two'
          onClick={() => {
            navigate('/')
          }}
        />
        <img src={Teen} alt='' className='one' onClick={() => navigate('/')} />
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
              <input
                type='text'
                placeholder='Input First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='card'>
              <p>Last Name</p>
              <input
                type='text'
                placeholder='Input Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className='card'>
              <p>Email Address</p>
              <input
                type='email'
                placeholder='Input Email Address'
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div className='card'>
              <p>Phone Number</p>
              <input
                type='text'
                placeholder='Input Phone Number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className='card'>
              <p>Are you a member of the Elevation Church?</p>
              <select
                value={isElevationChurchMember}
                onChange={(e) => setIsElevationChurchMember(e.target.value)}
              >
                <option value=''>-select-</option>
                <option value='Yes'>-Yes-</option>
                <option value='No'>-No-</option>
              </select>
            </div>
            <div className='card'>
              <p>Address</p>
              <input
                type='text'
                placeholder='Input Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className='tag2'>
            <h2>Teenager Information</h2>
          </div>
          <div className='form-body'>
            <div className='card'>
              <p>First Name</p>
              <input
                type='text'
                placeholder='Input First Name'
                onChange={(e) => setChildFirstName(e.target.value)}
                value={childFirstName}
              />
            </div>
            <div className='card'>
              <p>Last Name</p>
              <input
                type='text'
                placeholder='Input Last Name'
                onChange={(e) => setChildLastName(e.target.value)}
                value={childLastName}
              />
            </div>
            <div className='card'>
              <p>Gender</p>
              <select
                name=''
                id=''
                onChange={(e) => setChildGender(e.target.value)}
                value={childGender}
              >
                <option value=''>-select-</option>
                <option value='Female'>Female</option>
                <option value='Male'>Male</option>
              </select>
            </div>
            <div className='card'>
              <p>Age range</p>
              <select
                name=''
                id=''
                onChange={(e) => setChildAge(e.target.value)}
                value={childAge}
              >
                <option value=''>-select-</option>
                <option value='13 - 14 years'>13 - 14 years</option>
                <option value='15 - 16 years'>15 - 16 years</option>
                <option value='17 - 19 years'>17 - 19 years</option>
              </select>
            </div>
            <div className='card'>
              <p>Email Address</p>
              <input
                type='email'
                placeholder='Input Email Address'
                onChange={(e) => setChildEmail(e.target.value)}
                value={childEmail}
              />
            </div>
            <div className='card'>
              <p>Phone Number</p>
              <input
                type='tel'
                placeholder='Input Phone Number'
                onChange={(e) => setChildPhone(e.target.value)}
                value={childPhone}
              />
            </div>
            <div className='card'>
              <p>Vocational class</p>
              <select
                name=''
                id=''
                onChange={(e) => setChildClass(e.target.value)}
                value={childClass}
              >
                <option value=''>-select-</option>
                {List.map((item) => (
                  <option value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>
            {/* <div className='long'>
                <div
                  className='remove'
                  onClick={() => removeAddressFields(index)}
                >
                  <p>remove</p>
                </div>
              </div> */}
          </div>
          {/* <div className='lons'>
            <div className='add' onClick={addAddressFields}>
              <p>add attendee</p>
            </div>
          </div> */}
          <div className='accept'>
            <input
              type='checkbox'
              name=''
              id=''
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p>I agree that i have read the </p>
            <a
              href='https://drive.google.com/file/d/1WUoE7oy1X4pNPLvwwuw-W1YZ8GLXiR3A/view?usp=sharing'
              target='_blank'
            >
              <p>camp rules </p>
            </a>
            and i consent that i'm allowing my child/ward to attend.
          </div>
          <div className='submit'>
            <button onClick={(e) => handleSubmit(e)}>Proceed</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
