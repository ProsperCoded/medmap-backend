import { BaseException } from "./base.exception";
export class InternalServerException extends BaseException {
  constructor(message: string, cause?: string) {
    super(message, cause || "Internal Server Error");
    this.status = 500;
  }
}
