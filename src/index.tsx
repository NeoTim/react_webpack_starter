import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Topics from "./components/Topics";
import Settings from "./components/Settings";

import "./styles/index.scss";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li>
                            <Link to="/topics">文章</Link>
                        </li>
                        <li>
                            <Link to="/settings">设置</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/topics" component={Topics} />
                    <Route path="/settings" component={Settings} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
export default App;
