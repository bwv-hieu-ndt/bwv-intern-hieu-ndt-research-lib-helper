import { Gender } from '@/enum';
import { IUser } from '@/interface';
import {
  IsEmail,
  IsString,
  IsOptional,
  IsDate,
  IsNotEmpty,
  MaxLength,
  IsStrongPassword,
  IsEnum,
} from 'class-validator';

export class UserInputDto implements IUser {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  id!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  firstName!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  lastName!: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50)
  email!: string;

  @IsNotEmpty()
  @MaxLength(50)
  @IsStrongPassword()
  password!: string;

  @IsDate()
  @IsOptional()
  birthday?: Date;

  @IsEnum(Gender)
  gender!: string;

  @IsNotEmpty()
  @MaxLength(50)
  username?: string;

  @IsDate()
  @IsOptional()
  updatedAt!: Date;

  @IsDate()
  @IsOptional()
  deletedAt!: Date;

  @IsDate()
  @IsOptional()
  createdAt!: Date;
}
