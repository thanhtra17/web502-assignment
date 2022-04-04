import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api/user';
import { UserType } from '../../type/user';

type FormInputs={
  email:string,
  username:string,
  password:string
};

type SignupProps = {
  onAdd: (user: UserType) => void
}

const Signup = (props: SignupProps) => {
      const { register, handleSubmit , formState:{errors}} = useForm<FormInputs>()


      const navigate = useNavigate()

      const onSubmit: SubmitHandler<FormInputs>  = async (user) => {
        const { data } = await signup(user)
        props.onAdd(user);
        if(data){
          setTimeout(() => {
            navigate('/signin')
          },3000)
        }

      }
  return (
    <div>

      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div className="w-full sm:max-w-md p-5 mx-auto">
    <h2 className="mb-12 text-center text-5xl font-extrabold">Sign Up</h2>
    <form id="formSignup" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">User-Name</label>
        <input {...register('username')} id="username" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">Email-Address</label>
        <input {...register('email')} id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="password">Password</label>
        <input {...register('password')} id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div className="mt-6">
        <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign Up</button>
      </div>
    </form>
  </div>
</div>

    </div>
  )

}
export default Signup