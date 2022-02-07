import { Module } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService],
})
export class PowerModule {}
