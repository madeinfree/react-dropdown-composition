import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { DropdownMenu, DropdownBlock, DropdownMenuBlock } from '../src';
import { DropdownContext } from '../src/Context';

describe('React Dropdown Composition', () => {
  let tree: ReactWrapper | null;
  let ROOT;
  const items = [
    { key: 'all', value: 'all', text: '顯示：所有商品' },
    { key: 'main-product', value: 'main-product', text: '主商品（10）' },
    { key: 'second-product', value: 'second-product', text: '加購商品（2）' }
  ];

  beforeEach(() => {
    if (!tree) {
      tree = mount(
        <DropdownMenu
          ref={node => (ROOT = node)}
          items={items}
          onChange={({ key }) => console.log(key)}
          defaultKey="all"
        >
          {() => (
            <div>
              <DropdownBlock>
                {({ value, isOpen, handleOpenBlock }) => (
                  <div onClick={handleOpenBlock}>
                    {isOpen ? value : 'not open yet'}
                  </div>
                )}
              </DropdownBlock>
              <DropdownMenuBlock>
                {({ isOpen, items, handleChangeValue }) =>
                  isOpen
                    ? items.map((item, index) => (
                        <div
                          onClick={() => handleChangeValue(item.key)}
                          key={index}
                        >
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
    }
  });
  afterEach(() => {
    tree = null;
  });

  it('render for <DropdownBlock />', () => {
    expect(tree.find(DropdownBlock)).toBeTruthy();
  });

  it('render for <DropdownMenuBlock />', () => {
    expect(tree.find(DropdownMenuBlock)).toBeTruthy();
  });

  it('render <DropdownBlock /> should receive isOpen', () => {
    expect(
      tree
        .find(DropdownBlock)
        .find('div')
        .at(0)
        .text()
    ).toEqual('not open yet');
  });

  it('render <DropdownBlock /> should receive isOpen', () => {
    tree
      .find(DropdownBlock)
      .find('div')
      .at(0)
      .simulate('click');
    expect(
      tree
        .find(DropdownBlock)
        .find('div')
        .at(0)
        .text()
    ).toEqual('顯示：所有商品');
  });

  it('render <DropdownBlock /> click item and change block value', () => {
    tree
      .find(DropdownBlock)
      .find('div')
      .at(0)
      .simulate('click');
    tree
      .find(DropdownMenuBlock)
      .find('div')
      .at(1)
      .simulate('click');
    tree
      .find(DropdownBlock)
      .find('div')
      .at(0)
      .simulate('click');
    expect(
      tree
        .find(DropdownBlock)
        .find('div')
        .at(0)
        .text()
    ).toEqual('主商品（10）');
  });

  it('render <DropdownMenuBlock /> without items when isOpen false', () => {
    expect(tree.find(DropdownMenuBlock).find('div')).toHaveLength(0);
  });

  it('render <DropdownMenuBlock /> when click then auto close menu, change isOpen to false', () => {
    tree
      .find(DropdownBlock)
      .find('div')
      .at(0)
      .simulate('click');
    tree
      .find(DropdownMenuBlock)
      .find('div')
      .at(0)
      .simulate('click');
    expect(tree.find(DropdownBlock).text()).toEqual('not open yet');
  });

  it('render <DropdownMenuBlock /> outer 1 div and inner 3 items when isOpen true', () => {
    tree
      .find(DropdownBlock)
      .find('div')
      .at(0)
      .simulate('click');
    expect(
      tree
        .find(DropdownMenuBlock)
        .find('div')
        .at(0)
        .text()
    ).toEqual('顯示：所有商品');
    expect(
      tree
        .find(DropdownMenuBlock)
        .find('div')
        .at(1)
        .text()
    ).toEqual('主商品（10）');
    expect(
      tree
        .find(DropdownMenuBlock)
        .find('div')
        .at(2)
        .text()
    ).toEqual('加購商品（2）');
  });
});
