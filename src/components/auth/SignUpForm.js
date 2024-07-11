import React from 'react'
import styles from './SignUpForm.module.scss'
import EmailInput from './EmailInput';

const SignUpForm = () => {
  return (
    <div className={styles.SignUpForm}>
      <div className = {styles.formStepActive}>

      <EmailInput />

        </div>
    </div>
  )
}

export default SignUpForm;