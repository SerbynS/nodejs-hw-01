import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const data = await readContacts();

  for (let index = 0; index < number; index++) {
    data.push(createFakeContact());
  }

  writeContacts(data);
};

generateContacts(5);
