import { PowerService } from './../power/power.service';
import { DiskService } from './../disk/disk.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ComputerController } from '../computer/computer.controller';
import { CpuService } from '../cpu/cpu.service';

describe('ComputerController', () => {
  let controller: ComputerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComputerController],
      providers: [DiskService, CpuService, PowerService],
    }).compile();

    controller = module.get<ComputerController>(ComputerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
