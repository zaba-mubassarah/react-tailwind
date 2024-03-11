import React, { useState } from "react";
import TextInput from "@/components/ui/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Checkbox from "@/components/ui/Checkbox";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleLogin } from "./store";
import { toast } from "react-toastify";
import Button from "@/components/ui/Button";
import { toastOption } from "@/constant/data";
import api from "@/server/api";
import { useTranslation } from "react-i18next";

const schema = yup
  .object({
    username: yup.string().required("Username is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    data.remember_me = checked;

    setLoading(true);
    await api
      .postLogin(`/login`, data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(handleLogin(response.data.data));
          setTimeout(() => {
            navigate("/dashboard");
            setLoading(false);
          }, 500);
        } else {
          toast.warning(response.data?.message, toastOption);
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error?.message, toastOption);
        setLoading(false);
        // toast.error("Invalid credentials", toastOption);
      });
  };

  const [checked, setChecked] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        name="username"
        defaultValue={"superadmin"}
        type="text"
        register={register}
        error={errors.email}
      />
      <TextInput
        name="password"
        type="password"
        defaultValue={"password"}
        register={register}
        error={errors.password}
      />
      <div className="flex justify-between">
        <Checkbox
          name="remember_me"
          value={checked}
          onChange={() => setChecked(!checked)}
          className="text-whiteddd-50"
          label={t('remeberMe')}
        />
        <Link
          to="/forgot-password"
          className="text-xs text-whiteddd-50 dark:text-bossanova-900 leading-6 font-medium"
        >
          {t('forgotPassword')}
        </Link>
      </div>

      <Button
        text={t('loginIn')}
        className="bg-lilac-200 btn-block"
        type="submit"
        isLoading={loading}
      />
    </form>
  );
};

export default LoginForm;
