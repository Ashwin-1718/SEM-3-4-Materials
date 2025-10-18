import { useState } from 'react';

 function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.email.includes('@')) newErrors.email = 'Invalid email';
    if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Login successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="component">
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({...form, password: e.target.value})}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;