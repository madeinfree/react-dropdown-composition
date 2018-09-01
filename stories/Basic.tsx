import React from 'react';
import {
  DropdownMenu,
  DropdownBlock,
  DropdownMenuBlock,
  DropdownHeaderWrapper,
  DropdownMenuWrapper,
  DropdownMenuBlockWrapper,
  DropdownFlexSpaceBetween
} from '../src';

const items = [
  { key: '0', value: '0', text: 'ALL' },
  { key: '1', value: '1', text: 'Products' },
  { key: '2', value: '2', text: 'Category' }
];

class Basic extends React.PureComponent {
  render() {
    return (
      <DropdownMenu onChange={({ key }) => console.log(key)} items={items} defaultKey="0">
        {() => (
          <div>
            <DropdownBlock>
              {({ handleOpenBlock, isOpen, value }) => (
                <div
                  style={{ padding: 10, width: 190, border: '1px solid #ccc' }}
                  onClick={handleOpenBlock}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>{value}</div>
                    <div>{isOpen ? '^' : 'v'}</div>
                  </div>
                </div>
              )}
            </DropdownBlock>
            <DropdownMenuBlock>
              {({ isOpen, items, handleChangeValue }) =>
                isOpen && (
                  <DropdownMenuWrapper>
                    {items.map((item, index) => (
                      <DropdownMenuBlockWrapper
                        onClick={() => handleChangeValue(item.key)}
                        isLast={index + 1 === items.length}
                        isOpen={isOpen}
                        key={index}
                      >
                        {item.text}
                      </DropdownMenuBlockWrapper>
                    ))}
                  </DropdownMenuWrapper>
                )
              }
            </DropdownMenuBlock>
          </div>
        )}
      </DropdownMenu>
    );
  }
}

export default Basic;
