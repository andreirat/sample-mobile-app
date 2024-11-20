import { atom } from 'jotai';

export interface Business {
  id: string;
}

const favoritesAtom = atom<Business[]>([]);

const addFavoriteAtom = atom(null, (get, set, newFavorite: Business) => {
  const favorites = get(favoritesAtom);
  if (!favorites.some(fav => fav.id === newFavorite.id)) {
    set(favoritesAtom, [...favorites, newFavorite]); // Add new favorite
  }
});

const removeFavoriteAtom = atom(null, (get, set, id: string) => {
  const favorites = get(favoritesAtom);
  set(
    favoritesAtom,
    favorites.filter(business => business.id !== id),
  );
});

const isFavoriteAtom = atom(get => (id: string) => {
  const favorites = get(favoritesAtom);
  return favorites.some(business => business.id === id); // Check by id
});

const favoritesStore = {
  favoritesAtom,
  addFavoriteAtom,
  removeFavoriteAtom,
  isFavoriteAtom,
};

export default favoritesStore;
