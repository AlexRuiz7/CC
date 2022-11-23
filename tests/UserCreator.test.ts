import { UserCreator } from '../src/Users/application/UserCreator';
import { User } from '../src/Users/domain/User';

const sampleUser = new User('John', 'john.doe@mail.com', '1234567890');



describe("User", () => {
    it("should create a user", () => {
        const userCreator = new UserCreator(null);
        const user = userCreator.create("John", "john.doe@mail.com", "1234567890");
        expect(user).toEqual(sampleUser);
    });
});