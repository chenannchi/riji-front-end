const PopUp = (props) => {
  const handleClick = () => {
    props.toggle()
  }

    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={handleClick}>X</span>
          <p>I'm A Pop Up!!!</p>
        </div>
      </div>
    )
}

export default PopUp