
import * as actionsTypes from './constants';

const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionsTypes.INIT_PROJECT: {
      const { users, posts } = action.payload
      return {
        users,
        posts: posts.map((item) => {
          return {
            ...item,
            user: users.filter((i) => Number(i.id) === item.userId)[0]
          }
        })
      };
    }

    case actionsTypes.GET_DATA: {
      const { city, company, search, sort } = action.payload;
      let data = null;
      if(city) {
        const correctData = data || state.posts;
        data = correctData && correctData.filter((item) => item.user && item.user.address && item.user.address.city === city);
      }
      if(company) {
        const correctData = data || state.posts;
        data = correctData && correctData.filter((item) => item.user && item.user.company && item.user.company.name === company);
      }

      if(search) {
        const correctData = data || state.posts;
        data = correctData && correctData.filter((item) => item.title.indexOf(search) + 1);
      }

      if(sort) {
        const correctData = data || state.posts;

        switch (sort) {
          case 'Author name':
            data = correctData.sort((a, b) => (a.user.name > b.user.name) ? 1 : -1); break;
          case 'City name':
            data = correctData.sort((a, b) => (a.user.address && a.user.address.city) > (b.user.address && b.user.address.city) ? 1 : -1); break;
          case 'Company name':
            data = correctData.sort((a, b) => (a.user.company && a.user.company.name) > (b.user.company && b.user.company.name) ? 1 : -1); break;            
          default:
            console.error('sorting error!');
        }
      }

      return {
        ...state,
        data
      };
    }

    case actionsTypes.REMOVE_ITEM: {
      return {
        ...state,
        posts:  state.posts &&  state.posts.filter((item) => item.id !== action.payload.id)
      };
      
    }

    default:
      return state;
  }
};
