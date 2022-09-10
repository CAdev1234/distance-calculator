// import {FormattedIcon} from '@components/icons';
import {CityType} from '@dtypes/type';
import React, {useEffect, useRef, useState} from 'react';
import {Button} from '@components/ui/common';
import ClickOutside from '../clickOutside/clickOutside';
import './dropdown.scss';

export interface DropdownValueType {
    name: string;
    value: Array<CityType>;
}
export interface DropdownProps {
    defaultVal?: Array<CityType>;
    items: Array<CityType>;
    name: string;
    mulitiple?: boolean;
    placeholder: string;
    disabled?: boolean;
    onUpdated?: (item: DropdownValueType) => void;
}
const Dropdown: React.FC<DropdownProps> = ({
    defaultVal = [],
    items,
    name,
    mulitiple = false,
    placeholder,
    disabled = false,
    onUpdated,
}) => {
    const inputRef = useRef<HTMLInputElement>();
    const dropdownInputRef = useRef();
    const [active, setActive] = useState(false);
    const [tags, setTags] = useState([]);
    const [dropdownListTop, setDropdownListTop] = useState(30);
    const addTags = (item: CityType) => {
        let newTags = JSON.parse(JSON.stringify(tags));
        if (mulitiple) {
            newTags.push(item);
        } else {
            newTags = [item];
        }
        const btn: HTMLButtonElement = document.getElementById(
            `${name}_${item[0]}`,
        ) as HTMLButtonElement;
        btn.disabled = true;
        setTags([...newTags]);
        onUpdated({
            name: name,
            value: newTags,
        });
    };
    const removeTag = (idx: number) => {
        const tagClone = JSON.parse(JSON.stringify(tags));
        document
            .getElementById(`${name}_${tagClone[idx][0]}`)
            .removeAttribute('disabled');
        tagClone.splice(idx, 1);
        setTags(tagClone);
        onUpdated({
            name: name,
            value: tagClone,
        });
    };

    useEffect(() => {
        if (active) {
            const height = (dropdownInputRef.current as HTMLElement)
                .clientHeight;
            setDropdownListTop(height + 10);
        }
    }, [tags]);
    useEffect(() => {
        setTags(defaultVal);
    }, []);

    return (
        <>
            <ClickOutside
                active={active}
                onClick={() => {
                    setActive(!active);
                }}>
                <div
                    className={`dropdown ${disabled ? 'disabled' : ''}`}
                    data-name={name}
                    data-test-name={name}>
                    <div
                        className="dropdown-input"
                        ref={dropdownInputRef}
                        onClick={() => {
                            setActive(true);
                            inputRef.current.focus();
                        }}>
                        {tags.length === 0 && !active ? (
                            <i>{placeholder}</i>
                        ) : (
                            ''
                        )}
                        {tags.map((tag, idx) => {
                            return (
                                <span key={idx}>
                                    {tag[0]}
                                    <Button
                                        iconName="Close"
                                        onClick={() => {
                                            removeTag(idx);
                                        }}
                                    />
                                </span>
                            );
                        })}
                        <input type="text" ref={inputRef} />
                        {/* <FormattedIcon
                            name={`${active ? 'TriangleUp' : 'TriangleDown'}`}
                        /> */}
                    </div>
                    <div
                        className={`dropdown-list ${active ? '' : 'invisible'}`}
                        style={{top: dropdownListTop + 'px'}}>
                        {items.map((item, idx1) => {
                            return (
                                <button
                                    key={idx1}
                                    id={`${name}_${item[0]}`}
                                    onClick={() => {
                                        addTags(item);
                                    }}>
                                    {item[0]}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </ClickOutside>
        </>
    );
};

export default Dropdown;
