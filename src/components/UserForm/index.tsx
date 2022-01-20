import { useState } from 'react'
import UserSubcategorySwitch from '../UserSubcategorySwitch'

const UserForm: React.FC = () => {

  const [name, setName] = useState('') //useEffect?
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [telNumber, setTelNumber] = useState('')
  const [birthDate, setBirthDate] = useState('')

  const [option, setOption] = useState('PRIVATE')
  const [value, setValue] = useState('')

  const UserCategorySwitch = (option: string) => {
    switch (option) {
      case 'BUSINESS':
        return <UserSubcategorySwitch value={value} setValue={setValue} />
      case 'ELSE':
        return (
          <label>
            <input
              type='text'
              onChange={event => setValue(event.target.value)}
            />
          </label>
        )

      case 'PRIVATE':
        return <span onChange={() => setValue('')}></span>
    }
  }

  return (
    <form>
      <label>
        <input type='text' onChange={event => setName(event.target.value)} />
        <br></br>
        Imię
        <br></br>
      </label>

      <br></br>

      <label>
        <input type='text' onChange={event => setSurname(event.target.value)} />
        <br></br>
        Nazwisko
        <br></br>
      </label>

      <br></br>

      <label>
        <input type='email' onChange={event => setEmail(event.target.value)} />
        <br></br>
        Email
        <br></br>
      </label>

      <br></br>

      <label>
        <input
          type='password'
          onChange={event => setPassword(event.target.value)}
        />
        <br></br>
        Hasło
        <br></br>
      </label>

      <br></br>

      <label>
        <input
          type='number'
          onChange={event => setTelNumber(event.target.value)}
        />
        <br></br>
        Numer telefonu
        <br></br>
      </label>

      <br></br>

      <label>
        <input
          type='date'
          onChange={event => setBirthDate(event.target.value)}
        />
        <br></br>
        Data urodzenia
        <br></br>
      </label>

      <br></br>

      <label>Wybierz kategorię użytkownika</label>
      <select value={option} onChange={event => setOption(event.target.value)}>
        <option value='PRIVATE'>Prywatna</option>
        <option value='BUSINESS'>Biznesowa</option>
        <option value='ELSE'>Inna</option>
      </select>
      {UserCategorySwitch(option) /*move to different module*/}
      <br></br>

      <input type='submit' value='Wyślij' />
    </form>
  )
}

export default UserForm
