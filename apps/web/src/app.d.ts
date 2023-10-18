/// <reference types="@sveltejs/kit" />

import type { Session } from 'db/src/models/Session/Session';

declare global {
  declare namespace App {
    interface Locals {
      session: Session | null;
    }
  }
}
