const mongoose = require('mongoose');
// const URI = 'mongodb://localhost/petfood';
const URI = 'mongodb+srv://molinero:omnistack@cluster0-jhhrp.mongodb.net/petfood?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);

mongoose
  .connect(URI)
  .then(() => console.log('DB is up.'))
  .catch((err) => console.log(err));