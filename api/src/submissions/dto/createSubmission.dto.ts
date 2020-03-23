import { IsString, IsArray, IsNumber, Min, IsUUID, Max, MaxLength, IsBoolean, IsObject, IsOptional, IsEnum } from 'class-validator';

export class CreateSubmissionDto {

    @IsString()
    @MaxLength(255) @IsOptional()
    latitude: string;

    @IsString()
    @MaxLength(255) @IsOptional()
    longitude: string;

    @IsEnum(['male', 'female'])
    @MaxLength(255)
    gender: string;

    @IsNumber()
    @Min(0)
    @Max(200)
    age: number;

    @IsBoolean()
    high_risk_country: boolean;
    
    @IsBoolean()
    exposure: boolean;

    @IsArray()
    symptoms: object;

    @Min(36)
    @Max(50)
    @IsNumber()
    @IsOptional()
    fever_temperature: number;

    @IsBoolean()
    @IsOptional()
    chronic_conditions: boolean;

    @IsString() @IsOptional()
    email: string;

    @IsString() @IsOptional()
    phone_number: string;

    @IsEnum(['self', 'family', 'test']) @IsOptional()
    intent: string;
    
}
