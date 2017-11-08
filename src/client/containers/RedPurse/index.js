import React from 'react';
import 'flexiblejs';
import Styles from './style.scss';
import { connect } from 'react-redux';
// import {apiGetBook} from 'api/actions';

export class RedPurse extends React.Component {
  componentDidMount() {
    // setTimeout(() => this.props.apiGetBook(this.props.match.params.id), 1000);
  }

  static defaultProps = {

  }

  isWeixinBrowser(){
    let ua = navigator.userAgent.toLowerCase();
    return (/micromessenger/.test(ua)) ? true : false ;
  }

  render() {
<<<<<<< HEAD
    if (!this.isWeixinBrowser()) {
        return '请在微信或在QQ浏览器中打开';
    }
=======
    // if (!this.isWeixinBrowser()) {
    //     return '请在微信或在QQ浏览器中打开';
    // }
>>>>>>> e6ac5b9866b37fa35687f5f13b3c345e0e42fd3a
    const arr = [1, 2, 3];
    const items = arr.map((item, index) => {
      return (
        <div className={Styles.item}>
          <img />
          <div className={Styles.itemContent}>
            <p>随风而去</p>
            <p>2017-10-23 10:09:52</p>
          </div>
          <div className={Styles.gold}>
            <span>500</span>金币
          </div>
      </div>
      );
    });
    return (
      <div className={Styles.page}>
        <div className={Styles.banner}></div>
        <div className={Styles.winningOutcome}>
          <div className={Styles.outcomeWrap}>
            <div className={Styles.ticket}>
              <div className={Styles.gold}>
                <span>500</span>金币
              </div>
              <div className={Styles.border}></div>
              <div className={Styles.msgWrap}>
                  <p>拼手气红包</p>
                  <p>金币已放至账户</p>
              </div>
            </div>
            <div className={Styles.reminder}>登录App即可使用</div>
          </div>
        </div>
        <div className={Styles.useBtnWrap}>
          <button>立即使用</button>
        </div>
        <div className={Styles.container}>
          <div className={Styles.titleWrap}>
            <span>看朋友们手气如何</span>
            <div className={Styles.horizonSeparate}></div>
          </div>
          <div className={Styles.content}>
            {items}
          </div>
        </div>
        <div className={Styles.container}>
          <div className={Styles.titleWrap}>
            <span>活动细则</span>
            <div className={Styles.horizonSeparate}></div>
          </div>
          <div className={Styles.content}>
            <p>1.  每位用户每天至多可以领取20次红包。</p>
            <p>2. 使用红包的账户需为抢红包时使用的微信账户。</p>
            <p>3. 发放至幸运抓娃娃账户的金币红包登录后即可使用。</p>
            <p>4. 幸运抓娃娃保留法律范围内允许的对活动的解释权。</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // book: state.api.get('book'),
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RedPurse);
