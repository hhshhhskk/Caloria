"use client";
import React from "react";
import styles from "./page.module.css";
import { useForm } from "react-hook-form";

// FormData 인터페이스 정의
interface FormData {
  id: string;
  password: string;
}

const User: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // useForm에 FormData 타입을 제네릭으로 전달

  const onValid = (data: FormData) => {
    // data의 타입을 FormData로 지정
    console.log(data);
  };

  const onInValid = (errors: any) => {};

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <div className={styles.title}>
          <span>Caloria</span>
        </div>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onValid, onInValid)}
        >
          <div className={styles.inputDiv}>
            <input
              className={styles.input}
              type="text"
              placeholder="아이디"
              {...register("id", {
                required: "아이디는 필수사항입니다.",
              })}
            />
          </div>
          {errors.id ? (
            <div className={styles.error}>
              <span>{errors.id?.message}</span>
            </div>
          ) : (
            <div className={styles.blank}></div>
          )}
          <div className={styles.inputDiv}>
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호"
              {...register("password", {
                required: "비밀번호는 필수사항입니다.",
              })}
            />
          </div>
          {errors.password ? (
            <div className={styles.error}>
              <span>{errors.password?.message}</span>
            </div>
          ) : (
            <div className={styles.blank}></div>
          )}
          <button className={styles.loginBtn}>로그인</button>
        </form>
      </article>
    </main>
  );
};

export default User;
