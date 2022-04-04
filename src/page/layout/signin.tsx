import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../../api/user';

type FormInputs={
  email:string,
  password:string
};
const Signin = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<FormInputs>();
  const navigate = useNavigate();

  const onSumbit: SubmitHandler<FormInputs> = async (user) => {
    const { data } = await signin(user);
    
    
}

  return (
    <div>
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
  {/* component */}
  <section className="flex w-[30rem] flex-col space-y-10">
    <div className="text-center text-4xl font-medium">Log In</div>
    <form className="text-center" action="" onSubmit={handleSubmit(onSumbit)}>
    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input type="text" {...register('email')} placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
    </div>
    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input type="password" {...register('password')} placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
    </div>
    <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
      LOG IN
    </button>
    </form>
    <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>
    <p className="text-center text-lg">
      No account?
      <Link to={'/signup'} className="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</Link>
    </p>
    
  </section>
</main>

    </div>
  )
}

export default Signin