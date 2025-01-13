import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaAsterisk } from 'react-icons/fa';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { Link } from 'react-scroll';
import { useFormLocation } from '../../../context/LocationContext';
import { MESSAGE_LENGTH } from '../../../utils/constants';

function Contact() {
  const [remainingChars, setRemainingChars] = useState(MESSAGE_LENGTH);
  const { stateList, cityList, handleStateChange, handleCityChange } =
    useFormLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const handleTextareaChange = event => {
    const message = event.target.value;
    setRemainingChars(MESSAGE_LENGTH - message.length);
  };

  const onSubmit = data => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        response => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success(
            `Thank you, ${data.fullName}. Your message was sent successfully!`
          );
          reset();
        },
        err => {
          console.log('FAILED...', err);
          toast.error('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section
      id="Contact"
      className="section-contact d-flex flex-column align-items-center justify-content-center px-1 px-md-3 px-lg-5 py-5 position-relative">
      <div className="container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="row g-3 me-text-secondary px-3 px-lg-5">
          <div className="col-md-6 position-relative">
            <label
              htmlFor="fullName"
              className="form-label">
              Full Name{' '}
              <span className="me-text-primary">
                <FaAsterisk size={8} />
              </span>
            </label>
            <input
              type="text"
              maxLength={50}
              autoComplete="name"
              className="form-control form-control-sm"
              placeholder="First Last"
              id="fullName"
              {...register('fullName', {
                required: true,
              })}></input>
            {errors.fullName && (
              <div className="error-message text-danger position-absolute top-0 end-0">
                Please enter your full name
              </div>
            )}
          </div>

          <div className="col-md-6 position-relative">
            <label
              htmlFor="email"
              className="form-label">
              Email{' '}
              <span className="me-text-primary">
                {' '}
                <FaAsterisk size={8} />
              </span>
            </label>
            <input
              maxLength={100}
              type="email"
              autoComplete="email"
              className="form-control form-control-sm"
              id="email"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
                },
              })}></input>
            {errors.email && (
              <div className="error-message text-danger position-absolute top-0 end-0">
                Please enter a valid email address
              </div>
            )}
          </div>

          <div className="col-md-6">
            <label
              htmlFor="state"
              className="form-label">
              State
            </label>
            <Controller
              name="state"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  className="form-control form-control-sm"
                  autoComplete="address-level1"
                  list="stateOptions"
                  id="state"
                  placeholder="Type your state..."
                  {...field}
                  onChange={e => {
                    handleStateChange(e);
                    field.onChange(e.target.value);
                  }}
                />
              )}
            />
            <datalist id="stateOptions">
              {stateList.map(state => (
                <option
                  key={state.id}
                  value={state.name}
                />
              ))}
            </datalist>
          </div>

          <div className="col-md-6">
            <label
              htmlFor="city"
              className="form-label">
              City
            </label>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  className="form-control form-control-sm"
                  autoComplete="address-level2"
                  list="cityOptions"
                  id="city"
                  placeholder="Type your city..."
                  {...field}
                  onChange={e => {
                    handleCityChange(e);
                    field.onChange(e.target.value);
                  }}
                />
              )}
            />
            <datalist id="cityOptions">
              {cityList.map(city => (
                <option
                  key={city.id}
                  value={city.name}
                />
              ))}
            </datalist>
          </div>

          <div className="col-md-6">
            <label
              htmlFor="companyName"
              className="form-label">
              Company Name
            </label>
            <Controller
              name="companyName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  className="form-control form-control-sm"
                  autoComplete="organization"
                  id="companyName"
                  {...field}
                />
              )}
            />
          </div>

          <div className="mb-3 position-relative col-12">
            <label
              htmlFor="textarea"
              className="form-label">
              Leave a message
            </label>
            <textarea
              className="form-control"
              id="textarea"
              {...register('message', { maxLength: MESSAGE_LENGTH })}
              rows="2"
              maxLength={MESSAGE_LENGTH}
              onChange={e => {
                handleTextareaChange(e);
              }}></textarea>
            <small className="remainingChars text-end position-absolute me-text-secondary">
              {remainingChars} characters remaining
            </small>
          </div>

          <div className="col-12 d-flex justify-content-end gap-3">
            <button
              className="me-btn-reset mt-3"
              type="button"
              onClick={() => reset()}>
              Clear
            </button>
            <button
              className="me-btn-submit mt-3"
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="backToTopArrow text-center position-absolute start-50 translate-middle">
        <Link
          smooth={true}
          duration={500}
          to="Introduction"
          href="#Introduction"
          className="backToTopArrow text-center ">
          <MdKeyboardDoubleArrowUp size={30} />
        </Link>
      </div>
    </section>
  );
}

export default Contact;
