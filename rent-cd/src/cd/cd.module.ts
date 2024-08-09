import { Module } from '@nestjs/common';
import { CdController } from './controller/cd.controller';
import { CdService } from './service/cd.service';
import { CD } from './entities/cd.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CD])],
  controllers: [CdController],
  providers: [CdService],
})
export class CdModule {}
