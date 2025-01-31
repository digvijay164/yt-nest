import { Module } from "@nestjs/common";
import { JobService } from "./job.servoce";
import { UserModule } from "src/user/user.module";

@Module({
    imports:[UserModule],
    providers:[JobService],
    exports:[JobService]
})
export class JobModule{}