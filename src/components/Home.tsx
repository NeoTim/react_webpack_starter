import React, { Component } from "react";
import * as Img from "../images/1.png";

class Home extends Component<any, {}> {
    render(): JSX.Element {
        return (
            <div>
                <h1>My React Home</h1>
                <button type="button" className="btn btn-default" aria-label="Left Align">
                    <span className="glyphicon glyphicon-align-left" aria-hidden="true" />
                    测试加载字体文件1111
                </button>
                <img src={Img.default} />
            </div>
        );
    }
}

export default Home;
