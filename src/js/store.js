
import { createStore } from 'framework7';

const store = createStore({
  state: {
    loading: false,
    users: [],
    events: [],
    artidaily: [],
    myarrange: [],
    mysuggest: [],


    synday: '2021/01/01',
    access: [],

    products: [
      {
        id: '1',
        title: 'Apple iPhone 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
      },
      {
        id: '2',
        title: 'Apple iPhone 8 Plus',
        description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
      },
      {
        id: '3',
        title: 'Apple iPhone X',
        description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
      },
    ]
  },
  getters: {
    loading({ state }) {
      return state.loading;
    },
    users({ state }) {
      return state.users;
    },
    events({ state }) {
      return state.events;
    },
    artidaily({ state }) {
      return state.artidaily;
    },
    myarrange({ state }) {
      return state.myarrange;
    },
    mysuggest({ state }) {
      return state.mysuggest;
    },

    synday({ state }) {
      return state.synday;
    },
    access({ state }) {
      return state.access;
    },
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    getUsers({ state }) {
      state.loading = true;
      setTimeout(() => {
//      state.users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
        state.users = [{ "id" : "1", "login" : "AAA", "first_name" : "GuestAAA", "last_name" : "Member", "title" : "", "group" : "1", "mobile" : "", "address1" : "", "address2" : "", "address3" : "", "date_last_login" : "11/24/2000", "language_id" : "4", "image_url" : "", "age_id" : "3", "gender_id" : "1", "education_id" : "2", "user_is_active" : "1" }, { "id" : "2", "login" : "BBB", "first_name" : "AdminBBB", "last_name" : "User", "title" : "", "group" : "2", "mobile" : "", "address1" : "", "address2" : "", "address3" : "", "date_last_login" : "12/26/2000", "language_id" : "4", "image_url" : "", "age_id" : "4", "gender_id" : "1", "education_id" : "3", "user_is_active" : "1" }, { "id" : "3", "login" : "CCC", "first_name" : "YangCCC", "last_name" : "Yang", "title" : "", "group" : "2", "mobile" : "", "address1" : "中关村18号", "address2" : "金地格林13栋4-203", "address3" : "东城区五道口", "date_last_login" : "", "language_id" : "", "image_url" : "", "age_id" : "", "gender_id" : "", "education_id" : "", "user_is_active" : "1" }, { "id" : "4", "login" : "DDD", "first_name" : "EvaDDD", "last_name" : "Bai", "title" : "", "group" : "1", "mobile" : "", "address1" : "中关村18号", "address2" : "金地格林13栋4-203", "address3" : "东城区五道口", "date_last_login" : "", "language_id" : "", "image_url" : "", "age_id" : "", "gender_id" : "", "education_id" : "", "user_is_active" : "1" }];
        state.loading = false;
      }, 3000);
    },
    getUsersBy({ state }, { login , password }) {
      state.loading = true;
      setTimeout(() => {
          fetch(`http://portal.kideduc.com/services/auth.php?login=${login}&password=${password}`)
            .then((res) => res.json())
            .then((users) => {
              state.loading = false;
              state.users = users['users'];
            })
      }, 3000);
    },
    getEvents({ state }, { catgID }) {
      state.loading = true;
      setTimeout(() => {
          fetch(`http://portal.kideduc.com/services/events.php?catgID=${catgID}`)
            .then((res) => res.json())
            .then((events) => {
              state.loading = false;
              state.events = events['events'];
            })
      }, 3000);
    },
    getArtiDaily({ state }, { userID }) {
      state.loading = true;
      setTimeout(() => {
          fetch(`http://portal.kideduc.com/services/articles_daily.php?userID=${userID}`)
            .then((res) => res.json())
            .then((artidaily) => {
              state.loading = false;
              state.artidaily = artidaily['dailydetails'];
            })
      }, 3000);
    },
    getMyArrange({ state }, { userID, f7 }) {
      state.loading = true;
      setTimeout(() => {
          fetch(`http://portal.kideduc.com/services/articles_arrg.php?userID=${userID}`)
            .then((res) => res.json())
            .then((myarrange) => {
              state.loading = false;
              f7.preloader.hide();  // hidden refresh icon...tony add
              state.myarrange = myarrange['arranges'];
            })
      }, 3000);
    },
    getMySuggest({ state }, { userID, f7 }) {
      state.loading = true;
      setTimeout(() => {
          fetch(`http://portal.kideduc.com/services/articles_sugg.php?userID=${userID}`)
            .then((res) => res.json())
            .then((mysuggest) => {
              state.loading = false;
              f7.preloader.hide();  // hidden refresh icon...tony add
              state.mysuggest = mysuggest['suggestions'];
            })
      }, 3000);
    },

    addAccess({ state }, access) {
      state.access = [...state.access, access];
    },
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
    resetProduct({ state }) {
      state.products = [
                          {
                            id: '1',
                            title: 'Apple iPhone 8',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
                          },
                          {
                            id: '2',
                            title: 'Apple iPhone 8 Plus',
                            description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
                          },
                          {
                            id: '3',
                            title: 'Apple iPhone X',
                            description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
                          },
                        ];
    },
  },
})
export default store;
