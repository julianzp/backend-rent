import {
  IsArray,
  IsDateString,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateRentalDetailDto } from './create-rental-detail.dto';

export class CreateRentalDto {
  @IsInt()
  @IsNotEmpty()
  customerCode: number;

  @IsDateString()
  @IsNotEmpty()
  rentalDate: Date;

  @IsDecimal()
  @IsNotEmpty()
  rentalValue: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRentalDetailDto)
  rentalDetails: CreateRentalDetailDto[];
}
