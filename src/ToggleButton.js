import React from 'react'

class ToggleButton extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    handClick(e) {
        e.preventDefault();
        this.setState(state => {
            return {isToggleOn: state.isToggleOn ? false : true};
        }) 
    }
    render() {
        return (
            <div>
                <button 
                onClick={() =>alert('hello')}>
                Hello
              </button>
              <a href="#page" onClick={this.handClick}>Page</a>
            </div>
    
        );
    }
   
}

export default ToggleButton;
