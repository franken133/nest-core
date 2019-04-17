import config from './default.config';
import * as _ from 'lodash';

const custom = {};

export default _.merge(_.cloneDeep(config), custom);
