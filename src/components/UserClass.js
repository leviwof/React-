import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // console.log("Constructor called");
        this.state = {
            count1: 0,
            count2: 1
        }
        console.log(this.props.nameh + "Child Constructor called");
    }

    componentDidMount() {
        console.log(this.props.nameh + "Child Component did mount called");
    }
    render() {
        console.log(this.props.nameh + "Child Render called");
        const { nameh, age, location } = this.props;
        const { count1, count2 } = this.state;

        return (

            <div className="UserFun">
                <h1>Count1:{count1}</h1>
                <h1>Count2:{count2}</h1>
                <button onClick={() => {
                    this.setState({
                        count1: this.state.count1 + 1,
                        count2: this.state.count2 + 1
                    })
                }}>Count++</button>
                <h1> Name:{nameh}</h1>
                <h2> Age:{age}</h2>
                <h2>Location:{location}</h2>
            </div>
        )
    }
}

export default UserClass;