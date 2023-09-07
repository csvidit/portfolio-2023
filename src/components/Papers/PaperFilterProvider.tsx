// import { Context, Dispatch, createContext } from "react";
// import Filters from "./Filters";

// export const initialFilterState: Filters = Filters.All

// export type UserAction =
//   | { type: Filters.All;}
//   | { type: Filters.Development_Economics;}
//   | { type: Filters.International_Business;}
//   | { type: Filters.International_Finance;}

// export const userReducer = (
//     state: Filters,
//     action: Filters
//   ): Filters => {
//     switch (action.type) {
//     }
//   };

// export const AuthContext: Context<Filters> = createContext<Filters>(Filters.All);
// export const AuthDispatchContext: Context<Dispatch<UserAction> | null> = createContext<Dispatch<UserAction> | null>(null);