import React from 'react';

import Select from './../UIKit/Select';
import Input from './../UIKit/Input';

class Nav extends React.Component {

  render() {

    const { users, filterByCity, filterByCompany, searchByTitle, sort} = this.props;

    const cities = ['', ...new Set(users && users.map((item) => item.address.city))];
    const companies = ['', ...new Set(users && users.map((item) => item.company.name))];
    const sorting = ['', 'Author name', 'City name', 'Company name'];

    return (
      <nav>
        <div className="row">
          <div className="col-3">
            <label>City filter: </label>
          </div>  
          <div className="col-4">
            <Select
              options={cities}
              onChange={filterByCity}
              name="cities"
            />
            </div>
        </div>

        <div className="row">
          <div className="col-3">
            <label>Company filter: </label>
          </div>  
          <div className="col-4">
            <Select
              options={companies}
              onChange={filterByCompany}
              name="companies"
            />
            </div>
        </div>

        <div className="row">
          <div className="col-3">
            <label>Quick search by post title </label>
          </div>  
          <div className="col-4">
            <Input
              onChange={searchByTitle}
              name="search"
              placeholder="Search"
            />
            </div>
        </div>
        
        <hr />

        <div className="row">
          <div className="col-3">
            <label>Sort by:</label>
          </div>  
          <div className="col-4">
            <Select
              options={sorting}
              onChange={sort}
              name="sorting"
            /> 
            </div>
        </div>
      </nav>
    );
  };
}

export default Nav;
