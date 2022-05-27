import supertest  from "supertest";
import {app} from "../index";

const req = supertest(app);

describe("Test the server functionality",()=>{
    it("welcome route is working",async():Promise<void>=>{
        const res = await req.get("/");
        expect(res.status).toBe(200);
    })
    it("reuten error for unfound pages",async():Promise<void>=>{
        const  res = await req.get("/not-exist-route");
        expect(res.status).toBe(404);
    })
})
