import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsEnum,
  Length,
  MinLength,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @IsNotEmpty()
  name: string;

  @IsString()
  @Length(8, 15, { message: 'DNI must be between 8 and 15 characters.' })
  @IsNotEmpty()
  dni: string;

  @IsEmail(null, { message: 'Please provide a valid Email.' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(10, 100, {
    message: 'Address must be between 10 and 100 characters.',
  })
  address: string;

  @IsPhoneNumber(null, { message: 'Please provide a valid phone number.' })
  phone: string;

  @IsDate({ message: 'Please provide a valid birth date.' })
  birthDate: Date;

  @IsDate({ message: 'Please provide a valid enrollment date.' })
  enrollmentDate: Date;

  @IsString()
  @MinLength(3, { message: 'Interest Topic must have at least 3 characters.' })
  interestTopic: string;

  @IsString()
  @IsEnum(['active', 'inactive', 'pending'], {
    message: 'Status must be either active, inactive, or pending.',
  })
  status: string;
}
