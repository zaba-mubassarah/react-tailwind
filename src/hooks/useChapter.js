import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "@/server/api";
import {
  loadCourse,
  setLoading,
  flushCourse,
} from "@/pages/curriculum/course/store";
import { toastOption, PER_PAGE } from "@/constant/data";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
// import { setCourseTypes } from "../pages/teacherGuide/content/store";

const useChapter = () => {
  const dispatch = useDispatch();
  const { courseTypes, courses } = useSelector((state) => state.course);
  const { t } = useTranslation();

  useEffect(() => {
    loadCourseType();
    serverLoadCourse();
  }, []);

  const handlePagination = (page) => {
    serverLoadCourse(true, page);
  };

  const handleSearch = (searchString) => {
   
  };

  const serverLoadCourse = async (newPage = false, page = 1, search = "") => {
    if (courses.length === 0 || newPage || search.length > 0) {
      dispatch(setLoading(true));
      const param = {
        pagination: true,
        search,
        page,
        itemsPerPage: PER_PAGE,
      };

      await api
        .get("/course", { ...param })
        .then((response) => {
          if (response.status === 200) {
            dispatch(loadCourse(response.data));
            if (response.data.data.length == 0) {
              toast.warning(t("data.not.found"), toastOption);
            }
          } else {
            toast.warning(response.data?.message, toastOption);
          }
        })
        .catch((error) => {
          console.error("error while fetching course", error);
          toast.error(error?.message, toastOption);
        });
      dispatch(setLoading(false));
    }
  };

  const loadCourseType = () => {
    if (courseTypes.length === 0) {
      api
        .get("/course-type")
        .then((response) => {
          if (response.status === 200) {
            // dispatch(setCourseTypes(response.data.data));
          } else {
            toast.warning(response.data.message, toastOption);
          }
        })
        .catch((e) => {
          toast.error(e?.message, toastOption);
        });
    }
  };

  const handleDelete = async (course) => {
    dispatch(setLoading(true));
    await api
      .delete(`/course/${course.id}`)
      .then(async (response) => {
        if (response.status === 200) {
          await dispatch(flushCourse());
          await serverLoadCourse();
          toast.success(response.data?.message, toastOption);
        } else {
          toast.warning(response.data?.message, toastOption);
        }
      })
      .catch((e) => {
        toast.warning(e?.message, toastOption);
      });
    dispatch(setLoading(false));
  };

  return [handlePagination, handleSearch, handleDelete];
};

export default useChapter;
