import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rental, RentalDetail } from '../entities/rental.entity';
import { CreateRentalDto } from '../dto/create-rental.dto';
import { UpdateRentalDto } from '../dto/update-rental.dto';

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental)
    private readonly rentalRepository: Repository<Rental>,
    @InjectRepository(RentalDetail)
    private readonly rentalDetailRepository: Repository<RentalDetail>
  ) {}

  /**
   * Create a new rental and its details.
   * @param createRentalDto The DTO object containing rental details.
   * @returns Promise of the created rental.
   */
  async createRental(createRentalDto: CreateRentalDto): Promise<Rental> {
    // Create the Rental entity
    const rental = new Rental();
    rental.customerCode = createRentalDto.customerCode;
    rental.rentalDate = createRentalDto.rentalDate;
    rental.rentalValue = createRentalDto.rentalValue;

    // Save the Rental entity first to generate the rentalNumber
    const savedRental = await this.rentalRepository.save(rental);

    // Create and save the RentalDetails entities
    const rentalDetails = createRentalDto.rentalDetails.map((detail) => {
      const rentalDetail = new RentalDetail();
      rentalDetail.rentalNumber = savedRental.rentalNumber; // FK from savedRental
      rentalDetail.titleCode = detail.titleCode;
      rentalDetail.cdNumber = detail.cdNumber;
      rentalDetail.loanDays = detail.loanDays;
      rentalDetail.returnDate = detail.returnDate;
      return rentalDetail;
    });

    await this.rentalDetailRepository.save(rentalDetails);

    return savedRental;
  }

  /**
   * Retrieve all rentals from the database.
   * @returns Promise of an array of rentals.
   */
  findAllRentals(): Promise<Rental[]> {
    return this.rentalRepository.find({ relations: ['rentalDetails'] });
  }

  /**
   * Retrieve a specific rental by its ID.
   * @param rentalNumber The ID of the rental.
   * @returns Promise of the rental.
   */
  findOneRental(rentalNumber: number): Promise<Rental> {
    return this.rentalRepository.findOne({
      where: { rentalNumber },
      relations: ['rentalDetails'],
    });
  }

  /**
   * Update a specific rental and its details.
   * @param rentalNumber The ID of the rental.
   * @param updateRentalDto The DTO object containing updated rental details.
   * @returns Promise of the updated rental.
   */
  async updateRental(
    rentalNumber: number,
    updateRentalDto: UpdateRentalDto,
  ): Promise<Rental> {
    const rental = await this.rentalRepository.preload({
      rentalNumber,
      ...updateRentalDto,
    });

    if (!rental) {
      throw new Error('Rental not found');
    }

    const updatedRental = await this.rentalRepository.save(rental);

    // Remove old details
    await this.rentalDetailRepository.delete({ rental: updatedRental });

    // Create new details
    for (const detail of updateRentalDto.rentalDetails) {
      const rentalDetail = this.rentalDetailRepository.create({
        ...detail,
        rental: updatedRental,
      });
      await this.rentalDetailRepository.save(rentalDetail);
    }

    return updatedRental;
  }

  /**
   * Delete a specific rental by its ID.
   * @param rentalNumber The ID of the rental.
   * @returns Promise of deletion result.
   */
  removeRental(rentalNumber: number): Promise<{ affected?: number }> {
    return this.rentalRepository.delete(rentalNumber);
  }
}
