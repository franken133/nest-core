import * as path from 'path';

export default {
  db: {
    type: 'mysql',
    host: 'vone-attraction.mysql.polardb.rds.aliyuncs.com',
    port: 3306,
    username: 'attract',
    password: 'attract_1234',
    database: 'vone',
    entities: [path.join(__dirname, '../') + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: true,
  },
  aliOss: 'https://silver-life.oss-cn-hangzhou.aliyuncs.com/',
  redis: {
    sentinels: [{ host: '47.99.200.198', port: 26379 }],
    name: 'mymaster',
    password: 'silverRedis',
  },
};
