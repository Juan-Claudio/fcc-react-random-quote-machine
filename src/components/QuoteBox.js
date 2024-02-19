import React from "react";
import './dist/QuoteBox.css';

export default class QuoteBox extends React.Component
{
    constructor(props)
    {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.getNewQuote()
    }

    render()
    {
        return (
            <div className="container-fluid d-flex flex-column justify-content-around p-4 rounded rounded-4" id="quote-box">
                
                {/* quote text row*/}
                <div className="row">
                    <div className="col-xs-10">
                        <div className="text-center fs-3" id="text">
                            <i className="fas fa-quote-left"></i>
                            <b>{this.props.currentQuote.text}</b>
                        </div>
                    </div>
                </div>

                {/* author row */}
                <div className="row">
                    <div className="col-xs-10 mb-5">
                        <div className="text-end" id="author"><em>- {this.props.currentQuote.author}</em></div>
                    </div>
                </div>

                {/* buttons row */}
                <div className="row">
                    <div className="col-xs-10  d-flex justify-content-around">
                        <button className="btn btn-light" id="tweet-quote"><i class="fab fa-twitter"></i></button>
                        <button className="btn btn-light" id="new-quote" onClick={this.handleClick}>New quote</button>
                    </div>
                </div>

            </div>
        )
    }
}