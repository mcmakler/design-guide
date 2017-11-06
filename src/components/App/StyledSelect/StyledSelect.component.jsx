import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './StyledSelect.scss';


const StyledSelect = (props) => {
  const { options, isSecondary } = props;
  if (!options) return null;

  const optionList = options.map(i =>
    <option key={i.id}> {i.option} </option>);

  const styledSelectClass = classNames({
    styledSelect: true,
    'styledSelect--secondary': isSecondary,
  });

  return (
    <div className={styledSelectClass} >
      <select className="styledSelect__select">
        {optionList}
      </select>
      <i className="styledSelect__icon" />
    </div>
  );
};

StyledSelect.propTypes = {
  options: PropTypes.instanceOf(Object).isRequired,
  isSecondary: PropTypes.bool,
};

StyledSelect.defaultProps = {
  isSecondary: false,
};

export default StyledSelect;
