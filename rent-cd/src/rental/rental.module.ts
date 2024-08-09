import { Module } from '@nestjs/common';
import { Rental, RentalDetail } from './entities/rental.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalController } from './controller/rental.controller';
import { RentalService } from './service/rental.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rental]),
    TypeOrmModule.forFeature([RentalDetail]),
  ],
  controllers: [RentalController],
  providers: [RentalService],
})
export class RentalModule {}
