/* eslint-disable prettier/prettier */
import { Body, Controller, Param, Post, Get, Put, Delete } from "@nestjs/common";
import { CreateUserDTO } from "../dto";
import { UserService } from "../services/user.service";


@Controller("/users")
export class UserController {
  constructor(private userService: UserService){}   
  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    this.userService.addUSer(createUserDto)
    return {message: "User created", data: createUserDto};
  }

  @Get()
  finAllUser(){
    
    return {message: "All users", data: this.userService.getUsers()};
  }

  @Get(':id')
  findUser(@Param('id') id: number){
    
    return {message: "User found", data: this.userService.getUser(+id)};
  }

  @Put(':id')
  updateUsers(@Param('id') id:number, @Body() updateDto: CreateUserDTO){
    
    return {message: "User updated", data: this.userService.updateUser(+id, updateDto)};
  }

  @Delete(':id')
  deleteUser(@Param('id') id:number,){
    
    return {message: "User deleted", data: this.userService.deleteUser(+id)};
  }
}