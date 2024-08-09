import {
  IsArray,
  IsDateString,
  IsDecimal,
  IsInt,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateRentalDetailDto } from './create-rental-detail.dto';

export class UpdateRentalDto {
  @IsInt()
  @IsOptional()
  customerCode?: number;

  @IsDateString()
  @IsOptional()
  rentalDate?: Date;

  @IsDecimal()
  @IsOptional()
  rentalValue?: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRentalDetailDto)
  @IsOptional()
  rentalDetails?: CreateRentalDetailDto[];
}
