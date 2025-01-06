import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsIn, IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductDto {

    @ApiProperty({
        description: 'Title of the product (unique).',
        nullable: false,
        minLength: 3
    })
    @IsString()
    @MinLength(3)
    title: string;

    @ApiProperty({
        description: 'Price of the product.',
        nullable: true,
        default: 0
    })
    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @ApiProperty({
        description: 'Description of the product.',
        nullable: true
    })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({
        description: 'Slug of the product - For SEO purposes.',
        nullable: true
    })
    @IsString()
    @IsOptional()
    slug?: string;

    @ApiProperty({
        description: 'Stock of the product.',
        nullable: true,
        default: 0
    })
    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    @ApiProperty({
        description: 'Sizes available for the product.',
        nullable: false
    })
    @IsString({ each: true })
    @IsArray()
    sizes: string[];

    @ApiProperty({
        description: "Gender of the product.",
    })
    @IsIn(['men', 'women', 'children', 'unisex'])
    gender: string;

    @ApiProperty({
        description: 'Tags for the product.',
        nullable: true
    })
    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    tags: string[];

    @ApiProperty({
        description: 'Images for the product.',
        nullable: true
    })
    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    images?: string[];
}
