import { PowerService } from '../power/power.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power');
    return a + b;
  }
}
