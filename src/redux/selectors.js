export const selectFilteredContacts = (state) => {
  const contacts = state.contacts.items;
  const filter = state.filters.name;
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
