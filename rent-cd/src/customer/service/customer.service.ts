import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  /**
   * This function is used to create a new Customer in the Customer entity.
   * @param createCustomerDto is the type of CreateCustomerDto where we define
   * the keys expected from the request body.
   * @returns a promise of the created Customer.
   */
  async createCustomer(
    createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  /**
   * This function is used to get a list of all Customers.
   * @returns a promise of an array of Customers.
   */
  async findAllCustomers(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  /**
   * This function is used to get the data of the Customer whose id is passed as a parameter.
   * @param id is of type number, representing the Customer's id.
   * @returns a promise of the found Customer.
   */
  async viewCustomer(id: number): Promise<Customer> {
    return this.customerRepository.findOneBy({ codeCustomer: id });
  }

  /**
   * This function is used to update a specific Customer whose id is passed as a parameter,
   * along with the updated data.
   * @param id is of type number, representing the Customer's id.
   * @param updateCustomerDto is a partial type of CreateCustomerDto.
   * @returns a promise of the updated Customer.
   */
  async updateCustomer(
    id: number,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    await this.customerRepository.update(id, updateCustomerDto);
    return this.viewCustomer(id);
  }

  /**
   * This function is used to remove or delete a Customer from the database.
   * @param id is of type number, representing the Customer's id.
   * @returns a promise indicating the number of rows deleted or affected.
   */
  async removeCustomer(id: number): Promise<{ affected?: number }> {
    const result = await this.customerRepository.delete(id);
    return { affected: result.affected };
  }
}
