import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(cors);
app.use(helmet());

app.listen(3001, () => {
    console.log('Server online');
});
