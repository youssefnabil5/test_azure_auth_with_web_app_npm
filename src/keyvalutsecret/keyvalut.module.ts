import { Module } from '@nestjs/common';
import { KeyValutController } from './keyvalut.controller';
import { KeyValutService } from './keyvalut.service';

@Module({
  imports: [],
  controllers: [KeyValutController],
  providers: [KeyValutService],
  exports:[KeyValutService]
})
export class KeyValutpModule {}
