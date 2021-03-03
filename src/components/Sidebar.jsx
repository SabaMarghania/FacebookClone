import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import FlagIcon from '@material-ui/icons/Flag';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {useStateValue} from '../StateProvider';
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL}  
            title={user.displayName} />
            
            <SidebarRow Icon={LocalHospitalIcon}  title="COVID-19 - საინფორმაციო ცენტრი" />
            <SidebarRow Icon={PeopleIcon}  title="მეგობრები" />
            <SidebarRow Icon={SupervisedUserCircleIcon}  title="ჯგუფები" />
            <SidebarRow Icon={LiveTvIcon}  title="ვიდეოები" />
            <SidebarRow Icon={FlagIcon}  title="გვერდები" />
            <SidebarRow Icon={VideogameAssetIcon}  title="ვიდეო თამაშები" />
            <SidebarRow Icon={SupervisorAccountIcon}  title="მეგობრების სია" />
        </div>
    )
}

export default Sidebar
