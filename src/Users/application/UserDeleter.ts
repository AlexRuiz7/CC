import { UserRepository } from '../persistence/UserRepository';

/**
 * User deleter
 */
export class UserDeleter {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}