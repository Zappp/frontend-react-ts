const AddUser: React.FC = () => {
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

      <label>Wybierz kategorię</label>
      <select name='category' id='cetegory'>
        <option value='PRIVATE'>Prywatny</option>
        <option value='BUSINESS'>Bizness</option>
        <option value='ELSE'>Inne</option>
      </select>
      <br></br>

      <br></br>

      <input type='submit' value='Wyślij' />
    </form>
  )
}

export default AddUser
