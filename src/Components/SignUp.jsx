import { useState } from 'react';
import '../App.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (!validateConfirmPassword(password, value)) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form from submitting normally
    if (emailError || passwordError || confirmPasswordError || !email || !password || !confirmPassword) {
      alert('Form cannot be submitted!');
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input_content">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="Email"
            value={email}
            onChange={handleEmailChange}
            className={emailError ? 'invalid-border' : 'valid-border'}
          />
          {emailError && <p className="invalid">{emailError}</p>}
        </div>
        <div className="input_content">
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="Password"
            value={password}
            onChange={handlePasswordChange}
            className={passwordError ? 'invalid-border' : 'valid-border'}
          />
          {passwordError && <p className="invalid_1">{passwordError}</p>}
        </div>
        <div className="input_content">
          <label htmlFor="conPassword">Confirm Password:</label>
          <input
            type="password"
            id="conPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={confirmPasswordError ? 'invalid-border' : 'valid-border'}
          />
          {confirmPasswordError && <p className="invalid_2">{confirmPasswordError}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

