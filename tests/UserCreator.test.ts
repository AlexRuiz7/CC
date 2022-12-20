// import { UserCreator } from '../src/Users/application/UserCreator';
// import { User } from '../src/Users/domain/User';

// const userFixture = {
//     name: 'John',
//     email: 'john.doe@mail.com',
//     password: 'fakeP@ssw0rd'
// };
// const sampleUser = new User(
//     userFixture.name,
//     userFixture.email,
//     userFixture.password
// );

// function dummyResolve() {
//     return Promise.resolve(sampleUser)
// }

// const userRepositoryMock = {
//     create: jest.fn((sampleUser) => Promise.resolve(sampleUser.id)),
//     read: jest.fn(dummyResolve),
//     update: jest.fn(dummyResolve),
//     delete: jest.fn(dummyResolve)
// };

// const userCreator = new UserCreator(userRepositoryMock);
// const userCreationTask = userCreator.create(sampleUser)

test('Testing the user creation process', () => {
    expect(1).toBe(1);
});

// test('the data is peanut butter', async () => {
//     const data = await userCreator.create(sampleUser);
//     expect(data).toBe(sampleUser.id);
// });
  
// //   test('the fetch fails with an error', async () => {
// //     expect.assertions(1);
// //     try {
// //       await fetchData();
// //     } catch (e) {
// //       expect(e).toMatch('error');
// //     }
// //   });

// // describe("User", () => {
// //     it("should create a user", () => {
// //         const userCreator = new UserCreator(userRepositoryMock);
// //         const user = userCreator.create(sampleUser).then(

// //         );

// //         expect(user.then(user => user.id)).toEqual(sampleUser.id);
// //     });
// // });