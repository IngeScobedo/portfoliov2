import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs, { init } from '@emailjs/browser'
init(import.meta.env.VITE_USER_ID)

console.log(
  import.meta.env.VITE_SERVICE_KEY,
  import.meta.env.VITE_TEMPLATE_ID,
  import.meta.env.VITE_USER_ID
)

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_ID,
        data,
        import.meta.env.VITE_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="mt-10 w-full flex flex-col justify-center items-center text-gray-900">
      <form
        className="w-4/6 flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="name"
          className="block text-white items-start w-full px-10"
        >
          Nombre
        </label>
        <input
          name="name"
          placeholder="Tu nombre..."
          {...register('name', { required: true })}
          className="w-5/6 p-2 my-2 border-2 border-gray-600 rounded-lg"
        />
        {errors.name && <span className="text-white m-2">Campo Requerido</span>}

        <label
          htmlFor="email"
          className="block text-white items-start w-full px-10"
        >
          Correo Electronico
        </label>
        <input
          name="email"
          placeholder="mail@dominio.com"
          {...register('email', { required: true })}
          className="w-5/6 p-2 my-2 border-2 border-gray-600 rounded-lg"
        />
        {errors.email && (
          <span className="text-white m-2">Campo Requerido</span>
        )}

        <label
          htmlFor="message"
          className="block text-white items-start w-full px-10"
        >
          Mensaje
        </label>
        <textarea
          name="message"
          placeholder="Escribeme un mensaje..."
          {...register('message', { required: true })}
          className="w-5/6 h-32 p-2 my-2 border-2 border-gray-600 rounded-lg"
        />
        {errors.message && (
          <span className="text-white m-2">Campo Requerido</span>
        )}

        <button
          type="submit"
          className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 m-5"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
            Enviar
          </span>
        </button>
      </form>
    </div>
  )
}

export default FormContact
