import React from 'react'

class ToggleButton extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
       // this.handClick = this.handClick.bind(this);
    }

    handClick = (value, e) => {
        console.log(e);
        
        this.setState(state => {
            return {isToggleOn: state.isToggleOn ? false : true};
        }) 
    }
    render() {
        return (
            <div>
                <button 
                onClick={() => this.handClick('some value')}>
                {this.state.isToggleOn?'ON': 'OFF'}
              </button>
            
            </div>
    
        );
    }
   
}

export default ToggleButton;
