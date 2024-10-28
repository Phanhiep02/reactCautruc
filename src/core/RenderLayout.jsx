import { publicRoutes } from "../routes/publicRoutes";
import { Route, Routes } from "react-router-dom";
export default function RenderLayout() {
  const Layout = publicRoutes.layout;
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        {publicRoutes.routes.map(({ path, element }, index) => {
          const Component = element;
          return (
            <Route
              key={index}
              path={path}
              element={<Component></Component>}
            ></Route>
          );
        })}
      </Route>
    </Routes>
  );
}
