import { Module } from '@nestjs/common';
import { Rental, RentalDetail } from './entities/rental.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rental]),
    TypeOrmModule.forFeature([RentalDetail]),
  ],
})
export class RentalModule {}
