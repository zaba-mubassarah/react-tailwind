import axios from "axios";
import { BASE_URL } from "@/config";
import { toast } from "react-toastify";
import { toastOption } from "@/constant/data";
import { BASE_URL_CLMS } from "@/config";

const _token = window.localStorage.getItem("_token");
const TOKEN = _token ? JSON.parse(_token) : null;
const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
    },
});
const instanceForLogin = axios.create({
    baseURL: BASE_URL_CLMS,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
    },
});
instance.interceptors.response.use(
    (response) => {
        const method = response.config.method;
        if (
            method == "get" &&
            (response.status < 200 || response.status > 204)
        ) {
            toast.info("Data not found", toastOption);
        }
        if (
            method === "post" ||
            method === "put" ||
            method === "patch" ||
            method === "delete"
        ) {
            const message = response.data?.message;
            if (response.status >= 200 || response.status <= 204) {
                toast.success(message, toastOption);
            } else {
                toast.error(message, toastOption);
            }
        }
        return response;
    },
    (err) => {
        toast.error(err.response?.data?.message, toastOption);
        return new Promise((resolve, reject) => {
            if (err.response?.status === 401) {
                // Invalid token
                window.location.href = "/";

                return reject(err);
            } else if (err.response?.status === 403) {
                // Not authorized
                window.location.href = "/dashboard";
            } else {
                return reject(err);
            }
        });
    }
);

export default {
    get: (url, params = "") =>
        instance({
            method: "GET",
            url,
            params,
        }),
    post: (url, data) =>
        instance({
            method: "POST",
            url,
            data,
        }),
    postLogin: (url, data) =>
        instanceForLogin({
            method: "POST",
            url,
            data,
        }),
    filepost: (url, data) =>
        instance({
            method: "POST",
            url,
            data,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }),
    put: (url, data) =>
        instance({
            method: "PUT",
            url,
            data,
        }),
    fileput: (url, data) => {
        data.append("_method", "PUT");
        return instance({
            method: "POST",
            url,
            data,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    patch: (url, data) =>
        instance({
            method: "PATCH",
            url,
            data,
        }),
    filepatch: (url, data) => {
        data.append("_method", "PATCH");
        return instance({
            method: "PATCH",
            url,
            data,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    delete: (url, data) =>
        instance({
            method: "DELETE",
            url,
            data,
        }),
};
