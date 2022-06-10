import { useState } from 'react'
import { useForm } from 'react-hook-form'

const IndexPage = () => {
  const [user, setUser] = useState()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = ({ username, password, remember }) => {
    // You should handle login logic with username, password and remember form data
    setUser({ name: username })
  }

  return (
    <div className="container">
              <h2>Test</h2>

      {user ? (
        <span className="hello-user">Hello, {user.name}!</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <h2 className="form-header">LOGIN</h2>
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="user name"
              {...register('username', {
                required: { value: true, message: 'User name is required' },
                minLength: {
                  value: 3,
                  message: 'User name cannot be less than 3 character',
                },
              })}
              className={'form-field' + (errors.username ? ' has-error' : '')}
            />
            {errors.username && (
              <span className="error-label">{errors.username.message}</span>
            )}
          </div>
          <div className="row">
            <input
              type="password"
              placeholder="password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Please enter your password',
                },
              })}
              className={'form-field' + (errors.password ? ' has-error' : '')}
            />
            {errors.password && (
              <span className="error-label">{errors.password.message}</span>
            )}
          </div>
          <div className="row row-remember">
            <input type="checkbox" id="remember" {...register('remember')} />
            <label htmlFor="remember" className="remember-label">
              Remember me
            </label>
          </div>
          <div className="row">
            <button type="submit" className="nes-btn is-primary " >
              Login
            </button>
          </div>
        </form>
      )}
      <a className="nes-btn" href="#">Normal</a>

    </div>
  )
}

export default IndexPage
