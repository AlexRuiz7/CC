import { User } from "../domain/User";

/**
 * User repository interface for CRUD operations
 */
export interface UserRepository {
    create(user: User): Promise<void>;
    read(id: string): Promise<User>;
    update(user: User): Promise<void>;
    delete(id: string): Promise<void>;
}