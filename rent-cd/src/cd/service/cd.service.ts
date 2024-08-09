import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CD } from '../entities/cd.entity';
import { Repository } from 'typeorm';
import { CreateCDDto } from '../dto/create-cd.dto';
import { UpdateCDDto } from '../dto/update-cd.dto';

@Injectable()
export class CdService {
  constructor(
    @InjectRepository(CD) private readonly cdRepository: Repository<CD>,
  ) {}

  /**
   * Create a new CD in the database.
   * @param createCDDto The DTO object containing CD details.
   * @returns Promise of the created CD.
   */
  createCD(createCDDto: CreateCDDto): Promise<CD> {
    const cd = this.cdRepository.create(createCDDto);
    return this.cdRepository.save(cd);
  }

  /**
   * Retrieve all CDs from the database.
   * @returns Promise of an array of CDs.
   */
  findAllCDs(): Promise<CD[]> {
    return this.cdRepository.find();
  }

  /**
   * Retrieve a specific CD by its ID.
   * @param cdNumber The ID of the CD.
   * @returns Promise of the CD.
   */
  findOneCD(cdNumber: number): Promise<CD> {
    return this.cdRepository.findOneBy({ cdNumber });
  }

  /**
   * Update a specific CD by its ID with the provided data.
   * @param cdNumber The ID of the CD.
   * @param updateCDDto The DTO object containing updated CD details.
   * @returns Promise of the updated CD.
   */
  async updateCD(cdNumber: number, updateCDDto: UpdateCDDto): Promise<CD> {
    await this.cdRepository.update(cdNumber, updateCDDto);
    return this.findOneCD(cdNumber);
  }

  /**
   * Delete a specific CD by its ID.
   * @param cdNumber The ID of the CD.
   * @returns Promise of deletion result.
   */
  removeCD(cdNumber: number): Promise<{ affected?: number }> {
    return this.cdRepository.delete(cdNumber);
  }
}
