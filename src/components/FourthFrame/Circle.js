import React, {Component} from "react";
import cn from 'classnames';

class Circle extends Component {
    state = {
        containerNumber : this.props.number,
    };
    changeContainer = () => {
        this.props.changeContainer(this.state.containerNumber)
    };

    render() {
        return (
            <div className={cn('circle',{
                'circle-chose': this.state.containerNumber === this.props.containerNumber
            })}
                 onClick={this.changeContainer}
            />
        );
    }
}

export default Circle;