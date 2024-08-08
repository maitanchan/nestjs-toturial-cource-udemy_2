import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetUser = createParamDecorator(

    (data: any, context: ExecutionContext) => {

        const req = context.switchToHttp().getRequest()

        return req.user

    }

)