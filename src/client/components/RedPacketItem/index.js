import React from 'react';
import 'flexiblejs';
import Styles from './style.scss';

class RedPacketItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defalutImgSrc: 'http://ozak7cmqk.bkt.clouddn.com/default-avatar.png'
        }
    }

    render() {
        const data = this.props.data;
        const imgSrc = data.imgSrc ? data.imgSrc : this.state.defalutImgSrc;

        return (
            <div className={Styles.item}>
                <img src={imgSrc}/>
                <div className={Styles.itemContent}>
                    <p>{data.username}</p>
                    <p>{data.time}</p>
                </div>
                <div className={Styles.gold}>
                    <span>{data.gold}</span>金币
                </div>
            </div>
        );
    }
}

export default RedPacketItem;