import React from 'react';
import { DropdownMenu, DropdownBlock, DropdownMenuBlock } from '../src';

const items = [
  { key: '0', value: 'ALL', text: 'ALL' },
  { key: '1', value: '1', text: 'Products' },
  { key: '2', value: '2', text: 'Category' }
];

const Normal = () => (
  <DropdownMenu items={items} onChange={({ key }) => console.log(key)} defaultKey="0">
    {() => (
      <div>
        <DropdownBlock>
          {({ value, handleOpenBlock }) => <div onClick={handleOpenBlock}>{value}</div>}
        </DropdownBlock>
        <DropdownMenuBlock>
          {({ isOpen, items, handleChangeValue }) =>
            isOpen
              ? items.map((item, index) => (
                  <div onClick={() => handleChangeValue(item.key)} key={index}>
                    {item.text}
                  </div>
                ))
              : null
          }
        </DropdownMenuBlock>
      </div>
    )}
  </DropdownMenu>
);

export default Normal;
