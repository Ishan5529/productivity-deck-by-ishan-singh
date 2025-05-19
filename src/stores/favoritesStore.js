import { create } from "zustand";

const useFavoritesStore = create(set => ({
  favorites: JSON.parse(localStorage.getItem("favorites")) || {},
  toggleFavorite: ({ url, title }) =>
    set(state => {
      const updatedFavorites = { ...state.favorites };
      if (updatedFavorites[url]) {
        delete updatedFavorites[url];
      } else {
        updatedFavorites[url] = title;
      }
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return { favorites: updatedFavorites };
    }),
}));

export default useFavoritesStore;
