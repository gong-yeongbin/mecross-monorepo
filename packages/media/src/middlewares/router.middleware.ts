import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

class RouterMiddleWare {
  validatorErrorChecker(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let make_msg: string = '';

      errors.array().map((v, i) => {
        make_msg += `${v.msg}\n `;
      });

      return res.status(400).json({ error: make_msg });
    }
    next();
  }
}

export const routerMiddleWare: RouterMiddleWare = new RouterMiddleWare();
