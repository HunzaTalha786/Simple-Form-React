import { useState } from 'react'
import './App.css'

function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender , setGender] =useState('');
  const [submitted, setSubmitted] = useState(false);

  //  Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);  // Mark the form as submitted
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Form Data:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Gender:</strong> {gender}</p>
        </div>
      )}
    </div>
  );
}

export default SimpleForm;