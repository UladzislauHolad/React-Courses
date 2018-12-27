import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { IButton } from '../../../models/IButton';


interface ITabControlProps {
  buttons: IButton[],
  onClickHandler: Function
}

const TabControl = (props: ITabControlProps) => {
  return (
    <div className="tab-control">
      <ButtonGroup size="lg">
        {props.buttons.map((button: any) => (
          <Button key={button.query}
            color="success"
            onClick={props.onClickHandler(button.query)}
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