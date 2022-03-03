import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

// declaring useing passport local strategy

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  
}