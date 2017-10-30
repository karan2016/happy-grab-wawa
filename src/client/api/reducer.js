import {List, Map, OrderedMap} from 'immutable';

// import {API_DATA_SERVERS_LOADED, API_REQUEST_FINISHED, API_REQUEST_STARTED} from 'api/actions';
import {API_REQUEST_BOOK_DATA} from 'api/actions';

const initialState = Map({
  loading: false,
  requests: OrderedMap({}),
  errors: Map({
    last: null
  }),
  lastUpdate: Map({
    servers: null
  }),
  data: Map({
    servers: List()
  }),
  book: {"data":{"rating":{"max":10,"numRaters":2,"average":"0.0","min":0},"subtitle":"列那狐的故事","author":["高玮","沈阳","M・H・吉罗夫人","赵路"],"pubdate":"2005-2-1","tags":[{"count":1,"name":"法国民间故事","title":"法国民间故事"},{"count":1,"name":"文学","title":"文学"}],"origin_title":"","image":"https://img3.doubanio.com/mpic/s7637726.jpg","binding":"平装(无盘)","translator":[],"catalog":"一 列那狐出世\n二 舅舅是大灰狼\n三 爱听吹捧的乌鸦\n四 偷鱼的智慧\n五 剃发受戒和尾巴钓鱼\n六 香肠事件\n七 花猫的尾巴断了\n八 “气死肉”还是“气死狼”\n九 麻雀复仇的故事\n十 第十张狐皮\n……","pages":"244","images":{"small":"https://img3.doubanio.com/spic/s7637726.jpg","large":"https://img3.doubanio.com/lpic/s7637726.jpg","medium":"https://img3.doubanio.com/mpic/s7637726.jpg"},"alt":"https://book.douban.com/subject/1220523/","id":"1220523","publisher":"浙江少儿","isbn10":"7534233429","isbn13":"9787534233425","title":"列那狐的故事","url":"https://api.douban.com/v2/book/1220523","alt_title":"","author_intro":"","summary":"《小学生领先一步读名著-列那狐的故事》，狐狸列那外表文雅却生性狡猾，他欺骗其他的小动物，令众人愤恨。最终他激起民愤，惹恼了狮王。可是在面临绝境之时，列那却想出种种方法逃脱了困境，化险为夷。M·H·吉罗夫人写的《列那狐的故事》中一群鲜活的小动物，演绎着世间的人生百态。一个个生动的故事，告诉我们无数人生的哲理和智慧。  作者简介","price":"13.00元"}}
});

export default function ApiReducer(state = initialState, action) {
  switch (action.type) {
    // case API_REQUEST_STARTED:
    //   return state
    //     .setIn(['requests', action.payload.requestId], action.payload)
    //     .set('loading', true);

    // case API_REQUEST_FINISHED:
    //   return state
    //     .removeIn(['requests', action.payload.requestId])
    //     .set('loading', (state.get('requests').size > 1))
    //     .setIn(
    //       ['errors', 'last'],
    //       (action.payload.error ? action.payload.error.message : state.getIn(['errors', 'last']))
    //     );

    // case API_DATA_SERVERS_LOADED:
    //   return state
    //     .setIn(['lastUpdate', 'servers'], Date.now())
    //     .setIn(['data', 'servers'], List(action.payload.servers));
    case API_REQUEST_BOOK_DATA:
    return state
      .set('book', action.payload);
    default:
      return state;
  }
}
