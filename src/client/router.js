import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from 'containers/App';
import Book from 'containers/Book';
import redPacket from 'containers/redPacket';
import Rank from 'containers/Rank';
import Agreement from 'containers/Agreement';

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/book/:id" name="book" component={Book} />
        <Route path="/red-packet/:id" name="redPacket" component={redPacket} />
        <Route path="/rank" name="rank" component={Rank} />
        <Route path="/agreement-and-policy" name="agreement" component={Agreement} />
        <Route path="/" name="home" component={App} />        
      </Switch>
    </BrowserRouter>
  );
}
