import mongoose = require ('mongoose');
import { connect} from 'mongoose';

mongoose.Promise = global.Promise;

function getDatabaseUri() {
if (process.env.NODE_ENV === 'test') return 'mongodb://localhost/project_MXH-test';
if (process.env.NODE_ENV === 'production') return 'mongodb://...';
return 'mongodb://localhost/project_MXH';
}

connect('mongodb://localhost/project_MXH', { useMongoClient: true})
.catch(err => console.log(err));
