import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <ReactPageScroller ref={c => this.reactPageScroller = c}>
                    <div className="block" style={{backgroundColor: 'red'}}></div>
                    <div className="block" style={{backgroundColor: 'green'}}></div>
                </ReactPageScroller>
            </div>
        );
    }
}

export default Home;