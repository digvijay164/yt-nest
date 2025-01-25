/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Redirect,
  Req,
  Res,
} from "@nestjs/common";
import { Request, Response } from "express";
import { CreateUserDTO } from "./dto";
import { userInfo } from "os";

// interface videoParams{
//     id: number;
//     name: string;
// }
// interface queryParams{
//     id: number;
//     name: string;
// }
let USERS: CreateUserDTO[] = [];
// const USERS = [];
@Controller("/user")
export class UserController {
  // Learning about CRUD operations
  @Post()
  addUser(@Body() createUserDto: CreateUserDTO) {
    USERS.push(createUserDto);
    console.log(USERS);

    return {
      message: "User has been added successfully",
      user: createUserDto,
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
  updateUser(@Param("id") id: number, @Body() updateDTO: CreateUserDTO) {
    const userIdx = USERS.findIndex((user) => +user.id === +id);

    // Handle the case where the user is not found
    if (userIdx === -1) {
      return {
        message: "User not found",
        data: null,
      };
    }

    // Update the user object with new data
    USERS[userIdx] = { ...USERS[userIdx], ...updateDTO };

    return {
      message: "User details updated successfully",
      data: USERS[userIdx],
    };
  }
  @Delete(":id")
  deleteUser(@Param("id") id: number) {
    USERS = USERS.filter((user) => +user.id !== +id);
    return {
      message: "User has been deleted successfully",
      data: USERS,
    };
  }

  // Learning about @Param
  // @Get('/video/:id/:name')
  // getVideo(@Param() params: videoParams){
  //     console.log(params.id);
  //     console.log(params.name);
  //     return {
  //         id: params.id,
  //         name: params.name
  //     }
  // }

  // Learning about @Req and @Query
  // @Get('/video')
  // getVideo(@Query() query: Record<string ,queryParams>){
  //     console.log(query);
  //     return query;
  // }

  // @Post('/video')
  // getCideo(@Body() requestData: Record<string, any>){
  //     console.log(requestData);
  //     return{
  //         message: "Data received successfully",
  //         data: requestData
  //     }
  // }

  //   @Post("/profile")
  //   @Header("Cache-COntrol", "no one")
  //   @Header("X-My-Header", "My Header Value")
  //   @Redirect("/user/account")
  //   @Redirect("/user/Wallet")
  //   @HttpCode(200)
  //   getProfile(@Req() req: Request) {
  //     console.log(req);

  //     const rn = Math.random()
  //     if (rn > 5) {
  //       return {
  //         url: "/user/account",
  //         statusCode: 301
  //       };
  //     } else {
  //       return {
  //         url: "/user/wallet"
  //       };
  //     }

  //     //   return {
  //     //     id: 1,
  //     //     name: "Digvijay Desai",
  //     //     email: "digvijaydesai164@gmail.com",
  //     //   }

  //     // using express res:Response
  //     // res.json({
  //     //   id: 1,
  //     //   name: "Digvijay Desai",
  //     //   email: "digvijaydesai164@gmail.com",
  //     // });

  //     // return new Promise((resolve, reject) => {
  //     //   resolve({
  //     //     id: 1,
  //     //     name: 'Digvijay Desai',
  //     //     email: 'digvijaydesai164@gmail.com',
  //     //   });
  //     // });
  //   }

  //   @Get("/account")
  //   getAccount() {
  //     return "Redirected to /user/accouunt";
  //   }
  //   @Get("/wallet")
  //   getWallet() {
  //     return "Redirected to /user/Wallet";
  //   }
}
