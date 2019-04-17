import { Logger } from '@nestjs/common';
import development from './development';
import production from './production';
import test from './test';

const env = process.env.NODE_ENV;
Logger.log('env is ' + env, 'ConfigProvier');

export class ConfigProvider {
  static getConfig(key: string): any {
    switch (env) {
      case 'development':
        return development[key];
      case 'production':
        return production[key];
      case 'test':
        return test[key];
      default:
        return development[key];
    }
  }
}