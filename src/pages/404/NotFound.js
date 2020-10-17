import React, {Component} from 'react';
import './NotFound.scss';
import PrimaryButton from "../../components/buttons/primary_button/PrimaryButton";



const quotes = [
    {
        author: "J.R.R. Tolkien",
        quote: "Not all those who wander are lost"
    },
    {
        author: "Mandy Hale",
        quote: "Sometimes when you lose your way, you find YOURSELF."
    },
    {
        author: "Mandy Hale",
        quote: "Sometimes it takes a wrong turn to get you to the right place"
    },
    {
        author: "Karl Ove Knausgård",
        quote: "Go somewhere you know nothing about and see what happens"
    },
    {
        author: "JaTawny Muckelvene Chatmo",
        quote: "The Truth is, we all get lost as we try to find our way. Perhaps the key is to stop, take a look around and enjoy the scenery as we go"
    },
    {
        author: "Vironika Tugaleva",
        quote: "It is not how many times we get lost, but how many times we seek the path, again and again, that determines our level of consciousness."
    },
    {
        author: "Henry David Thoreau",
        quote: "Not until we are lost do we begin to understand ourselves."
    }
];


class NotFound extends Component {
    state = {
        index: 0,
    };

    componentDidMount() {
        this.setState({
            ...this.state,
            index: Math.floor(Math.random() * (quotes.length))
        })
    }

    render() {
        const {author, quote} = quotes[this.state.index];
        return (
            <div className="container">
                <div className="error-message">
                    <h1>
                        <strong>Well this is embarrassing!</strong>
                    </h1>
                    <br/>
                    <h3>
                        <q>
                            {quote}
                        </q>
                    </h3>
                    <h5>~ {author}</h5>

                    <div className="bottom-right">
                        <a href="/">
                            <PrimaryButton text={'Go Home'}  />
                        </a>
                    </div>
                </div>

                <div className="bottom-right">
                    <a href='https://www.freepik.com/vectors/business'>Vector Source: Freepik</a>
                </div>
            </div>
        );
    }
}

export default NotFound;
