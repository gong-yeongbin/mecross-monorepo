import { Request, RequestHandler, Response } from 'express';

export const tracking: RequestHandler = (req: Request, res: Response) => {
  console.log(req.query);
  res.send('tracking');
};
