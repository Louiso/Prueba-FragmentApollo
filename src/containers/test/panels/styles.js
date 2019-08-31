import { Button } from 'antd';
import styled from 'styled-components'

const ButtonGroupHome = styled(Button.Group)(() => ({
  display: 'flex !important',
  width: '100% !important'
}))

const ButtonHome = styled(Button).attrs({
  type: 'primary'
})(({selected}) => ({
  backgroundColor: `${!selected ? 'white': '#ff6122'} !important`,
  color: `${!selected ? '#ff6122' : 'white'} !important`,
  borderColor: '#ff6122 !important',
  fontSize: '14px !important',
  flex: '1 !important',
  height: '34px !important'
}))


export {
  ButtonGroupHome,
  ButtonHome
}