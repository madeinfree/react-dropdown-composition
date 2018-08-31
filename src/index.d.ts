import React from 'react';
import {
  ThemedBaseStyledInterface,
  ThemedStyledFunction
} from 'styled-components';

type Item = {
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
type DropdownBlockProps = {
  children: (
    value: { value: string; handleOpenBlock: () => void; isOpen: boolean }
  ) => React.ReactNode;
};
type DropdownMenuBlock = {
  children: (
    value: {
      handleChangeValue: (value: string) => void;
      isOpen: boolean;
      items: Item[];
    }
  ) => React.ReactNode;
};
type DropdownHeaderWrapperProps = {
  width?: string;
  height?: string;
  isOpen?: boolean;
  onClick?: Function;
};
type DropdownMenuWrapperProps = {
  top?: string;
};
type DropdownMenuBlockWrapperProps = {
  width?: string;
  height?: string;
  isOpen?: boolean;
  isLast?: boolean;
  onClick?: Function;
};

export class DropdownMenu extends React.PureComponent<DropdownMenuProps> {}
export const DropdownBlock: React.StatelessComponent<DropdownBlockProps>;
export const DropdownMenuBlock: React.StatelessComponent<DropdownMenuBlock>;
export const DropdownHeaderWrapper: () => React.PureComponent<
  DropdownHeaderWrapperProps
>;
export const DropdownMenuWrapper: () => React.PureComponent<
  DropdownMenuWrapperProps
>;
export const DropdownMenuBlockWrapper: () => React.PureComponent<
  DropdownMenuBlockWrapperProps
>;
export const DropdownFlexSpaceBetween: () => React.PureComponent<{}>;
