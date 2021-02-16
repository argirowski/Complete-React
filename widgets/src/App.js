import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'Bear',
    content: 'The bear is a big and scary animal ... cuddly though',
  },
  {
    title: 'Bunny',
    content: 'Bunnies ... small and fluffy',
  },
  {
    title: 'Doge',
    content: 'A mans best friend',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'Red',
  },
  {
    label: 'The Color Blue',
    value: 'Blue',
  },
  {
    label: 'The Color Green',
    value: 'Green',
  },
];

export default () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <Translate />
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button> */}
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
    </div>
  );
};
