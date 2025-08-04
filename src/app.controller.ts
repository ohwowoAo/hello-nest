import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    //express의 get 라우터같은 역할
    @Get()
    home() {
        return 'welcome to my movie API';
    }
}
