import React from 'react';
import './homeA.css';
import FaeturedInfo from '../../faetured/FaeturedInfo';
import Chart from '../../charts/Chart';
import{userData} from './dummyData';
import Widgetsma from '../../widgetSm/Widgetsma';
import Widgetlg from '../../widgetLg/Widgetlg';
function HomeA() {

  return (

    <div className='home'>
      <FaeturedInfo/>
      <Chart data={userData} title="User"  grid dataKey="Active User"/>
      <div className='homeWidgets'>
      <Widgetsma/>
      <Widgetlg/>
      </div>
    </div>
    
  );
}

export default HomeA
