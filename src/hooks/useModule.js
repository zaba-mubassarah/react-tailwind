import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "@/server/api";
import { setModule, setLoading } from "@/pages/curriculum/module/store";
import { setChapter } from "@/pages/curriculum/chapter/store";
import { toastOption } from "@/constant/data";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setAssignments } from "@/pages/curriculum/assignment/store";

const useModule = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { module } = useSelector((state) => state.module);

  useEffect(() => {
    serverLoadModules();
  }, []);

  const serverLoadModules = async () => {
    if (Object.keys(module).length === 0 || module?.id != id) {
      dispatch(setLoading(true));
      await api
        .get(`/course/${id}`)
        .then(async (response) => {
          if (response.status === 200) {
            dispatch(setModule(response.data.data));
            dispatch(setChapter(response.data.data?.course_modules));
            await pushModules(response.data.data?.course_modules, "assignment");
          } else {
            toast.warning(response.data?.message, toastOption);
            navigate("/course/list");
          }
        })
        .catch((error) => {
          toast.error(error?.message, toastOption);
          navigate("/course/list");
        });
      dispatch(setLoading(false));
    }
  };

  const pushModules = async (course_modules, type) => {
    const allItems = [];
    let module = [];
    if (course_modules.length > 0) {
      await course_modules.map((item) => {
        if (type === "assignment") {
          module = item.course_assignments;
        } else if (type === "video") {
          module = item.course_videos;
        } else if (type === "script") {
          module = item.course_scripts;
        } else if (type === "assessment") {
          module = item.course_assessments;
        }
        if (module.length > 0) {
          module.map((single) => {
            allItems.push({
              id: single.id,
              module_id: item.id,
              ...single,
            });
          });
        }
      });
    }
    if (type === "assignment") {
      dispatch(setAssignments(allItems));
    }
  };
};

export default useModule;
