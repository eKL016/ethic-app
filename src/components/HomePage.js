import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => (
  <div className="homepage row">
    <div className="col"></div>
    <div className="col-10 col-lg-6">
      <div className="homepage__box d-flex flex-column justify-content-around align-items-center text-center">
        <h1>道德 Ethics 不道德</h1>
        <h3>以賽局實驗找出促進倫理實踐的因子</h3>
      </div>
      <div className="homepage__textarea">
        <h5>科技部106年度專題計畫研究成果</h5>
        <h5>計畫編號：MOST 106-2511-S-270-002</h5>
        <h5>2018年10月</h5>
        <br/>
        <FontAwesomeIcon icon={faUser} size="2x" className="mb-2"/>
        <h5>計畫主持人</h5>
        <h5>劉啟民　教授</h5>
        <h5>建國科技大學通識教育中心</h5>
        <br/>
        <FontAwesomeIcon icon={faUsers} size="2x" className="mb-2"/>
        <h5>研究助理</h5>
        <h5>吳祐萱（2016 - 2018）國立台灣師範大學國文學系</h5>
        <h5>林雨新（2018）國立臺灣大學資訊管理學系</h5>
        <h5>吳雨璇（2018 - ）國立臺北大學不動產與城鄉環境學系</h5>
      </div>
    </div>
    <div className="col"></div>
  </div>
);

export default HomePage;
