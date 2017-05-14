import Mock from 'mockjs';

const Orders = [];

for (let i = 0; i < 86; i++) {
  Orders.push(Mock.mock({
    id: Mock.Random.guid(),
    orderid: '20170514'+ Mock.Random.date('HHmmss'),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    date: Mock.Random.date('yyyy-MM-dd HH:mm:ss')
  }));
}

export { Orders };
