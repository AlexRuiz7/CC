import { User } from '../domain/User';
import { UserRepository } from '../persistence/UserRepository';

/**
 * User reader
 */
export class UserReader {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    async read(id: string): Promise<User> {
        const user = await this.repository.read(id);
        return user;
    }
}