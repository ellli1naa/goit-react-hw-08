import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items; // Отримати всі контакти
export const selectIsLoading = (state) => state.contacts.isLoading; // Чи йде завантаження
export const selectError = (state) => state.contacts.error; // Чи є помилка
export const selectFilter = (state) => state.filters; // Отримати фільтр

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter =
      typeof filter === "string" ? filter.toLowerCase() : "";
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
    );
  }
);
