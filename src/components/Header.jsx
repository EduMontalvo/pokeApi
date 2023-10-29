import '../Styles/estiloHeader.css'
const Header = () => {
  return (
    <>
        <div className="header_container">
          <div className='header_elements'>
              <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo" />
              <nav>
                  <ul className='header_buttons'>
                      <li className='fire'>Fuego</li>
                      <li className='water'>Agua</li>
                      <li className='ligth'>Rayo</li>
                      <li className='grown'>Tierra</li>
                      <li className='field'>Grass</li>
                  </ul>
              </nav>
          </div>
        </div>
    </>
  )
}

export default Header