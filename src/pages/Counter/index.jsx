import React, { Component } from "react";
import { connect } from "react-redux";
import {
  decreaseValue,
  increaseValue,
} from "../../redux/actions/counterActions";

class CounterPage extends Component {
  render() {
    const value = this.props.value;
    const { decreaseValue, increaseValue } = this.props;

    return (
      <React.Fragment>
        <div className="counter-class">
          <div className="counter-class__container">
            <div
              onClick={decreaseValue}
              className="counter-class__container--leftArrow"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30.725"
                height="30.725"
              >
                <path d="M24.078 26.457a2.5 2.5 0 01-1.77 4.267 2.497 2.497 0 01-1.768-.731L5.914 15.362 20.543.732a2.499 2.499 0 113.535 3.536L12.984 15.362l11.094 11.095z" />
              </svg>{" "}
            </div>
            <div className="counter-class__container--box">{value}</div>
            <div
              onClick={increaseValue}
              className="counter-class__container--rightArrow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30.729"
                height="30.729"
              >
                <path d="M24.813 15.366L10.185 29.997a2.494 2.494 0 01-1.768.731 2.5 2.5 0 01-1.769-4.267l11.095-11.096L6.649 4.268A2.501 2.501 0 0110.185.732l14.628 14.634z" />
              </svg>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  value: counter.value,
});

const mapDispatchToProps = {
  decreaseValue,
  increaseValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
