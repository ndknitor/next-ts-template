import { IsEmail,  IsNotEmpty,  MaxLength, MinLength,  } from "class-validator";
import ViewModel from "../../shared/boiler/ViewModel";

export default class SignInRequest extends ViewModel
{
    @IsEmail({}, {message : "Email not in right format"})
    @MaxLength(128, {message: "Email is too long"})
    @MinLength(4, {message : "Email is too short"})
    @IsNotEmpty({message : "Email is required"})
    email:string = "";

    @MinLength(6, {message : "Password must at least 6 charaters"})
    @MaxLength(8192, {message: "Password is too long"})
    @IsNotEmpty({message : "Password is required"})
    password:string = "";
}