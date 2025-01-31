/* eslint-disable prettier/prettier */
import { Injectable, Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { JobModule } from "./job/job.module";
import { CacheStoreService } from "./cache-store/cache.store.service";
// import { UserController } from "./user/controllers/user.controller";
// import { BehaviorSubject, ReplaySubject } from "rxjs";
// import { UserStore } from "./user.stores";
// import { UserService } from "./user/services/user.service";
// import { UserStore } from './user.stores';
// const IS_DEV_MODE = true;



@Module({
  imports: [UserModule, JobModule, CacheStoreService],
  // providers: [AppServices],
})
export class AppModule {}
  