import {useState , useEffect} from 'react';

const App= () => {
    const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
            });
        }

return (
    <>
    
    <div>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Title</span>
      </div>
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Event Title here" className="input input-bordered w-full max-w-xs" />

      <div>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Author</span>
      </div>
    
      <div>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Content</span>
      </div>


    </>
)

export default App;
