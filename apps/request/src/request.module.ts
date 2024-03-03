import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MICRO_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'first-app', //? name: container
          port: 3002, //? port: container
        },
      },
    ]),
  ],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}
