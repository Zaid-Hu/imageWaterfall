import React from 'react';

class WFSearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field input">
                        <label>enter a term:</label>
                        <input 
                            tyepe="text"
                            value={this.state.term}
                            onChange={ e => this.setState({term: e.target.value})}
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default WFSearchBar;