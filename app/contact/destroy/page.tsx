import { redirect } from 'react-router';
import type { Route } from './+types/page';

import { deleteContact } from '../../data';

export async function action({ params }: Route.ActionArgs) {
  await deleteContact(params.slug);
  return redirect('/');
}
