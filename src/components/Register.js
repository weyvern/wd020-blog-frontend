import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { isAuthenticated, signup } = useAuth();

  const onSubmit = formData => signup(formData);

  if (isAuthenticated) return <Navigate to='/protected' />;
  return (
    <div className='row mt-5 justify-content-center'>
      <div className='col-md-4'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='name' className='form-label'>
              Name:
            </label>
            <input
              className={errors.name ? 'form-control is-invalid' : 'form-control'}
              {...register('name', { required: true })}
            />
            {errors.name && <div className='invalid-feedback'>Name is required</div>}
          </div>
          <div>
            <label htmlFor='email' className='form-label'>
              Email:
            </label>
            <input
              className={errors.email ? 'form-control is-invalid' : 'form-control'}
              type='email'
              {...register('email', { required: true })}
            />
            {errors.email && <div className='invalid-feedback'>Email is required</div>}
          </div>
          <div>
            <label htmlFor='password' className='form-label'>
              Password:
            </label>
            <input
              className={errors.password ? 'form-control is-invalid' : 'form-control'}
              type='password'
              {...register('password', { required: true })}
            />
            {errors.password && <div className='invalid-feedback'>Password is required</div>}
          </div>
          <button type='submit' className='mt-3 btn btn-success'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
