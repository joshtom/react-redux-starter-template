import React, {Component} from 'react';
import '../Buttons.scss';

class PrimaryButton extends Component {
    render() {
        const {text} = this.props;
        return (
            <button className={'btn primary'}>{text}</button>
        );
    }
}

export default PrimaryButton;