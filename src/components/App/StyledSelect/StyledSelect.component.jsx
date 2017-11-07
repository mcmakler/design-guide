import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './StyledSelect.scss';

const StyledSelect = (props) => {
  const { options, kind } = props;
  if (!options) return null;

  const optionList = options.map(i =>
    <option key={i.id}> {i.option} </option>);

  const styledSelectClass = classNames({
    styledSelect: true,
    'styledSelect--secondary': kind === 'secondary',
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
  kind: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};

StyledSelect.defaultProps = {
  kind: 'primary',
};

export default StyledSelect;
