import * as actionsTypes from './constants';

export function initProject(posts, users) {
  return {
    type: actionsTypes.INIT_PROJECT,
    payload: {
      posts,
      users
    }
  };
}

export function getData(city, company, search, sort) {
  return {
    type: actionsTypes.GET_DATA,
    payload: {
      city,
      company,
      search,
      sort
    }
  };
}

export function removItem(id) {
  return {
    type: actionsTypes.REMOVE_ITEM,
    payload: {
      id
    }
  };
}

