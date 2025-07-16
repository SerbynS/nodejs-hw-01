import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const data = await readContacts();

  data.push(createFakeContact());

  writeContacts(data);
};

addOneContact();
