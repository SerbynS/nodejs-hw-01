import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  if (!Array.isArray(contacts) || contacts.length === 0) {
    console.log('Немає контактів для видалення.');
    return;
  }

  contacts.pop();
  await writeContacts(contacts);
};

removeLastContact();
