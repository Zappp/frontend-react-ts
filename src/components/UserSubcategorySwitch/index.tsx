import { useEffect } from 'react'

interface Props {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const UserSubcategorySwitch: React.FC<Props> = ({ value, setValue }) => {
  useEffect(() => {
    setValue('CLIENT')
    return () => {
      setValue('')
    }
  }, [])
  return (
    <select value={value} onChange={event => setValue(event.target.value)}>
      <option value='CLIENT'>Klient</option>
      <option value='BOSS'>Szef</option>
      <option value='WORKER'>Pracownik</option>
    </select>
  )
}

export default UserSubcategorySwitch
