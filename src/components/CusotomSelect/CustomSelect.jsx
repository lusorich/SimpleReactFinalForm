import React, { useEffect, useState } from 'react';

const CustomSelect = ({ optionsList }) => {
  const [choiceText, setChoiceText] = useState('');
  const [showOptionList, setShowOptionList] = useState(false);

  const defaultText = 'Язык';

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return document.removeEventListener('mousedown', handleClickOutside);
  });

  const handleClickOutside = (e) => {
    if (
      !e.target.classList.contains('custom-select-option') &&
      !e.target.classList.contains('selected-text')
    ) {
      setShowOptionList(false);
    }
  };

  const handleListDisplay = () => setShowOptionList(!showOptionList);

  const handleOptionClick = (e) => {
    setChoiceText(e.target.getAttribute('data-name'));
    setShowOptionList(false);
  };

  return (
    <div className="custom-select">
      <div
        className={
          showOptionList
            ? 'custom-select__title-wrapper active'
            : 'custom-select__title-wrapper'
        }
        onClick={handleListDisplay}
        tabIndex="0"
      >
        {choiceText ? (
          <span className="custom-select__title custom-select__title--black">
            {choiceText}
          </span>
        ) : (
          <span className="custom-select__title custom-select__title--grey">
            {defaultText}
          </span>
        )}
      </div>
      {showOptionList && (
        <ul className="custom-select__list">
          {optionsList.map((option) => {
            return (
              <li
                className="custom-select__item"
                data-name={option.name}
                key={option.id}
                onClick={handleOptionClick}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
