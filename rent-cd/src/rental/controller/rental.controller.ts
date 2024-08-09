import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RentalService } from '../service/rental.service';
import { CreateRentalDto } from '../dto/create-rental.dto';
import { UpdateRentalDto } from '../dto/update-rental.dto';

@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  /**
   * Create a new rental and its details.
   * POST http://localhost:3000/rental
   * @param createRentalDto The DTO object containing rental details.
   * @returns The created rental.
   */
  @Post()
  create(@Body() createRentalDto: CreateRentalDto) {
    return this.rentalService.createRental(createRentalDto);
  }

  /**
   * Retrieve all rentals.
   * GET http://localhost:3000/rental
   * @returns An array of rentals.
   */
  @Get()
  findAll() {
    return this.rentalService.findAllRentals();
  }

  /**
   * Retrieve a specific rental by its ID.
   * GET http://localhost:3000/rental/:id
   * @param id The ID of the rental.
   * @returns The requested rental.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalService.findOneRental(+id);
  }

  /**
   * Update a specific rental and its details.
   * PATCH http://localhost:3000/rental/:id
   * @param id The ID of the rental.
   * @param updateRentalDto The DTO object containing updated rental details.
   * @returns The updated rental.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentalDto: UpdateRentalDto) {
    return this.rentalService.updateRental(+id, updateRentalDto);
  }

  /**
   * Delete a specific rental by its ID.
   * DELETE http://localhost:3000/rental/:id
   * @param id The ID of the rental.
   * @returns Result of the deletion.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalService.removeRental(+id);
  }
}
