// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails
  const buttonClassName = isActive ? 'language-btn active' : 'language-btn'

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        type="button"
        className={buttonClassName}
        onClick={onClickLanguageFilter}
        value={language}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
