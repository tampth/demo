import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor"


class MyComponent extends React.Component {

    render() {
        return (
            <div>
                <UserInfor />
                <br/>
                <br/>
                <DisplayInfor name="Tam" age="24"/>
            </div>
        );
    }
}

export default MyComponent;