import Services from 'services';
import type { LayoutServerLoad } from './$types';

const handler: LayoutServerLoad = async ({ locals }) => {
  if (!locals.session)
    return {
      userProfile: null
    };

  try {
    return {
      lazy: {
        userProfile: Services.getUserProfile(locals.session.userProfileId)
      }
    };
  } catch (err) {
    return {
      userProfile: null
    };
  }
};

export const load = handler;
