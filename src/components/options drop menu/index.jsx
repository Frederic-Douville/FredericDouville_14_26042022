import chevronUp from '../../assets/chevron-up-solid.svg';
import chevronDown from '../../assets/chevron-down-solid.svg';
import { useState } from 'react';
import { choosePaging } from '../../features/paging';
import { useStore } from 'react-redux';

function OptionsDropMenu({ optionsArray }) {
    const [dropIsOpen, setDropIsOpen] = useState(false);
    const [choice, setChoice] = useState(optionsArray[0]);
    const store = useStore();

    function openDropMenu() {
        setDropIsOpen(!dropIsOpen);
    }

    function choiceOption(event) {
        const choiceIndex = event.currentTarget
            .getAttribute('id')
            .split('-')[1];
        setChoice(optionsArray[choiceIndex]);
        choosePaging(store, optionsArray[choiceIndex]);
        setDropIsOpen(!dropIsOpen);
    }

    return (
        <div className="opt-drop-ctn">
            <div className="opt-choice-ctn">
                <span
                    className={`opt-choice-first ${
                        dropIsOpen ? 'opt-choice-first-open' : null
                    }`}
                    id="option-0"
                >
                    {dropIsOpen ? '...' : choice}
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