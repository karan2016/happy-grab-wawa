import React from 'react';
import Styles from './style.scss';

export class Rank extends React.Component {
    


    render() {
        const ranks = [
            {'rank': 1, 'exp': 0},
            {'rank': 2, 'exp': 30},
            {'rank': 3, 'exp': 70},
            {'rank': 4, 'exp': 120},
            {'rank': 5, 'exp': 200},
            {'rank': 6, 'exp': 300},
            {'rank': 7, 'exp': 430},
            {'rank': 8, 'exp': 610},
            {'rank': 9, 'exp': 810},
            {'rank': 10, 'exp': 1050},
            {'rank': 11, 'exp': 1300},
            {'rank': 12, 'exp': 1700},
            {'rank': 13, 'exp': 2100},
            {'rank': 14, 'exp': 2550},
            {'rank': 15, 'exp': 3060},
            {'rank': 16, 'exp': 3660},
            {'rank': 17, 'exp': 4360},
            {'rank': 18, 'exp': 5140},
            {'rank': 19, 'exp': 5990},
            {'rank': 20, 'exp': 6870},
            {'rank': 21, 'exp': 7790},
            {'rank': 22, 'exp': 8770},
            {'rank': 23, 'exp': 9820},
            {'rank': 24, 'exp': 10940},
            {'rank': 25, 'exp': 12190},
            {'rank': 26, 'exp': 13690},
            {'rank': 27, 'exp': 15390},
            {'rank': 28, 'exp': 17240},
            {'rank': 29, 'exp': 19340},
            {'rank': 30, 'exp': 21790}
        ];

        const RankItems = ranks.map((item, index) => {
            return (
                <li key={index}>
                    <div>{item.rank}</div>
                    <div>{item.exp}</div>
                </li>
            );
        });

        return (
        <div>
            <ul>
                <li className={Styles.title}>
                    <div>等级</div>
                    <div>累计经验</div>
                </li>
                {RankItems}
            </ul>
        </div>);
    }
}

export default Rank;
