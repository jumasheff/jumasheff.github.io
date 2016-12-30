import React, { PropTypes, Component } from 'react';
import Markdown from 'react-mark';

export default class Post extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired
    };

    render() {
        const text = require('../posts/Жалпы/test.md');
        return (
            <Markdown text={text} />
        )
    }
}
