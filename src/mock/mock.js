import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Orders } from './data/order';
let _Orders = Orders;

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //获取用户列表
    mock.onGet('/order/list').reply(config => {
      let {name} = config.params;
      let mockOrders = _Orders.filter(order => {
        if (name && order.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            orders: mockOrders
          }]);
        }, 1000);
      });
    });

    //获取用户列表（分页）
    mock.onGet('/order/listpage').reply(config => {
      let {page, name} = config.params;
      let mockOrders = _Orders.filter(order => {
        if (name && order.name.indexOf(name) == -1) return false;
        return true;
      });
      let total = mockOrders.length;
      mockOrders = mockOrders.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            orders: mockOrders
          }]);
        }, 1000);
      });
    });

    //删除用户
    mock.onGet('/order/remove').reply(config => {
      let { id } = config.params;
      _Orders = _Orders.filter(u => u.id !== id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //批量删除用户
    mock.onGet('/order/batchremove').reply(config => {
      let { ids } = config.params;
      ids = ids.split(',');
      _Orders = _Orders.filter(u => !ids.includes(u.id));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //编辑用户
    mock.onGet('/order/edit').reply(config => {
      let { id, name, addr, age, birth, sex } = config.params;
      _Orders.some(u => {
        if (u.id === id) {
          u.name = name;
          u.addr = addr;
          u.age = age;
          u.birth = birth;
          u.sex = sex;
          return true;
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }]);
        }, 500);
      });
    });

    //新增用户
    mock.onGet('/order/add').reply(config => {
      let { name, addr, age, birth, sex } = config.params;
      _Orders.push({
        name: name,
        addr: addr,
        age: age,
        birth: birth,
        sex: sex
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }]);
        }, 500);
      });
    });

  }
};
