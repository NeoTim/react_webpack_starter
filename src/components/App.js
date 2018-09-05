import React, { Component } from "react";
import Icon from "../images/1.png";

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App</h1>
                <button type="button" class="btn btn-default" aria-label="Left Align">
                    <span class="glyphicon glyphicon-align-left" aria-hidden="true" />
                    测试加载字体文件
                </button>
                <img src={Icon} />
            </div>
        );
    }
}
export default App;
