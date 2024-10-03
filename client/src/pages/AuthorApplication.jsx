import { useState } from "react";


const AuthorApplication = () => {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          contactNumber: '',
        });
      
        const [message, setMessage] = useState('');
      
        // Handle input changes
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };
      
        // Handle form submission
        const handleSubmit = async (e) => {
          e.preventDefault();
          setMessage(''); // Reset message
      
          try {
            const response = await axios.post('http://localhost:5000/api/v1/apply', formData);
            setMessage(response.data.message); // Assuming response has a message
            setFormData({ name: '', email: '', contactNumber: '' }); // Reset form
          } catch (error) {
            setMessage('Error submitting application.');
            console.error(error);
          }
        };
      
        return (
          <div className="apply-for-author">
            <h2>Apply for Author</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Submit Application</button>
            </form>
          </div>
        );
}

export default AuthorApplication