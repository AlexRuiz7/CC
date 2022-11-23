import { User } from '../domain/User';
import { UserRepository } from '../persistence/UserRepository';

/**
 * User updater
 */
export class UserUpdater {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    async update(user: User): Promise<void> {
        await this.repository.update(user);
    }
}