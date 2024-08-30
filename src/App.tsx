import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyle";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { MyPage } from "./pages/MyPage";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "profile",
                element: <MyPage />,
            },
            // {
            //     path: "profile",
            //     element: (
            //         <ProtectedRoute>
            //             <Profile />
            //         </ProtectedRoute>
            //     ),
            // },
            // 이거 처럼 ProtectedRoute라는 컴포넌트로 유저가 로그인 되어있는지 확인하기
            // 로그인, 회원가입은 ProtectedRoute로 감쌀 필요 없음!
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signUp",
        element: <SignUp />,
    },
]);

function App() {
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={Router} />
        </>
    );
}

export default App;
