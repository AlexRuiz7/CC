/**
 * User model
 */
export class User {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly deleted_at: Date;
    readonly avatar: string;
    readonly is_online: boolean;
    readonly is_verified: boolean;
}