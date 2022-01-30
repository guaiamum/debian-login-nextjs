import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    query: { name },
  } = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data :>> ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>{name}</p>
      <input
        {...register("password", { required: true })}
        autoFocus
        type="password"
      ></input>
      <button type="submit">{">"}</button>
      {errors.password && <p className="error">Please provide a password!</p>}
    </form>
  );
}
