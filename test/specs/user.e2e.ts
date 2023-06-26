import { createUser, getUserData, deleteUser } from '../utils/apiCommands.js';

describe ('API commands', () => {
    let userId: number;
    let userEmail: string;

    afterAll(async () => {
        await deleteUser(userId);
});
    it ('Post command', async () => {
        const user = {
            name: 'Automation',
            email: 'qa@automation.com',
    };
    await createUser(user);
    userId= 10;

});
    it ('Get command', async () => {
        const userData = await getUserData(userId);
        userEmail = userData.email;
        const userName = userData.name;

        console.log("Email:", await userEmail);
        console.log("Name:", await userName);
});

});
