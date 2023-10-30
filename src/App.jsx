import Header from "./components/Header"
import Card from "./components/Card"
import "./Styles/bodyStyle.css"

const App = () => {
  const consultaPokeApi = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
    const data = await response.json()
    console.log(data.species.name)
    return data;
  }
  consultaPokeApi();

  return (
    <>
      <Header/>
      <div className="main_container">
        <div className="container_items">
          <Card numero="#001" nombre="BULBASAUR" type1="tipo1" type2="tipo2" weight="7kg" height="1.8m"/>
          <Card number="#001" name="bulba" type1="tipo1" type2="tipo2" weight="7kg" height="1.8m"/>
          <Card number="#001" name="bulba" type1="tipo1" type2="tipo2" weight="7kg" height="1.8m"/>
          <Card number="#001" name="bulba" type1="tipo1" type2="tipo2" weight="7kg" height="1.8m"/>
          <Card number="#001" name="bulba" type1="tipo1" type2="tipo2" weight="7kg" height="1.8m"/>
          <Card number="#001" name="bulba" type1="tipo1" type2="tipo2" weight="7kg" height="1.8m"/>
        </div>
      </div>
      
    </>
  )
}

export default App