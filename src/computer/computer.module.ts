import { DiskModule } from './../disk/disk.module';
import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { ComputerController } from './computer.controller';

@Module({
  controllers: [ComputerController],
  imports: [CpuModule, DiskModule],
})
export class ComputerModule {}
