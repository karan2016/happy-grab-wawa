import React from 'react';
import 'flexiblejs';
import Styles from './style.scss';
import { connect } from 'react-redux';
// import {apiGetBook} from 'api/actions';
import RedPurseItem from '../../components/RedPurseItem';
require('./linkedme');

export class RedPurse extends React.Component {
  componentDidMount() {
    // setTimeout(() => this.props.apiGetBook(this.props.match.params.id), 1000);

    linkedme.init("e0f606662bb1708fd968a6bf017fc044", null, null);
    let data = {};
    data.type = "test";  //表示现在使用线上模式,如果填写"test", 表示测试模式.【可选】
    data.feature = "功能名称"; // 自定义深度链接功能，多个名称用逗号分隔，【可选】
    data.stage = "阶段名称"; // 自定义深度链接阶段，多个名称用逗号分隔，【可选】
    data.channel = "渠道名称"; // 自定义深度链接渠道，多个名称用逗号分隔，【可选】
    data.tags = "标签名称"; // 自定义深度链接标签，多个名称用逗号分隔，【可选】
    data.ios_custom_url = ""; // 自定义iOS平台下App的下载地址，如果是AppStore的下载地址可以不用填写，【可选】
    data.ios_direct_open = ""; //未安装情况下，设置为true为直接打开ios_custom_url，默认为false【可选】
    data.android_custom_url = "";// 自定义安卓平台下App的下载地址，【可选】
    data.android_direct_open = ""; //设置为true，所有情况下跳转android_custom_url，默认为false【可选】
    // 下面是自定义深度链接参数，用户点击深度链接打开app之后，params的参数会通过LinkedME服务器透传给app，由app根据参数进行相关跳转
    // 例如：详情页面的参数，写入到params中，这样在唤起app并获取参数后app根据参数跳转到详情页面
    var value1 = 1;
    var value2 = 2;
    data.params = '{"key1":"' + value1 + '","key2":"' + value2 + '"}'; //注意单引号和双引号的位置
    linkedme.link(data, function (err, response) {
      if (err) {
        // 生成深度链接失败，返回错误对象err
        console.log(err);
      } else {
        // 生成深度链接成功，深度链接可以通过data.url得到
        response.url
      }
    }, false);
    console.log(data);
  }

  static defaultProps = {

  }

  isWeixinBrowser() {
    let ua = navigator.userAgent.toLowerCase();
    return (/micromessenger/.test(ua)) ? true : false;
  }

  render() {
    // if (!this.isWeixinBrowser()) {
    //   return '请在微信或在QQ浏览器中打开';
    // }
    const arr = [{
      username: '随风而去',
      time: '2017-10-23 10:09:52',
      gold: '500'
    }, {
      username: '让往事再随风而去',
      time: '2017-10-25 10:09:52',
      gold: '700'
    }];
    const items = arr.map((item, index) => {
      return (
        <RedPurseItem key={index} data={item} />
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
            <p>1. 每位用户每天至多可以领取20次红包。</p>
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
