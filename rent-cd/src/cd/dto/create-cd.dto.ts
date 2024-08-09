import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCDDto {
  @IsInt()
  @IsNotEmpty()
  titleCode: number;

  @IsString()
  @MaxLength(50)
  condition: string;

  @IsString()
  @MaxLength(100)
  location: string;

  @IsString()
  @MaxLength(20)
  status: string;
}
