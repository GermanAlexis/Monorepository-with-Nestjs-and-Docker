import { Controller, Get } from '@nestjs/common';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';

@Controller()
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  sendValues(): Observable<number> {
    return this.requestService.sendValues();
  }
}
