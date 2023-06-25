import { createUser, getUserData, deleteUser } from '../utils/apiCommands.js';

describe ('API commands', () => {
    let userId: number;
    let userEmail: string;

    afterAll(async () => {
        await deleteUser(userId);
});
    it ('Post command', async () => {
        const user = {
            name: 'Test Automation',
            email: 'qa@testing.com',
    };
    await createUser(user);
    userId= 1;
});
    it ('Get command', async () => {
        const userData = await getUserData(userId);
        userEmail = userData.email;

        console.log("User Email:", await userEmail);
});

});
