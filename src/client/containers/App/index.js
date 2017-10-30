import React from 'react';
import Styles from './style.scss';

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hello, zhichen</h1>
        <div className={Styles.pageHeader}>great</div>
      </div>
    );
  }
}

export default App;
