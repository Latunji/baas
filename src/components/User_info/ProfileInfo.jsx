import React from 'react';
import Sidebar from '../Sidebar';
import BusinessInfo from './BusinessInfo';
import FinancialInfo from './FinancialInfo';
import KYC from './KYC';
import SetupProfile from './SetupProfile';
import SupportDoc from './SupportDoc';
import classes from './Userinfo.module.css'


function ProfileInfo(){
  return (
    <div className={classes.userinfo} >
        <div className={classes.profileform} >
            {/* <SetupProfile/>
            <BusinessInfo/> */}
            <FinancialInfo/>
            <KYC/>
            {/* <SupportDoc/> */}
        </div>
    </div>
  )
}

export default ProfileInfo