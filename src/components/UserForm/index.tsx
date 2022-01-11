import { useState } from 'react'

const UserForm: React.FC = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [telNumber, setTelNumber] = useState('')
  const [birthDate, setBirthDate] = useState('')

  const [option, setOption] = useState('PRIVATE')
  const [businessOption, setBusinessOption] = useState('CLIENT')
  const [userDefinedCategory, setUserDefinedCategory] = useState('')

  const SwitchSelect = (option: string) => {
    switch (option) {
      case 'BUSINESS':
        return (
          <select
            value={businessOption}
            onChange={event => setBusinessOption(event.target.value)}
          >
            <option value='CLIENT'>Klient</option>
            <option value='BOSS'>Szef</option>
            <option value='WORKER'>Pracownik</option>
          </select>
        )
      case 'ELSE':
        return (
          <label>
            <input
              type='text'
              onChange={e => setUserDefinedCategory(e.target.value)}
            />
          </label>
        )

      case 'PRIVATE':
        return <div onLoad={e => setUserDefinedCategory('PRIVATE')}></div>
    }
  }

  return (
    <form>
      <label>
        <input type='text' onChange={e => setName(e.target.value)} />
        <br></br>
        Imię
        <br></br>
      </label>

      <br></br>

      <label>
        <input type='text' onChange={e => setSurname(e.target.value)} />
        <br></br>
        Nazwisko
        <br></br>
      </label>

      <br></br>

      <label>
        <input type='email' onChange={e => setEmail(e.target.value)} />
        <br></br>
        Email
        <br></br>
      </label>

      <br></br>

      <label>
        <input type='password' onChange={e => setPassword(e.target.value)} />
        <br></br>
        Hasło
        <br></br>
      </label>

      <br></br>

      <label>
        <input type='number' onChange={e => setTelNumber(e.target.value)} />
        <br></br>
        Numer telefonu
        <br></br>
      </label>

      <br></br>

      <label>
        <input type='date' onChange={e => setBirthDate(e.target.value)} />
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

      {SwitchSelect(option)}
      <br></br>

      <input type='submit' value='Wyślij' />
    </form>
  )
}

export default UserForm
