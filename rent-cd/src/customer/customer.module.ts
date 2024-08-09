import { Module } from '@nestjs/common';
import { CustomerController } from './controller/customer.controller';
import { CustomerService } from './service/customer.service';
import { Customer } from './entities/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
