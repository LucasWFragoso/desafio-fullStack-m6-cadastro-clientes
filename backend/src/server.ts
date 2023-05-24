import { AppDataSource } from './data-source';
import app from './app';

AppDataSource.initialize()
.then(async () => {
    console.log("Database connected.")

    const PORT = process.env.PORT;

    app.listen(PORT, () => {
        console.log(`App is runnig on https://localhost:${PORT}`)
    })
})
.catch((err) => console.log(err));