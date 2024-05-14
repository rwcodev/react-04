import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import './styles/FormUser.css'
 
const FormUser = ({ 
  createUser, 
  userSelected, 
  updateUser, 
  setUserSelected,
  formIsOpen, 
  setFormIsOpen,
}) => {
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => { 
    reset(userSelected)
  }, [userSelected])

  const submit = data => {
    if(userSelected) {
      // Update
      updateUser(userSelected.id, data)
      setUserSelected()
    } else {
      // Create
      createUser(data);
    }
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    });
    setFormIsOpen(false);
  };
  
  const handleExit = () => {
    setFormIsOpen(false);
    reset ({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    });
    setUserSelected()
  };
 
    return (
        <div className={`form-container ${formIsOpen || "form__close"}`}>
            <form className="form" onSubmit = {handleSubmit(submit)}>
              <span onClick={handleExit} className="form__exit" n>x</span>
              <h2 className="form__title">
                {userSelected ? 'Register Form' : 'Create User Form'}
              </h2>
        <div className="form__list">
              <label className="form__field">
                <span className="form__label">Email</span>
                <input className="form__input" {...register('email')} type="email" />
              </label>
      

              <label className="form__field">
                 <span className="form__label">Password</span>
                 <input className="form__input" {...register('password')} type="password" />
              </label>
              <label className="form_field">
                  <span className="form__label">First Name</span>
                  <input className="form__input" {...register('first_name')} type="text" />
              </label>
              <label className="form__field">
               <span className="form__label">Last Name</span>
                   <input className="form__input"{...register('last_name')} type="text" />
                 </label>
               <label className="form__field">
                  <span className="form__label">Birthday</span>
                  <input className="form__input"{...register('birthday')} type="date" />
               </label>
               </div>
                <button className="form__btn">Submit</button>
            </form>
        </div>
    );
};

export default FormUser;