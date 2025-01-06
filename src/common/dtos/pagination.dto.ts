import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {

    @ApiProperty({
        description: 'The number of items to return.',
        default: 10
    })
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit?: number;

    @ApiProperty({
        description: 'The number of items to skip before starting to collect the result set.',
        default: 0
    })
    @IsOptional()
    @IsPositive()
    @Min(0)
    @Type(() => Number)
    offset?: number;
}