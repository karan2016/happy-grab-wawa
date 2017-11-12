import React from 'react';
import 'flexiblejs';
import Styles from './style.scss';

class RedPurseItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        
        return (
            <div className={Styles.item}>
                <img src={data.imgSrc}/>
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

export default RedPurseItem;