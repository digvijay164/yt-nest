import { Injectable, Scope } from "@nestjs/common";

interface User {
  id: number;
  name: string;
}

@Injectable({
  scope: Scope.REQUEST,
})
export class UserStore {
  private store = new Map<number, User>();

  constructor() {
    console.log("userstore init");
  }

  addUser(user: User) {
    this.store.set(user.id, user);
  }
  getUser(id: number) {
    return this.store.get(id);
  }

  getUsers() {
    return Array.from(this.store).map((_, user) => user);
  }
  updateUser(id: number, user: User) {
    return this.store.set(id, user);
  }
  delete(id: number) {
    return this.store.delete(id);
  }
}
