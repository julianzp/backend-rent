import {
  IsDate,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsEnum,
  Length,
  MinLength,
} from 'class-validator';

export class UpdateCustomerDto {
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @IsOptional()
  name?: string;

  @IsString()
  @Length(8, 15, { message: 'DNI must be between 8 and 15 characters.' })
  @IsOptional()
  dni?: string;

  @IsEmail(null, { message: 'Please provide a valid Email.' })
  @IsOptional()
  email?: string;

  @IsString()
  @Length(10, 100, {
    message: 'Address must be between 10 and 100 characters.',
  })
  @IsOptional()
  address?: string;

  @IsPhoneNumber(null, { message: 'Please provide a valid phone number.' })
  @IsOptional()
  phone?: string;

  @IsDate({ message: 'Please provide a valid birth date.' })
  @IsOptional()
  birthDate?: Date;

  @IsDate({ message: 'Please provide a valid enrollment date.' })
  @IsOptional()
  enrollmentDate?: Date;

  @IsString()
  @MinLength(3, { message: 'Interest Topic must have at least 3 characters.' })
  @IsOptional()
  interestTopic?: string;

  @IsString()
  @IsEnum(['active', 'inactive', 'pending'], {
    message: 'Status must be either active, inactive, or pending.',
  })
  @IsOptional()
  status?: string;
}
