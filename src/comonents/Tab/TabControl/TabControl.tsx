import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { IButton } from '../../../models/IButton';

export interface ITabControlProps {
  buttons: IButton[],
  onClick: Function
}

const TabControl = (props: ITabControlProps) => {
  return (
    <div className="tab-control">
      <ButtonGroup size="lg">
        {props.buttons.map((button: any) => (
          <Button key={button.query}
            color="success"
            onClick={props.onClick(button.query)}
            active={button.isActive}
          >
            {button.name}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default TabControl;