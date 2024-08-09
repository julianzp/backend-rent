import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCDDto } from '../dto/create-cd.dto';
import { UpdateCDDto } from '../dto/update-cd.dto';
import { CdService } from '../service/cd.service';

@Controller('cd')
export class CdController {
  constructor(private readonly cdService: CdService) {}

  /**
   * Create a new CD.
   * POST http://localhost:3000/cd
   * @param createCDDto The DTO object containing CD details.
   * @returns The created CD.
   */
  @Post()
  create(@Body() createCDDto: CreateCDDto) {
    return this.cdService.createCD(createCDDto);
  }

  /**
   * Retrieve all CDs.
   * GET http://localhost:3000/cd
   * @returns An array of CDs.
   */
  @Get()
  findAll() {
    return this.cdService.findAllCDs();
  }

  /**
   * Retrieve a specific CD by its ID.
   * GET http://localhost:3000/cd/:id
   * @param id The ID of the CD.
   * @returns The requested CD.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cdService.findOneCD(+id);
  }

  /**
   * Update a specific CD by its ID.
   * PATCH http://localhost:3000/cd/:id
   * @param id The ID of the CD.
   * @param updateCDDto The DTO object containing updated CD details.
   * @returns The updated CD.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCDDto: UpdateCDDto) {
    return this.cdService.updateCD(+id, updateCDDto);
  }

  /**
   * Delete a specific CD by its ID.
   * DELETE http://localhost:3000/cd/:id
   * @param id The ID of the CD.
   * @returns Result of the deletion.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cdService.removeCD(+id);
  }
}
