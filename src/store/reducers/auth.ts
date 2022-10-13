const initialState = {};

type InitialStateType = typeof initialState;

export const authReducer = (
  // eslint-disable-next-line default-param-last
  state: InitialStateType = initialState,
  action: AuthActionsType,
): InitialStateType => {
  switch (action) {
    default:
      return state;
  }
};

export const setIsLoggedInAC = (value: boolean) =>
  ({ type: 'LOGGED-IN', value } as const);

export type AuthActionsType = ReturnType<typeof setIsLoggedInAC>;
