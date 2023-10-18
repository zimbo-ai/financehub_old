import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import type { Session } from 'db/src/models/Session/Session';
import Services from 'services';

const logger: Handle = async ({ event, resolve }) => {
  const start_time = Date.now();
  const response = await resolve(event);

  console.log(
    `[REQUEST - ${event.request.method} ${event.url.pathname}] : ${Date.now() - start_time}ms : ${
      response.status
    }`
  );
  return response;
};

const session: Handle = async ({ resolve, event }) => {
  const sessionID = event.cookies.get('fh_ses');
  if (!sessionID) return await resolve(event);

  event.locals.session = null;

  try {
    const session: Session = await Services.getSession(sessionID);
    event.locals.session = session;
  } catch (e) {}

  return await resolve(event);
};

export const handle = sequence(session, logger);
