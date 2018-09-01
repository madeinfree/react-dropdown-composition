import React from 'react';

export const DropdownContext = React.createContext({
  value: '',
  isOpen: false,
  items: [] as Item[],
  handleChangeValue: (value: string) => {},
  handleOpenBlock: () => {}
});
type Item = {
  key: string;
  value: string;
  text: string;
};
type Props = {
  defaultKey: string | number;
  onChange: (payload: { key: string | number }) => void;
  items: Item[];
};
type State = {
  value: string;
  key: string | number;
  items: Item[];
  isOpen: boolean;
  handleChangeValue: (value: string) => void;
  handleOpenBlock: () => void;
  handleChangePosition: (x: number, y: number) => void;
  x: number;
  y: number;
};
class DropdownStore extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const getItem = props.items.filter(item => item.key === props.defaultKey)[0];
    this.state = {
      value: getItem.text,
      key: getItem.key,
      isOpen: false,
      items: props.items,
      handleChangeValue: this.handleChangeValue,
      handleOpenBlock: this.handleOpenBlock,
      handleChangePosition: this.handleChangePosition,
      x: 0,
      y: 0
    };
  }
  handleChangeValue = (key: string) => {
    const getItem = this.state.items.filter(item => item.key === key)[0];
    this.setState(_ => ({
      value: getItem.text,
      key: getItem.key,
      isOpen: false
    }));
  };
  handleOpenBlock = () => {
    this.setState(_ => ({
      isOpen: !this.state.isOpen
    }));
  };
  componentDidUpdate(_: Props, prevState: State) {
    if (this.state.value !== prevState.value) {
      this.props.onChange({
        key: this.state.key
      });
    }
  }
  handleChangePosition(x: number, y: number) {
    this.setState(_ => ({
      x,
      y
    }));
  }
  render() {
    return (
      <DropdownContext.Provider value={this.state}>{this.props.children}</DropdownContext.Provider>
    );
  }
}

export default DropdownStore;
