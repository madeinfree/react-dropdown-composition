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

[![Edit lrvr6qlrnz](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/lrvr6qlrnz)

```jsx
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

## Core Component

The Core Component is implement the Context API store and other change state handler by three Component

### Sample like:

- [Component]
  - [...props]

### DropdownMenu

The initial Component, that can set the default items, handler, default key.

- DropdownMenu
  - onChange: ({key: string}) => Function [required]
  - items: Array<{ key: string, value: string, text: string }> [required]
  - defaultKey: string [required]

### DropdownBlock

The Function as Children Component, will call the children and input open block handler, open state and value

- DropdownBlock

```js
({
  /**
   * type Function
   * [Internal function handler]
   * */
  handleOpenBlock,

  /**
   * type boolean
   * dropdown open state
   * */
  isOpen,

  /**
   * type boolean
   * text
   * */
  value
}) => ReactNode;
```

### DropdownMenuBlock

- DropdownMenuBlock

```js
({
  /**
   * type boolean
   * the dropdown open state
   * */
  isOpen,

  /**
   * type Array<{ key: string, value: string, text: string }>
   * return origin items
   * */
  items,

  /**
   * type (key: string) => void;
   * return internal handler for change key/value
   * */
  handleChangeValue
}) => ReactNode;
```

## Helper Component

When you would like to use dropdown easily, we prepare some simple Component for you to handle UI.

-

## License

MIT
