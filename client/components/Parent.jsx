import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router'
import MenuNav from './MenuNav'
import Header from './common/Header'

class Parent extends React.Component {
    render(props) {
        return (
            <div>
                <h2>M</h2>
                <MenuNav />
            </div>
        )
    }
}
export default Parent
