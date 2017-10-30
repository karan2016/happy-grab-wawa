import React from 'react';
import Styles from './style.scss';
import {connect} from 'react-redux';
import {apiGetBook} from 'api/actions';

export class Book extends React.Component {
  componentDidMount() {
    // console.log(this.props.match.params.id);
    setInterval(() => this.props.apiGetBook(this.props.match.params.id), 1000);
  }

  static defaultProps = {
    book: null
  }

  render() {
    console.log(this.props);
    console.log(this.props.book);
    return (
      <div>
        <div>{this.props.params}</div>
        <div>{JSON.stringify(this.props.book)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.api.get('book'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiGetBook(id) {
      dispatch(apiGetBook(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
