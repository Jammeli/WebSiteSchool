import React from "react";

function Notice({ text, image,rond }) {
  return (
    <div className="col-xl-4 col-sm-6 col-12">
      <div className="dashboard-summery-one mg-b-20">
        <div className="row align-items-center">
          <div className="col-4">
            <div className={image}>
              <i className={rond}></i>
            </div>
          </div>
          <div className="col-8">
            <div className="item-content">
              <div className="item-title">{text}</div>
              <div className="item-number">
                <span className="counter" data-num="150000">
                  1,50,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notice;
