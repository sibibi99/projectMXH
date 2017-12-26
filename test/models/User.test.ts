import * as assert from 'assert';
import { User} from '../../src/models/User';

describe('Test user', () => {
    it ('Can create new user', async () => {
        const user = new User({ email: 'si@gmail.com', password: '123', name: 'Mr Si'});
        await user.save();
        const numOfUsers = await User.count({});
        assert.equal(numOfUsers, 1);
    });
});
