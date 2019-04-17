import config from './default.config';
import * as _ from 'lodash';

const custom = {
  // db: {
  //   host: 'pc-bp1p24ctd02wx3qj9.mysql.polardb.rds.aliyuncs.com',
  // },
};

export default _.merge(_.cloneDeep(config), custom);
