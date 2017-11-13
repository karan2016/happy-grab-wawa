import React from 'react';

class GotoRedPacket extends React.Component {
    componentWillMount() {
        let storage = window.localStorage;
        console.log(this.props);
        console.log(storage.getItem('openId'));
        window.location = 'http://localhost:3000/red-packet/' + storage.getItem('openId');
    }

    render() {
        return (<h1></h1>);
    }
}

export default GotoRedPacket;