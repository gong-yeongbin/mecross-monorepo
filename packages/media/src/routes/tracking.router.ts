import { Router } from 'express';
import { query } from 'express-validator';
import { tracking } from '../controllers/tracking.controller';
import { validatorErrorChecker } from '../middlewares/router.middleware';

const router: Router = Router();

router.get(
  '/',
  query('stime').notEmpty().trim().isString().withMessage('Invalid stime'),
  query('count').trim().notEmpty().isInt().withMessage('Invalid count'),
  query('campaign')
    .trim()
    .notEmpty()
    .isString()
    .withMessage('Invalid campaign'),
  validatorErrorChecker,
  tracking
);

export default router;
