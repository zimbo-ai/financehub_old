/// <reference types="@sveltejs/kit" />

import type { Session } from 'db/src/models/Session/Session';
declare namespace App {
  interface Locals {
    session: Session | null;
  }
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}
