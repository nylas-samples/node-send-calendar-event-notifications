import 'dotenv/config';
import Nylas from "nylas";
Nylas.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});
const nylas = Nylas.with(process.env.ACCESS_TOKEN);
const currentAccount = await nylas.account.get();
// @ts-ignore
console.log({ currentAccount });
