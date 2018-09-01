import React from 'react';
import DropdownStore, { DropdownContext } from './Context';
import { default as styled, css } from 'styled-components';

type DropdownHeaderWrapperProps = {
  width?: string;
  height?: string;
  isOpen?: boolean;
};
type DropdownHeaderUpperWrapperProps = {
  width?: string;
  height?: string;
  isOpen?: boolean;
  isLast?: boolean;
};
type DropdownMenuBlockWrapperProps = {
  width?: string;
  height?: string;
  isOpen?: boolean;
  isLast?: boolean;
};
type DropdownMenuBlockUpperWrapperProps = {
  width?: string;
  height?: string;
  isOpen?: boolean;
  isFirst?: boolean;
};
type DropdownMenuWrapperProps = {
  top?: string;
};

export const DropdownHeaderWrapper = styled.div`
  ${({ width, height, isOpen }: DropdownHeaderWrapperProps) => css`
    user-select: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid #ccc;
    ${isOpen ? 'border-bottom: none' : ''};
    ${isOpen ? 'border-radius: 5px 5px 0px 0px' : 'border-radius: 5px'};
    width: ${width || '200px'};
    height: ${height || '40px'};
    padding-left: 10px;
    padding-top: 10px;
  `};
`;

export const DropdownHeaderUpperWrapper = styled.div`
  ${({ width, height, isOpen }: DropdownHeaderUpperWrapperProps) => css`
    user-select: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid #ccc;
    ${isOpen ? 'border-top: none' : ''};
    ${isOpen ? 'border-radius: 0px 0px 5px 5px' : 'border-radius: 5px'};
    width: ${width || '200px'};
    height: ${height || '40px'};
    padding-left: 10px;
    padding-top: 10px;
  `};
`;

export const DropdownMenuWrapper = styled.div`
  ${({ top }: DropdownMenuWrapperProps) => css`
    ${top ? (top ? `top: ${top}` : 'top: 0px') : ''};
  `};
  z-index: 99;
  position: absolute;
`;

export const DropdownMenuBlockWrapper = styled.div`
  ${({ width, height, isOpen, isLast }: DropdownMenuBlockWrapperProps) => css`
    user-select: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 1);
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

export const DropdownMenuBlockUpperWrapper = styled.div`
  ${({ width, height, isOpen, isFirst }: DropdownMenuBlockUpperWrapperProps) => css`
    user-select: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid #ccc;
    border-bottom: none;
    ${isOpen && !isFirst ? 'border-top: none' : ''};
    ${isOpen ? '' : 'border-radius: 5px'};
    ${isFirst && 'border-radius: 5px 5px 0px 0px'};
    width: ${width || '200px'};
    height: ${height || '40px'};
    padding-left: 10px;
    padding-top: 10px;
  `};
`;

export const DropdownFlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

/**
 * DropDown Core
 */

export type Item = {
  key: string;
  value: string;
  text: string;
};
type DropdownMenuProps = {
  defaultKey?: string | number;
  onChange: (payload: { key: string | number }) => void;
  items: Item[];
  children: () => React.ReactNode;
};
export class DropdownMenu extends React.PureComponent<DropdownMenuProps> {
  constructor(props: DropdownMenuProps) {
    super(props);
  }
  render() {
    return (
      <DropdownStore
        onChange={this.props.onChange}
        defaultKey={this.props.defaultKey || ''}
        items={this.props.items}
      >
        <DropdownContext.Consumer>{_ => this.props.children()}</DropdownContext.Consumer>
      </DropdownStore>
    );
  }
}

type DropdownBlockProps = {
  children: (
    value: { value: string; handleOpenBlock: () => void; isOpen: boolean }
  ) => React.ReactNode;
};
export const DropdownBlock: React.StatelessComponent<DropdownBlockProps> = props => (
  <DropdownContext.Consumer>{value => props.children(value)}</DropdownContext.Consumer>
);

type DropdownMenuBlock = {
  children: (
    value: {
      handleChangeValue: (value: string) => void;
      isOpen: boolean;
      items: Item[];
    }
  ) => React.ReactNode;
};
export const DropdownMenuBlock: React.StatelessComponent<DropdownMenuBlock> = props => (
  <DropdownContext.Consumer>{value => props.children(value)}</DropdownContext.Consumer>
);
