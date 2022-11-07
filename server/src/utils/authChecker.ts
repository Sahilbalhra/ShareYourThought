import { AuthChecker } from "type-graphql";
import { AuthenticatedAppContext } from "../types/AppContext";
import { AuthRoles } from "./authRole";
import jwt from "jsonwebtoken";

export const authChecker: AuthChecker<
  AuthenticatedAppContext,
  AuthRoles
> = async ({ context }) => {
  try {
    const { authorization } = context.req.headers;

    if (!authorization) return false;

    const { userId }: any = jwt.verify(authorization, "Secret_Key");
    context.userId = userId;
    return true;
  } catch (error) {
    return false;
  }
};
