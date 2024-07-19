import {useState , useEffect} from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    
    });

    const [books, setBooks] = useState([]);
    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const response = await fetch('http://localhost:3000/posts', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (response.ok) {
            const data = await response.json();
            setBooks(books);
          }
        } catch (error) {
          console.error('Fehler beim Laden der Bücher:', error);
        }
      };

        fetchBooks();
      }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };   



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Ein Buch anlegen</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Titel
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Titel hier"
            className="input input-bordered w-full px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
            Autor
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Autor hier"
            className="input input-bordered w-full px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Inhalt
          </label>
          <input
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Inhalt hier"
            className="input input-bordered w-full px-3 py-2"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full py-2">
          Buch anlegen
        </button>
      </form>
      <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Bücherliste</h2>
          <ul className="space-y-4">
            {books.map((book) => (
              <li key={book.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{book.title}</h3>
                <p className="text-gray-700">Autor: {book.author}</p>
                <p className="text-gray-700">Inhalt: {book.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

  
  export default App;
