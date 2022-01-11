import { useState } from 'react'

const UserForm: React.FC = () => {
  const [option, setOption] = useState('PRIVATE')
  const [businessOption, setBusinessOption] = useState('')

  const SwitchSelect = (option: string) => {
    switch (option) {
      case 'BUSINESS':
        return (
          <select
            value={businessOption}
            onChange={event => setBusinessOption(event.target.value)}
          >
            <option value='BOSS'>Szef</option>
            <option value='CLIENT'>Klient</option>
            <option value='WORKER'>Pracownik</option>
          </select>
        )
      case 'ELSE':
        return (
          <label>
            <input type='text' name='userDefinedCategory' />
          </label>
        )
      default:
        return <div></div>
    }
  }

  return (
    <form>
      <label>
        <input type='text' name='name' />
        <br></br>
        Imię
        <br></br>
      </label>

      <br></br>

      <label>
        <input type='text' name='surname' />
        <br></br>
        Nazwisko
        <br></br>
      </label>

      <br></br>

      <label>
        <input type='email' name='email' />
        <br></br>
        Email
        <br></br>
      </label>

      <br></br>

      <label>
        <input type='password' name='password' />
        <br></br>
        Hasło
        <br></br>
      </label>

      <br></br>

      <label>
        <input type='number' name='telNumber' />
        <br></br>
        Numer telefonu
        <br></br>
      </label>

      <br></br>

      <label>
        <input type='date' name='birthDate' />
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
