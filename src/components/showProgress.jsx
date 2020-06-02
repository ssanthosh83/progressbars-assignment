import React from "react";

const ShowProgress = ({ bar, limit, index, displayProgressBar }) => {
  return (
    <React.Fragment>
      <div key={index}>
        <label htmlFor="">ProgressBar {index + 1}</label>
      </div>
      <div className="progress">
        <div
          className={displayProgressBar(bar)}
          role="progressbar"
          aria-valuenow={bar}
          aria-valuemin="0"
          aria-valuemax={limit}
          style={{ width: bar + "%" }}
        >
          {bar}%
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowProgress;
