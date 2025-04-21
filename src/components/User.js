import { useState } from "react";

const User = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(1)
    return (
        <div className="UserFun">
            <h1> Count1:{count1}</h1>
            <h1>Count2:{count2}</h1>
            <button onClick={() => {
                setCount1(count1 + 1)
                setCount2(count2 + 2)
            }}>Count++</button>
            <h1>Name: Alpha </h1>
            <h2>Age : 34</h2>
            <h2>Location: Mumbai</h2>
        </div>
    )
}

export default User;