import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateCDDto {
  @IsInt()
  @IsOptional()
  titleCode?: number;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  condition?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  location?: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  status?: string;
}
