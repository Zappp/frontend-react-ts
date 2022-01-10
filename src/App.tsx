import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const userData = [
  {
    name: 'Andrzej',
    surname: 'Kowalski',
    email: 'abcdefgh@gmail.com',
    password: 'xyz',
    category: 'PRIVATE',
    telNumber: 'sssssssss',
    birthDate: 'dd-mm-yyyy',
  },
  {
    name: 'Andrzej2',
    surname: 'Kowalski2',
    email: 'a@gmail.com',
    password: 'zyx',
    category: 'BUSINESS',
    telNumber: 'sssssssss',
    birthDate: 'dd-mm-yyyy',
  }
]

const App = () => {
  //   const userData: UserData = getData('https://example.com/answer', { answer: 42 }).then(data => {
  //     console.log(data) // JSON data parsed by `data.json()` call
  //   })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home userData={userData} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
