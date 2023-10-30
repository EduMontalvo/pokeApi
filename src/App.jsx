import Header from "./components/Header"
import Card from "./components/Card"
import "./Styles/bodyStyle.css"

const App = () => {
  
  return (
    <>
      <Header/>
      <div className="main_container">
        <div className="container_items">
          <Card number="#001" name="bulba" type1="tipo1" type2="tipo2" weight="7kg" height="1.8m"/>
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