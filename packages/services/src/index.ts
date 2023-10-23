import createArticleSource from './services/createArticleSource';
import createUserAccount from './services/createUserAccount';
import createUserProfile from './services/createUserProfile';
import createSession from './services/createSession';
import getSession from './services/getSession';
import getUserProfile from './services/getUserProfile';

import dotenv from 'dotenv';
dotenv.config();

class Services {
  public static createUserAccount = createUserAccount;
  public static createUserProfile = createUserProfile;
  public static createSession = createSession;
  public static getSession = getSession;
  public static getUserProfile = getUserProfile;
  public static createArticleSource = createArticleSource;
}

export default Services;
