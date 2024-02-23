import { FC } from 'react'
import useSearch from './useSearch'
import { CgSearch } from 'react-icons/cg'
import ButtonIcon from '../Buttons/ButtonIcon'
import styles from './Search.module.css'

interface SearchProps {
  placeholder: string
  onSearch: (value: string) => void
}

const Search: FC<SearchProps> = ({ placeholder, onSearch }) => {
  const { inputValue, onInputChange, onSearchHandle } = useSearch(onSearch)

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={onInputChange}
        className={styles.input}
      />
      <div className={styles.searchButtonIcon}>
        <ButtonIcon onClick={onSearchHandle}>
          <CgSearch className={styles.searchIcon} />
        </ButtonIcon>
      </div>
    </div>
  )
}
export default Search
