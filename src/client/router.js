import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from 'containers/App';
import Book from 'containers/Book';

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/book/:id" name="book" component={Book} />
        <Route path="/" name="home" component={App} />        
      </Switch>
    </BrowserRouter>
  );
}
