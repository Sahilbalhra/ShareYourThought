import { Request } from "express";

export type AppContext = {
  req: Request;
};

export type AuthenticatedAppContext={
    req: Request;
    userId: string;
}