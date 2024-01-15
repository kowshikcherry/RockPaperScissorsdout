import './index.css'

const Imagebutton = props => {
  const {each, onchangewnorloose} = props
  const {id, imageUrl} = each
  const fun = () => {
    onchangewnorloose(imageUrl)
  }
  return (
    <button data-testid={each.testid} onClick={fun} className="buttonforbutton">
      <img className="imagebutton" alt={id} src={imageUrl} />
    </button>
  )
}
export default Imagebutton
