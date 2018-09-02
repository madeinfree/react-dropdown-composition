import React from 'react';
import { default as styled, css } from 'styled-components';
import { DropdownMenu, DropdownBlock, DropdownMenuBlock, DropdownMenuWrapper } from '../src';

type BackgroundMenuProps = {
  width?: string;
  height?: string;
  isOpen?: boolean;
  isLast?: boolean;
  onClick?: () => void;
};
const BackgroundMenu = styled.div<BackgroundMenuProps>`
  ${({ width, height, isOpen, isLast }) => css`
    user-select: none;
    cursor: pointer;
    background-color: #ccc;
    border: 1px solid #ccc;
    border-top: none;
    ${isOpen && !isLast ? 'border-bottom: none' : ''};
    ${isOpen ? '' : 'border-radius: 5px'};
    ${isLast && 'border-radius: 0px 0px 5px 5px'};
    width: ${width || '200px'};
    height: ${height || '40px'};
    padding-left: 10px;
    padding-top: 10px;
  `};
`;

const items = [
  { key: '0', value: 'ALL', text: 'ALL' },
  { key: '1', value: '1', text: 'Products' },
  { key: '2', value: '2', text: 'Category' }
];

class Background extends React.PureComponent {
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
                      <BackgroundMenu
                        onClick={() => handleChangeValue(item.key)}
                        isLast={index + 1 === items.length}
                        isOpen={isOpen}
                        key={index}
                      >
                        {item.text}
                      </BackgroundMenu>
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

export default Background;
