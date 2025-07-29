import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    //express의 get 라우터같은 역할
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('hello')
    sayHello(): string {
        return 'Hello, everyone';
    }
}
