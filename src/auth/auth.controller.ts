import { Controller, Get, Post, Body, UseGuards, Req, Headers, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto} from './dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser, RawHeaders, RoleProtected, Auth } from './decorators';
import { User } from './entities/user.entity';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { ValidRoles } from './Interfaces';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
//import { IncomingHttpHeaders } from 'http';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({ status: 201, description: 'User created successfully.', type: User })
  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @ApiResponse({ status: 200, description: 'User logged in successfully.', type: User })
  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @ApiResponse({ status: 200, description: 'New JWT generated.' })
  @Get('check-status')
  @Auth()
  checkAuthStatus(
    @GetUser() user: User
  ) {
    return this.authService.checkAuthStatus(user);
  }

  @ApiResponse({ status: 200, description: 'Succesfully accessed a private route.' })
  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    //@Req() request: Express.Request
    @GetUser() user: User, //custom decorator
    @GetUser('email') userEmail: string, //custom decorator
    //@Headers() headers: IncomingHttpHeaders,
    @RawHeaders() rawHeaders: string[] //custom decorator
  ) {
    return {
      ok: true,
      message: 'This is a private route',
      user,
      userEmail,
      rawHeaders
    };
  }

  @ApiResponse({ status: 200, description: 'Succesfully accessed a private route that requiered certain role.' })
  @Get('private-role')
  //@SetMetadata('roles', ['admin', 'super-user'])
  @RoleProtected(ValidRoles.superUser, ValidRoles.admin)
  @UseGuards(AuthGuard(), UserRoleGuard)
  privateRouteWithRole(
    @GetUser() user: User
  ){
    return {
      ok: true,
      message: 'This is a private route with role',
      user
    };
  }

  @ApiResponse({ status: 200, description: 'Succesfully accessed a private route that requiered certain role.' })
  @Get('private-role2')
  @Auth(ValidRoles.admin)
  privateRouteWithRole2(
    @GetUser() user: User
  ){
    return {
      ok: true,
      message: 'This is a private route with role v2',
      user
    };
  }
  
}
