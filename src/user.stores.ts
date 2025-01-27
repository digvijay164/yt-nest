interface User {
  id: number;
  name: string;
}
export class UserStore {
  private store = new Map<number, User>();

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
