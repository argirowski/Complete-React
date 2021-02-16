import React, { useState } from 'react';
import Route from './components/Route';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';

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

//inefficient way of routing
// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />;
//   }
// };

// const showList = () => {
//   if (window.location.pathname === '/list') {
//     return <Search items={items} />;
//   }
// };
// const showDropdown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown items={items} />;
//   }
// };
// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate items={items} />;
//   }
// };

export default () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
      {/* {showAccordion()} {showList()} {showDropdown()} {showTranslate()} */}
    </div>
  );
};
