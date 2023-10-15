import createUserAccount from './services/createUserAccount';
import createUserProfile from './services/createUserProfile';
import createSession from './services/createSession';

import dotenv from 'dotenv';
dotenv.config();

class Services {
  public static createUserAccount = createUserAccount;
  public static createUserProfile = createUserProfile;
  public static createSession = createSession;
}

export default Services;
