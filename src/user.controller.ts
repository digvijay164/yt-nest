/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateUserDTO } from "./dto";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from "@nestjs/common";
import { response } from "express";

let USERS: Record<string, CreateUserDTO>[] = [];
@Controller("/user")
export class UserController {
  @Post()
  addVideo(@Body() createUserDto: Record<string, CreateUserDTO>) {
    console.log(createUserDto);
    USERS.push(createUserDto);
    console.log("from USERS", USERS);
    return {
      message: "requested data posted successfully",
      data: createUserDto,
    };
  }
  @Get()
  getAllUsers() {
    return USERS;
  }

  @Get(":id")
  getUser(@Param("id") id: number) {
    return USERS.find((user) => +user.id === +id);
  }

  @Put(":id")
  updateUser(
    @Param("id") id: number,
    @Body() updateDTO: Record<string, CreateUserDTO>,
  ) {
    const findIDX = USERS.findIndex((user) => +user.id === +id);
    if (!findIDX) return { message: "User not found" };
    USERS[findIDX] = updateDTO;
    return {
      message: "User updated successfully",
      data: updateDTO,
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id:number){
    USERS = USERS.filter((user)=> +user.id !== +id);
    return {
      message: 'User deleted successfully',
      data: USERS
    } 
  }

  // @Delete('/video/:id')
  // deleteUser(@Param('id') id:number, @Body() DTO: Record<string, User>){
  //   u1 = u1.find((user: User) => +user.id !== +id);
  //   console.log('ID', id);
  //   console.log(DTO);
  //   return{
  //     message: 'User deleted successfully',
  //     data: DTO
  //   }
  // }

  // @Get('/video/:id')
  // getUser(@Param('id') id: number, @Body() RequestData: Record<string, User>){
  //     const ID = u1.find((user: User)=> +user.id === +id);
  //     console.log('ID', id);
  //     console.log(RequestData);
  //     return {
  //         message: 'GET User by ID successfully',
  //         data: RequestData
  //     }
  // }
}
