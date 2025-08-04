import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

//데코레이터
@Module({
    imports: [MoviesModule],
    //express의 라우터같은 역할 - url을 가져오고 함수를 실행
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
