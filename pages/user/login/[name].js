import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Password from "../../../components/Input/Password";

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
      <Password
        {...register("password", { required: true })}
        error={errors.password}
        cornerAdornment={<button type="submit">{">"}</button>}
        autoFocus
      />
    </form>
  );
}
