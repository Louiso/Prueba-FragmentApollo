import React, { useState } from 'react'
import TabPanel from '../../../components/TabPanel';
import NavButtons from './NavButtons';

const Home = ({value, index}) => {
  const [ buttonSelected , setButtonSelected ] = useState(0)
  const _handleClickButton = (index) => {
    setButtonSelected(index)
  }
  return (
    <TabPanel value={value} index={index}>
      <NavButtons active ={buttonSelected} onChange={_handleClickButton}/>  
      <div>
        <h1>Historias Pagadas</h1>
        <p>Conviertete en un auspiciador y ayuda  a tus autores favoritos a ganar dinero</p>
      </div>

    </TabPanel>
  )
}

export default Home