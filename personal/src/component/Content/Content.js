import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import './Content.css'
import Aside from './../Aside/Aside'
import Index from './../module/Index/Index'
class Content extends React.Component{
    state = {

    };
    render() {
        return  (
            <div className="content">
                <Aside></Aside>
                <Route path='/' exact component = {Index}></Route>
            </div>
        )
    }
}

export default Content;