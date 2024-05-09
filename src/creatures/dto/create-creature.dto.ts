import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

// create-user-dto
export class CreateCreatureDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  lastSee: string;

  @IsNotEmpty()
  @IsNumber()
  countLastSee: number;

  @IsNotEmpty()
  @IsBoolean()
  extinct: boolean;
}
