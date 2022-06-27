import app from './app'
import './db/database';

const port = process.env.PORT || 4000;
app.listen(port, console.log(`Server ready on port ${port}`))
