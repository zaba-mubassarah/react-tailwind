import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "@/server/api";
import {
  loadSubject,
  setLoading,
  flushCourse,
} from "@/pages/teacherGuide/subject/store";
import { toastOption, PER_PAGE } from "@/constant/data";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const useSubject = () => {
  const dispatch = useDispatch();
  const { subjects } = useSelector((state) => state.subject);
  const { t } = useTranslation();

  useEffect(() => {
    getDataFromApi();
  }, []);

  const handlePagination = (page) => {
    getDataFromApi(true, page);
  };

  const handleSearch = (searchString) => {

  };

  const getDataFromApi = async (newPage = false, page = 1, search = "") => {
    if (subjects.length === 0 || newPage || search.length > 0) {
      dispatch(setLoading(true));
      const param = {
        pagination: true,
        search,
        page,
        itemsPerPage: PER_PAGE,
      };

      await api
        .get("/subject", { ...param })
        .then((response) => {
          if (response.status === 200) {
            dispatch(loadSubject(response.data));
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

  const handleDelete = async (course) => {
    dispatch(setLoading(true));
    await api
      .delete(`/subject/${course.id}`)
      .then(async (response) => {
        if (response.status === 200) {
          await dispatch(flushCourse());
          await getDataFromApi(true);
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

export default useSubject;
