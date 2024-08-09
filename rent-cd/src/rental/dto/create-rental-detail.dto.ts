import { IsInt, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateRentalDetailDto {
  @IsInt()
  @IsNotEmpty()
  rentalNumber: number;

  @IsInt()
  @IsNotEmpty()
  titleCode: number;

  @IsInt()
  @IsNotEmpty()
  cdNumber: number;

  @IsInt()
  @IsNotEmpty()
  loanDays: number;

  @IsDateString()
  @IsOptional()
  returnDate?: Date;
}
