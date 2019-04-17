import { classToPlain } from 'class-transformer';

export class ResponseData {
  constructor(data, msg?: string, status?: number) {
    this.data = classToPlain(data);
    if (msg) {
      this.msg = msg;
    }
    if (status) {
      this.status = status;
    }
  }
  status: number = 0;
  data?: any;
  msg?: string = 'success';
}