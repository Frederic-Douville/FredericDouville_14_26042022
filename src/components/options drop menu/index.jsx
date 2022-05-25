import chevronUp from '../../assets/chevron-up-solid.svg';
import chevronDown from '../../assets/chevron-down-solid.svg';
import { useState } from 'react';

function OptionsDropMenu({ optionsArray }) {
    const [dropIsOpen, setDropIsOpen] = useState(false);
    const [choice, setChoice] = useState(optionsArray[0]);
    function openDropMenu() {
        setDropIsOpen(!dropIsOpen);
    }
    function choiceOption(event) {
        const choiceIndex = event.currentTarget
            .getAttribute('id')
            .split('-')[1];
        setChoice(optionsArray[choiceIndex]);
        setDropIsOpen(!dropIsOpen);
    }
    return (
        <div
            className={`opt-drop-ctn ${
                dropIsOpen ? 'opt-drop-ctn-extend' : null
            }`}
        >
            <div className="opt-choice-ctn">
                <span className="opt-choice-first" id="option-0">
                    {dropIsOpen ? '' : choice}
                </span>
                <button className="opt-choice-btn">
                    <img
                        src={dropIsOpen ? chevronUp : chevronDown}
                        alt={dropIsOpen ? 'chevron up' : 'chevron down'}
                        className="opt-choice-btn-icon"
                        onClick={openDropMenu}
                    />{' '}
                </button>
            </div>
            {dropIsOpen ? (
                <div className="opt-drop-menu">
                    {optionsArray.map((elem, index) => (
                        <span
                            key={index}
                            className="opt-drop-option"
                            id={`option-${index}`}
                            onClick={choiceOption}
                        >
                            {elem}
                        </span>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default OptionsDropMenu;
