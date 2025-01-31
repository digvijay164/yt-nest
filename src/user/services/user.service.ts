/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CacheStoreService } from "src/cache-store/cache.store.service";

// export interface User {
//     id: number;
//     name: string;
//   }

@Injectable()
export class UserService{
    constructor(private store: CacheStoreService){}
    // private store = new Map<number, User>();
    
    // addUSer(user: User){
    //    return this.store.set(user.id, user)
    // }
    // getUsers(){
    //    return Array.from(this.store).map( ( [_ , user] )=> user )
    // }
    // getUser(id: number){
    //     return this.store.get(id)
    // }
    // updateUser(id:number, user:User){
    //     return this.store.set(id, user)
    // }
    // deleteUser(id:number){
    //     return this.store.delete(id)
    // }
}