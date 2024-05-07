import React, { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ title, children, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropDownMenuColor = classNames({
    'dropdown__menu--black': theme === "black",
    'dropdown__menu--white': theme === "white",
  });

  return (
    <div className="dropdown">
      <button className={`dropdown__toggle ${theme === 'black' ? 'dropdown__toggle--white' : 'dropdown__toggle--black'}`} onClick={toggleDropdown}>
        {title}
        <FontAwesomeIcon className="dropdown__icon" icon={faAngleDown} />
      </button>
      <ul className={classNames('dropdown__menu', { 'dropdown__menu--open': isOpen }, dropDownMenuColor)}>
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
