import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeyValutpModule } from './keyvalutsecret/keyvalut.module';

@Module({
  imports: [KeyValutpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
