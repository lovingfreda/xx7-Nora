
import { createStore } from 'framework7';

const store = createStore({
  state: {
    loading: false,
    users: [],

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
        state.users = [{ "id" : "1", "login" : "guest", "first_name" : "Guest", "last_name" : "Member", "title" : "", "group" : "1", "mobile" : "", "address1" : "", "address2" : "", "address3" : "", "date_last_login" : "11/24/2000", "language_id" : "4", "image_url" : "", "age_id" : "3", "gender_id" : "1", "education_id" : "2", "user_is_active" : "1" }, { "id" : "2", "login" : "admin", "first_name" : "Admin", "last_name" : "User", "title" : "", "group" : "2", "mobile" : "", "address1" : "", "address2" : "", "address3" : "", "date_last_login" : "12/26/2000", "language_id" : "4", "image_url" : "", "age_id" : "4", "gender_id" : "1", "education_id" : "3", "user_is_active" : "1" }, { "id" : "3", "login" : "yangy", "first_name" : "Yang", "last_name" : "Yang", "title" : "", "group" : "2", "mobile" : "", "address1" : "中关村18号", "address2" : "金地格林13栋4-203", "address3" : "东城区五道口", "date_last_login" : "", "language_id" : "", "image_url" : "", "age_id" : "", "gender_id" : "", "education_id" : "", "user_is_active" : "1" }, { "id" : "4", "login" : "eva", "first_name" : "Eva", "last_name" : "Bai", "title" : "", "group" : "1", "mobile" : "", "address1" : "中关村18号", "address2" : "金地格林13栋4-203", "address3" : "东城区五道口", "date_last_login" : "", "language_id" : "", "image_url" : "", "age_id" : "", "gender_id" : "", "education_id" : "", "user_is_active" : "1" }];
        state.loading = false;
      }, 3000);
    },
    getUsersBy({ state }, { login , password }) {
      state.loading = true;
      setTimeout(() => {
          fetch(`http://localhost:8086/services/auth.php?login=${login}&password=${password}`)
            .then((res) => res.json())
            .then((users) => {
              state.loading = false;
              state.users = users['users'];
            })
      }, 3000);
    },
    addAccess({ state }, access) {
      state.access = [...state.access, access];
    },
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})
export default store;
