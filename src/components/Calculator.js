import { React, useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import BoardFeature from './BoardFeature';

function Interface({ showValue }) {
  return (
    <div className="inner-container">
      <p>{showValue}</p>
    </div>
  );
}

Interface.propTypes = {
  showValue: PropTypes.string,
};

Interface.defaultProps = {
  showValue: '0',
};

export default function Calculator() {
  const [showValue, setShowValue] = useState('0');
  const [infoCalculate, setInfoCalculate] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const hanndleBoardClick = (buttonName) => {
    const newInfo = calculate(infoCalculate, buttonName);
    setInfoCalculate(newInfo);

    if (newInfo.next !== null) {
      setShowValue(newInfo.next);
    } else if (newInfo.total !== null) {
      setShowValue(newInfo.total);
    } else {
      setShowValue('0');
    }
  };

  return (
    <>
      <div className="calculator-page">
        <h2 className="calculate-text">Let&apos;s do some math!</h2>
        <div className="outer-container">
          <Interface showValue={showValue} />
          <BoardFeature onClickButton={hanndleBoardClick} />
        </div>
      </div>
    </>
  );
}
