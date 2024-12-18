import { Route, Routes } from "react-router-dom";
import { useAuthData } from "../../context";
import { nav } from "./navigation";

export const RenderRoutes = () => {
    const { user } = useAuthData();
    return (
         <Routes>
         {nav.map((r, i) => {
              if (r.isPrivate && user.isAuthenticated) {
                   return <Route key={i} path={r.path} element={r.element}/>
              } else if (!r.isPrivate) {
                   return <Route key={i} path={r.path} element={r.element}/>
              } else return false
         })}
         </Routes>
    )
}