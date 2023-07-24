"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { userSchema, User } from '@/models';

const RegisterForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<User>({ resolver: zodResolver(userSchema) })
  const handleData = (userData: User) => {
    console.log('It Worked:', userData)
  }
  return (
    <div className='text-wh'>
      <form onSubmit={handleSubmit(handleData)} >
        <div className='grid'>
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" className='text-black px-2 py-1' placeholder="First Name" {...register('firstName')} />
          {errors.firstName && <span className='text-red-500 text-sm' >{errors.firstName.message}</span>}
        </div>
        <div className='grid'>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" className='text-black px-2 py-1' placeholder="Last Name" {...register('lastName')} />
          {errors.lastName && <span className='text-red-500 text-sm' >{errors.lastName.message}</span>}
        </div>
        <div className='grid'>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className='text-black px-2 py-1' placeholder="Email" {...register('email')} />
          {errors.email && <span className='text-red-500 text-sm' >{errors.email.message}</span>}
        </div>
        <div className='grid'>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" className='text-black px-2 py-1' placeholder="Age" {...register('age', { valueAsNumber: true })} />
          {errors.age && <span className='text-red-500 text-sm' >{errors.age.message}</span>}
        </div>
        <div className='grid'>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className='text-black px-2 py-1' placeholder="Password" {...register('password')} />
          {errors.password && <span className='text-red-500 text-sm' >{errors.password.message}</span>}
        </div>
        <div className='grid'>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" className='text-black px-2 py-1' placeholder="Confirm Password" {...register('confirmPassword')} />
          {errors.confirmPassword && <span className='text-red-500 text-sm' >{errors.confirmPassword.message}</span>}
        </div>
        <input type="submit" className='h-[40px] bg-slate-800 px-24 my-4 hover:bg-slate-900' value="Save" />

      </form>
    </div>
  )
}

export default RegisterForm
