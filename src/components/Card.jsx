import '../Styles/cardStyle.css'
const Card = (props) => {
  return (
    <>
        <div className='card'>
          <p className='card_numberback'>#001</p>
          <div className="card_img">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Imagen" />
          </div>
          <div className="card_info">
            <div className="card_data">
              <p>{props.numero}</p>
              <h1>{props.nombre}</h1>
            </div>
            <div className="card_tipos">
              <p className='poison'>Poison</p>
              <p className='grass'>Grass</p> 
            </div>
            <div className="card_stats">
              <p>7m</p>
              <p>8kg</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card