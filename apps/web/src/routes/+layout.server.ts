import Services from 'services';
import type { LayoutServerLoad } from './$types';

const handler: LayoutServerLoad = async ({ locals }) => {
  if (!locals.session) {
    return {
      lazy: {
        userProfile: null
      }
    };
  }

  try {
    return {
      lazy: {
        userProfile: Services.getUserProfile(locals.session.userProfileId)
      }
    };
  } catch (err) {
    return {
      lazy: {
        userProfile: null
      }
    };
  }
};

export const load = handler;
