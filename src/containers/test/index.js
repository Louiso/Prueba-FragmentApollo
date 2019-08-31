import React, { useState } from 'react'
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../../components/TabPanel';
import MaterialIcon from '../../components/MaterialIcon';
import { TabsMenu } from './styles';
import Home from './panels/Home';
import { Link } from '@reach/router';
import styled from 'styled-components'
const LinkNav = styled(Link)(() => ({
  color: 'black'
}))

const TabNavigation = (props) => {
  const [activeKey , setActiveKey ] = useState(localStorage.getItem('activeKey') || 0)
  const _handleChangeTabs = (e,newActiveKey) => {
    localStorage.setItem('activeKey',newActiveKey)
    setActiveKey(newActiveKey)
  }
  const _handleChangeIndex = (index) => {
    setActiveKey(index);
  }
  const getActive = () => Number(activeKey)
  return(
    <div>
      <TabsMenu
        value={getActive()}
        onChange = {_handleChangeTabs}
        variant="fullWidth"
        >
        <Tab label={<LinkNav to="home"><MaterialIcon type="home"/></LinkNav>}/>
        <Tab label={<LinkNav to="my_books"><MaterialIcon type="library_books"/></LinkNav>}/>
        <Tab label={<LinkNav to="search"><MaterialIcon type="search"/></LinkNav>}/>
        <Tab label={<LinkNav to="notifications"><MaterialIcon type="notifications"/></LinkNav>}/>
        <Tab label={(
          <img 
            src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/47574409_2298939763717563_7114368675896885248_n.jpg?_nc_cat=106&_nc_oc=AQn4vjx285BT_cYuxlnop48DIQwqLaKqhP9cgCQf-CUMQaoI_bxdA_aY0X29_pVTILU&_nc_ht=scontent-atl3-1.xx&oh=4911c3df2a1cea79d7dcbd7f44eaedd9&oe=5E10240A" 
            style={{
              display: 'block',
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: 'gray'
            }}
            alt=""
            />
        )}/>
      </TabsMenu>
      <SwipeableViews
        index={getActive()}
        onChangeIndex={_handleChangeIndex}
      >
        <Home value={getActive()} index={0}/>
        <TabPanel value={getActive()} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={getActive()} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={getActive()} index={3}>
          Item Fourth
        </TabPanel>
        <TabPanel value={getActive()} index={4}>
          Item Five
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}

const Test = (props) => {
  return (
    <div>
      <TabNavigation {...props}/>
    </div>
  )
}

export default Test
