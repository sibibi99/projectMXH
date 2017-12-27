import * as assert from 'assert';
import { User} from '../../src/models/User';

xdescribe('Test user', () => {
    it ('Can create new user', async () => {
        const user = new User({ email: 'si@gmail.com', password: '123', name: 'Mr Si'});
        await user.save();
        const numOfUsers = await User.count({});
        assert.equal(numOfUsers, 1);
    });
});

describe('Test Signup', () => {
    it('Can sign up with full info', async () => {
        await User.signUp('sangsi@gmail.com', '123', 'Mr Si');
        const user = await User.findOne({email: 'sangsi@gmail.com' }) as User;
        assert.equal(user.name, 'Mr Si');
    });

    it('Cannot sign up with dup email', async () => {
        await User.signUp('vanpho1@gmail.com', '123', 'Pho');
        try {
            await User.signUp('vanpho1@gmail.com', '1234', 'Pho 2');
        } catch (err) {
            const count = await User.count({});
            assert.equal(count, 1);
            assert.equal(err.code, 11000);
        }
    });
});
