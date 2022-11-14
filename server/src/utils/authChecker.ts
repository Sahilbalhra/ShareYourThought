import { AuthChecker } from "type-graphql";
import { AuthenticatedAppContext } from "../types/AppContext";
import { AuthRoles } from "./authRole";
import jwt from "jsonwebtoken";

export const authChecker: AuthChecker<AuthenticatedAppContext, AuthRoles> = ({
  context,
}) => {
  try {
    const { authorization } = context.req.headers;
    if (!authorization) return false;
    // console.log("verify auth", authorization);
    const { userId }: string | any = jwt.verify(authorization, "Secret_Key");
    // console.log("userId: ", userId);
    context.userId = userId;
    return true;
  } catch (error) {
    return false;
  }
};
