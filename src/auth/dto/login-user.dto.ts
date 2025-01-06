import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class LoginUserDto {

    @ApiProperty({
        example: "woods2@google.com",
        description: "The email of the user",
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: "Xyz987",
        description: "The password of the user",
    })
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password must have a uppercase,  lowercase letter and a number' })
    password: string;

}