import React from 'react'
import { ButtonGroupHome, ButtonHome } from './styles';
const NavButtons = ({active, onChange }) => {
  const texts = ['Navegar', 'Recomendadas']
  return(
    <div style = {{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <ButtonGroupHome>
        {texts.map((text, index) => (
          <ButtonHome key={index} selected = { active === index} onClick={() => onChange(index)}>
            {text}
          </ButtonHome>
        ))}
      </ButtonGroupHome>
    </div>
  )
}

export default NavButtons