import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class RequestService {
  constructor(@Inject('MICRO_SERVICE') private client: ClientProxy) {}

  sendValues(): Observable<number> {
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3];

    return this.client.send<number>(pattern, payload);
  }
}
