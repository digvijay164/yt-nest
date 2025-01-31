/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { UserService } from "../user/services/user.service";
import { AccountController } from "./controllers/account.controller";

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
