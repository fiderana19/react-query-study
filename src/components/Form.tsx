import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import '../../node_modules/react-toastify/dist/ReactToastify.min.css';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
  username: string;
  email: string;
  telephone: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required("Le champ username requis !"),
  email: yup.string().email("Email invalide !").required("Le champ email requis !"),
  telephone: yup.string().min(9, "Un numero de telephone doit comprendre 9 caracteres !").required("Le champ telephone requis !"),
  password: yup.string().min(6, "Le mot de passe doit comprendre au moins 6 caracteres !").required("Le champ password requis !"),
})

function Form() {
  const {register, handleSubmit, formState} = useForm<FormValues>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  })
  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  const logOnSubmit: SubmitHandler<FormValues> = async (data: any) => {
    console.log(data)
  }

  const logOnError: SubmitErrorHandler<FormValues> = async (error: any) => {
    console.log(error)
  }

  return (
      <div className='p-2 border border-gray-500 rounded'>
        <div className='text-xl font-bold'>
          Veuillez completer ce formulaire
        </div>
        {
          isSubmitSuccessful && <div className='p-4 border-green-700 bg-green-400 rounded'>
           Success
          </div>
        }

        <form action="" className='p-4' onSubmit={handleSubmit(logOnSubmit, logOnError)}>
          <div className='my-2'>
            <label htmlFor="username">Username : </label>
            <input type="text" className={errors.username ? 'border p-1.5 border-red-500 text-red-500' : 'border p-1.5'} {...register('username', { required: "Champ vide", minLength: {value: 3, message: "Trop court"} })} />
            {errors.username && <div className='text-red-500 text-xs'>{errors.username.message}</div>}
          </div>
          <div className='my-2'>
            <label htmlFor="email">Email : </label>
            <input type="text" className='border p-1.5' {...register("email")} />
            {errors.email && <div className='text-red-500 text-xs'>{errors.email.message}</div>}
          </div>
          <div className='my-2'>
            <label htmlFor="telephone">Telephone : </label>
            <input type="text" className='border p-1.5' {...register("telephone")} />
            {errors.telephone && <div className='text-red-500 text-xs'>{errors.telephone.message}</div>}
          </div>
          <div className='my-2'>
            <label htmlFor="password">Password : </label>
            <input type="text" className='border p-1.5' {...register("password")} />
            {errors.password && <div className='text-red-500 text-xs'>{errors.password.message}</div>}
          </div>
          <button type='submit' className={isSubmitting ? 'bg-black' :  'border border-green-700 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 my-4'}>Submit</button>
        </form>
      </div>
  )
}

export default Form;
