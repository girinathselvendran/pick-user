import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";
import "./ChipInput.css";

interface UserContact {
  name: string;
  email: string;
  image: string;
}

interface ChipInputProps {
  userContacts: UserContact[];
}

const ChipInput: React.FC<ChipInputProps> = ({ userContacts }) => {
  const [data, setData] = useState<UserContact[]>(userContacts);
  const [inputValue, setInputValue] = useState<string>("");
  const [chips, setChips] = useState<UserContact[]>([]);
  const [highLightInput, setHighLightInput] = useState<number | null>(null);
  const [hitBackButton, setHitBackButton] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [chips]);

  useEffect(() => {
    const handleFocusChange = () => {
      if (document.activeElement === inputRef.current) {
        setIsFocused(document.activeElement === inputRef.current);
      } else {
        setTimeout(() => {
          setIsFocused(document.activeElement === inputRef.current);
        }, 300);
      }
    };

    document.addEventListener("focusin", handleFocusChange);
    document.addEventListener("focusout", handleFocusChange);

    return () => {
      document.removeEventListener("focusin", handleFocusChange);
      document.removeEventListener("focusout", handleFocusChange);
    };
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const selectedDataItem = data.find((item) => item.email === value);

    const filteredUsers = userContacts?.filter(
      (user) =>
        !chips.some((chip) => chip.email === user.email) &&
        (user.name.toLowerCase().includes(value.toLowerCase()) ||
          user.email.toLowerCase().includes(value.toLowerCase()))
    );

    setData(filteredUsers);
    if (selectedDataItem) {
      setInputValue(selectedDataItem.email);
      handleSelection(selectedDataItem);
    }
  };

  const handleSelection = (selectedItem: UserContact) => {
    setChips([...chips, selectedItem]);
    setInputValue("");
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      handleChipAdd();
    }
    if (e.key === "Backspace" && inputValue === "" && chips.length > 0) {
      setHighLightInput(chips.length - 1);

      if (hitBackButton) {
        handleChipRemove(chips.length - 1);
        setHitBackButton(false);
      }
      setHitBackButton(true);
    }
  };

  const handleChipAdd = () => {
    const selectedDataItem = data.find((item) => item.email === inputValue);
    if (selectedDataItem) {
      setChips([...chips, selectedDataItem]);
      setInputValue("");
    }
  };

  const handleChipClick = (chip: UserContact) => {
    setChips(chips.filter((c) => c !== chip));
    setInputValue("");
  };

  const handleChipRemove = (index: number) => {
    setChips(chips.filter((_, i) => i !== index));
    setInputValue("");
    setHitBackButton(false);
  };

  const handleSelectUser = (e: React.MouseEvent, user: UserContact) => {
    setChips([...chips, user]);
    setInputValue("");
  };

  return (
    <div className="chip-input">
      <div className="chips-container">
        {chips.map((chip, index) => (
          <div
            key={index}
            className={`chip ${highLightInput === index ? "highlight-chip" : ""}`}
            onClick={() => handleChipClick(chip)}
          >
            <img src={chip.image} alt="chip" />
            {chip.name}
            <span
              className={`chip-remove ${highLightInput === index ? "highlight-chip-remove" : ""}`}
              onClick={() => handleChipRemove(index)}
            >
              X
            </span>
          </div>
        ))}
        <input
          className="chip-input"
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Add new user..."
        />
      </div>
      <div className={`chipCmp ${isFocused ? "show" : "hide"}`}>
        {data
          ?.filter((item) => !chips.some((chip) => chip.email === item.email))
          .map((item) => (
            <div className="user-info" onClick={(e) => handleSelectUser(e, item)} key={item.email}>
              <img src={item.image} alt="profile" height={"30"} />
              <b>{item.name}</b>
              <span>{item.email}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChipInput;
