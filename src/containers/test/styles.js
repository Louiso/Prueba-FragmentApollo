import styled from 'styled-components'
import Tabs from '@material-ui/core/Tabs';

const TabsMenu = styled(Tabs)(() => ({
  '.PrivateTabIndicator-colorSecondary-27': {
    backgroundColor: '#ff6122'
  },
  '.MuiTab-textColorInherit.Mui-selected': {
    a:{
      color: '#ff6122'
    }
  }
}))

export {
  TabsMenu
}