import React from 'react';
import { default as styled, css } from 'styled-components';
import {
  DropdownMenu,
  DropdownBlock,
  DropdownMenuBlock,
  DropdownHeaderWrapper,
  DropdownMenuWrapper,
  DropdownFlexSpaceBetween,
  DropdownMenuBlockWrapper
} from '../src';

const LongMenuWrapper = styled.div`
  width: 210px;
  height: 200px;
  overflow: auto;
`;

type Item = {
  key: string;
  text: string;
  value: string;
};
const items: Item[] = [];
for (let i = 0; i < 500; i++) {
  items.push({
    key: i.toString(),
    text: i.toString(),
    value: i.toString()
  });
}

class Long extends React.PureComponent {
  render() {
    return (
      <DropdownMenu onChange={({ key }) => console.log(key)} items={items} defaultKey={'1'}>
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
                  <LongMenuWrapper>
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
                  </LongMenuWrapper>
                )
              }
            </DropdownMenuBlock>
          </div>
        )}
      </DropdownMenu>
    );
  }
}

export default Long;
