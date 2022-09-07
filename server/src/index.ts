import express, {Request, response, Response} from 'express'
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';

const app = express();

// app.get('/', (req: Request, res: Response)=> {
//   res.send(
//     `
//     <div>
//       <h1>Hey there!</h1>
//     </div>`
//   )
// })

app.use(bodyParser.urlencoded({extended: true}))
app.use(router);

app.listen(3000, ()=> {
  console.log("listening on port 3000")
})