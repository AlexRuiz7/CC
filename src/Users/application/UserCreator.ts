import { User } from '../domain/User';
import { UserRepository } from '../persistence/UserRepository';

/**
 * User creator
 */
export class UserCreator {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    async create(user: User): Promise<void> {
        await this.repository.create(user);
    }
}