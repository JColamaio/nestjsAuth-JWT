import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    // With the following code i can assign a serie of parameters to know if the token
    // has an specific role, if it's a manager, an admin, etc.
    // canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
    // }
}