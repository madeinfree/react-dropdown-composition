# React Dropdown Composition

React flexible dropdown menu by function as children component pattern ⭐️⭐️⭐️

## Installation

```
> yarn add react-dropdown-composition
```

## peerDeps

- react
- styled-components

## Example

```tsx
import React from 'react';
import {
  DropdownMenu,
  DropdownBlock,
  DropdownMenuBlock,
  DropdownHeaderWrapper,
  DropdownMenuWrapper,
  DropdownMenuBlockWrapper,
  DropdownFlexSpaceBetween
} from 'react-dropdown-composition';

const DropdownItems = [
  { key: 'all', value: 'AL', text: '顯示：所有商品' },
  { key: 'main-product', value: 'main-product', text: '主商品（10）' },
  { key: 'second-product', value: 'second-product', text: '加購商品（2）' }
];

const DropdownMenu: React.StatelessComponent<{}> = () => (
  <DropdownMenu
    onChange={({ key }) => console.log(key)}
    items={DropdownItems}
    defaultKey="all"
  >
    {() => (
      <div>
        <DropdownBlock>
          {({ handleOpenBlock, isOpen, value }) => (
            <DropdownHeaderWrapper isOpen={isOpen} onClick={handleOpenBlock}>
              <DropdownFlexSpaceBetween>
                {value}
                {isOpen ? <Icon name="angle up" /> : <Icon name="angle down" />}
              </DropdownFlexSpaceBetween>
            </DropdownHeaderWrapper>
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
```

## License

MIT
