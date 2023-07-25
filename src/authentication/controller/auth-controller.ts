import { Request, Response, NextFunction } from 'express';
import auth from '../service/auth-service';

class AuthController {

  authentication = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const authToken = await auth.authentication(req.body);
      res.status(200).send({ authToken: authToken });
    } catch (err) {
      console.error(err);
      res.statusCode = 401;
      res.json({
        error: err
      });
    }
  };

  signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await auth.registerUser(req.body);
      res.status(200).send({ status: 'success', signUp: true });
    } catch (err) {
      console.error(err);
      res.statusCode = 401;
      res.json({
        error: err
      });
    }
  };

  resetPassword = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const authToken = await auth.resetPassword(req.body);
      res.status(200).send({ msg: 'password reset success', authToken: authToken });
    } catch (err) {
      console.error(err);
      res.statusCode = 401;
      res.json({
        error: err
      });
    }
  };

}

const authControllerObject = Object.freeze(new AuthController());

export default authControllerObject; 
