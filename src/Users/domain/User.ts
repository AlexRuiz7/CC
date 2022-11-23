import {v4 as uuidv4} from 'uuid';

/**
 * User model
 */
export class User {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly created_at: Date;
    readonly updated_at: Date | null;
    readonly deleted_at: Date | null;
    readonly avatar: string;
    readonly is_online: boolean;
    readonly is_verified: boolean;

    /**
     * Constructor
     * @param id
     * @param name
     * @param email
     * @param password
     */
    constructor(
        name: string,
        email: string,
        password: string,
    ) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.created_at = new Date();
        this.updated_at = null;
        this.deleted_at = null;
        this.avatar = '';
        this.is_online = false;
        this.is_verified = false;
    }
}