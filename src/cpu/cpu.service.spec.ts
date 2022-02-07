import { PowerService } from './../power/power.service';
import { CpuService } from '../cpu/cpu.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CpuService', () => {
  let service: CpuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CpuService, PowerService], //asking to include the Power dependency for some reason
    }).compile();

    service = module.get<CpuService>(CpuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
