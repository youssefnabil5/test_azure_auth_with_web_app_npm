import { Controller, Get } from '@nestjs/common';
import { KeyValutService } from './keyvalut.service';

@Controller("secret")
export class KeyValutController {
  constructor(private readonly keyValutService: KeyValutService) {}

  @Get()
  getHello(): Promise<string> {
    return this.keyValutService.getsecret();
  }
}
