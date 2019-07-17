import React from 'react';
import { connect } from 'react-redux';

import './App.scss';

import List from './components/List';
import Nav from './components/Nav';

import { initProject, getData, removItem } from './actions';

import { posts } from './posts';
import { users } from './users';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      company: '',
      search: '',
      sort: '',
    };
  }

  componentDidMount() { 
    this.props.initProject(posts, users);
  }

  onFilterByCity = (value) => {
    const { company, search, sort } = this.state;
    this.setState({
      city: value
    });
    this.props.getData(value, company, search, sort);
  }

  onFilterByCompany = (value) => {
    const { city, search, sort } = this.state;
    this.setState({
      company: value
    });
    this.props.getData(city, value, search, sort);
  }

  onSearchByTitle = (value) => {
    const { city, company, sort } = this.state;
    this.setState({
      search: value
    });
    this.props.getData(city, company, value, sort);
  }

  onSort = (value) => {
    const { city, company, search } = this.state;
    this.setState({
      sort: value
    });
    this.props.getData(city, company, search, value);
  }

  onRemoveItem = (id) => {
    this.props.removItem(id);
    const { city, company, search, sort } = this.state;
    this.props.getData(city, company, search, sort);
  }
 
  render() {

    const { posts, users, data } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Posts</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Nav
              users={users}
              filterByCity={this.onFilterByCity}
              filterByCompany={this.onFilterByCompany}
              searchByTitle={this.onSearchByTitle}
              sort={this.onSort}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <List
              list={data || posts}
              removeItem={this.onRemoveItem}
            />

            {data && data.length === 0 && <p>No records found</p>}
          </div>
        </div>
      </div>
    );
  };
}


function mapStateToProps(state) {
  return {
    posts: state.posts,
    users: state.users,
    data: state.data
  };
}

export default connect(mapStateToProps, { initProject, getData, removItem })(App);
