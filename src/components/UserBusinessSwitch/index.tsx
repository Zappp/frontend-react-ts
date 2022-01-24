import { useEffect } from 'react'

interface Props {
  subCategory: string
  setSubCategory: React.Dispatch<React.SetStateAction<string>>
}

const UserSubcategorySwitch: React.FC<Props> = ({ subCategory, setSubCategory }) => {
  useEffect(() => {
    setSubCategory('CLIENT')
    return () => {
      setSubCategory('')
    }
  }, [])
  return (
    <select value={subCategory} onChange={event => setSubCategory(event.target.value)}>
      <option value='CLIENT'>Klient</option>
      <option value='BOSS'>Szef</option>
      <option value='WORKER'>Pracownik</option>
    </select>
  )
}

export default UserSubcategorySwitch
