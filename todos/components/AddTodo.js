/**
 * Created by honoka on 16/4/12.
 */
"use strict";
import React, { findDOMNode, Component, PropTypes } from 'react';
var ReactDom = require('react-dom');

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="input" />
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        );
    }
    handleClick(e) {
        const node = ReactDom.findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}