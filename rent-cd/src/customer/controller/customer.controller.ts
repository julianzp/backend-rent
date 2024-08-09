import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CustomerService } from '../service/customer.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  /**
   * The Post decorator represents the request method as POST.
   * Thus, the API URL to create a Customer will be
   * POST http://localhost:3000/customer
   */
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomer(createCustomerDto);
  }

  /**
   * The Get decorator is used to get a list of all Customers.
   * Thus, the API URL will be
   * GET http://localhost:3000/customer
   */
  @Get()
  findAll() {
    return this.customerService.findAllCustomers();
  }

  /**
   * The Get decorator with id param is used to get a Customer by its id.
   * Thus, the API URL will be
   * GET http://localhost:3000/customer/:id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.viewCustomer(+id);
  }

  /**
   * The Patch decorator with id param is used to update a Customer by its id,
   * along with the updated data.
   * Thus, the API URL will be
   * PATCH http://localhost:3000/customer/:id
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.updateCustomer(+id, updateCustomerDto);
  }

  /**
   * The Delete decorator with id param is used to remove a Customer by its id.
   * Thus, the API URL will be
   * DELETE http://localhost:3000/customer/:id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.removeCustomer(+id);
  }
}
