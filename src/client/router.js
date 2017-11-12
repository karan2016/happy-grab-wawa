import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from 'containers/App';
import Book from 'containers/Book';
import RedPurse from 'containers/RedPurse';
import Rank from 'containers/Rank';

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/book/:id" name="book" component={Book} />
        <Route path="/red-purse/:id" name="redPurse" component={RedPurse} />
        <Route path="/rank" name="rank" component={Rank} />
        <Route path="/" name="home" component={App} />        
      </Switch>
    </BrowserRouter>
  );
}
