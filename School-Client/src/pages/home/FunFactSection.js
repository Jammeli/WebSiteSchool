import React from 'react';
import Counter from '../../components/Counter';

import funFactBG from '../../assets/img/funfact/funfact-bg.png';

const FunFact = () => {
  const counters = [
    {
      countIcon: 'flaticon-teacher',
      countNum: 3,
      countSubtext: '3 ans',
      countTitle: 'Maternelle',
    },
    {
      countIcon: 'flaticon-completed-task',
      countNum: 15,
      countSubtext: '5 ans',
      countTitle: 'Préscolaire',
    },
    {
      countIcon: 'flaticon-customer-review',
      countNum: 97,
      countSubtext: '6 à 12 ans',
      countTitle: 'Primaire',
    },
    {
      countIcon: 'flaticon-class',
      countNum: 102,
      countSubtext: '12 à 18 ans',
      countTitle: 'Secondaire',
    },
  ];
  return (
    <div className={'it-funfact-area z-index-5'}>
      <div className="container">
        <div
          className={'it-funfact-bg-wrap yellow-bg'}
          style={{ backgroundImage: `url(${funFactBG})` }}
        >
          <div className="row gx-0 text-center">
            {counters.map((counter, index) => (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="it-funfact-item d-flex align-items-center">
                  <div className="it-funfact-icon" >
                    
                  </div>
                  <div className="it-funfact-content">
                    <h6>
                     
                    {counter.countSubtext}
                    
                    </h6>
                    <span className="it-funfact-content-title" style={{color:"#dd1111"}}>
                      {counter.countTitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FunFact;
