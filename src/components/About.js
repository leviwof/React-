import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor called");
    }

    componentDidMount() {
        console.log("Parent Component did mount called");
    }
    render() {
        console.log("Parent Render called");
        return (
            <div className=" flex felx-col justify-center items-center gap-10">
                <h1 className="text-bold text-black text-3xl">About Us {("->")}</h1>
                <p className="text-bold text-2xl"> Lets see what you can know about us {("=>")}</p>
                <User />
                <UserClass nameh={"First"} age={24} location={"Mumbai"} />
                <UserClass nameh={"Second"} age={24} location={"Mumbai"} />
                <UserClass nameh={"Third"} age={24} location={"Mumbai"} />
            </div>
        )
    }
}

export default About;