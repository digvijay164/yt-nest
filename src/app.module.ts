/* eslint-disable prettier/prettier */
import { Injectable, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { UserStore } from "./user.stores";
import { UserService } from "./user.service";
// import { UserStore } from './user.stores';
// const IS_DEV_MODE = true;

@Injectable()
class ENVconfig{
  envType: "DEV"|"STAGE"|"PROD";
  constructor(){
    this.envType = "DEV"
  }
}

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserStore,
      useClass: UserStore
    },
    {
      provide: "Mail_DB",
      useValue: ["a1@mail.com", "b2@mail.com", "d3@mail.com"],
    },
    {
      provide: "DB_String",
      useValue: "DB-NAME_IN_STRING"
    },
    {
      provide: "ENV_CONIG",
      useValue: {
        type:"DEV",
        node:17
      }
    },
    {
      provide: "EVENT_STORE",
      useFactory: (config: ENVconfig, limit: number = 4)=>{
        const eventBUS =  config.envType === "DEV"
        ? new ReplaySubject(2)
        : new BehaviorSubject(null)

        console.log(limit);
        
        return eventBUS;
      }, 
      inject: [ ENVconfig, { token:"LIMIT", optional:true }],
    },
    ENVconfig,
    {
      provide: "LIMIT",
      useValue: 2
    }

  ],
})
export class AppModule {}


  // {
    //   provide: UserStore,
    //   useClass: UserStore,
    // },
    