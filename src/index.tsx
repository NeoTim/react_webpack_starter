import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles/index.scss";
import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ "./components/Home"),
    loading: Loading
});

const Topics = Loadable({
    loader: () => import(/* webpackChunkName: "topics" */ "./components/Topics"),
    loading: Loading
});

const Settings = Loadable({
    loader: () => import(/* webpackChunkName: "settings" */ "./components/Settings"),
    loading: Loading
});

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
