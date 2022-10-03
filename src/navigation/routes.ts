type MainStackRoutes = "Home" | "PostDetails";
export const Routes: {
  [p in MainStackRoutes]: MainStackRoutes;
} = {
  Home: "Home",
  PostDetails: "PostDetails",
};
export type MainStackParams = {
  [p in MainStackRoutes]: undefined;
};
