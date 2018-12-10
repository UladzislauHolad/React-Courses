import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class TabControl extends React.Component {
    constructor(props) {
        super(props);

    }

    onClick(a) {
        this.props.onClick(a);
    }

    render() {
        return (
            <div className="tab-control">
                <ButtonGroup size="lg">
                    {this.props.buttons.map((button) => (
                        <Button key={button.query} 
                            color="success" 
                            onClick={() => this.onClick(button.query)} 
                            active={button.isActive}
                        >
                            {button.name}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
        );
    }
}

export default TabControl;