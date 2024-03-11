import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "@/components/Loading";
import Layout from "@/layout/Layout";

const SubjectList = lazy(() =>
    import("@/pages/teacherGuide/subject/SubjectList")
);



const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Layout />}>
                {/* <Route path="" element={<ClassList />} /> */}
                <Route path="subject/list" element={<SubjectList />} />           
                <Route path="" element={<Navigate to="/subject/list" />} />                            
            </Route>           
            <Route
                path="/404"
                element={
                    <Suspense fallback={<Loading />}>
                        <Error />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default AllRoutes;
