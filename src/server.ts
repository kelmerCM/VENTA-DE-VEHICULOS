import { App } from "./config/index";

async function main(){
    const app = new App(1600);
    await app.listen();

}

main();