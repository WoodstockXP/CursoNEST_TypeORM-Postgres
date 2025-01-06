import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @ApiProperty({
        example: "woods@google.com",
        description: "The email of the user",
        format: "email",
        uniqueItems: true,
        required: true
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: "Abc123",
        description: "The password of the user",
        format: "password",
        required: true
    })
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password must have a uppercase,  lowercase letter and a number' })
    password: string;

    @ApiProperty({
        example: "Donald Trump",
        description: "The full name of the user",
        format: "string",
        required: true
    })
    @IsString()
    @MinLength(1)
    fullName: string;
}