//import from react
import { useEffect, useState } from "react";
//import from firebase
import { collection, getDocs } from "firebase/firestore";
//import from firebase.js
import { db } from "../firebase.js";
//import from react toast
import { toast } from "react-toastify";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching books detail from firebase.js
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const snap = await getDocs(collection(db, "books"));
        const list = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBooks(list);
      } catch (err) {
        toast.error("❌ Error fetching books:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  //Run when we try to download book
  const handleDownload = async (url, title) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${title}.jpg`; // you can change extension if needed
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  // Run until book detail is fetch
  if (loading)
    return (
      <p className="flex justify-center text-center mt-10">
        <span className="animate-spin">⌛</span> Loading books...
      </p>
    );

  return (
    <div className="min-h-screen p-6">
      {/* Title   */}
      <h1 className="text-3xl font-bold text-center mb-6">📚 Bookstore</h1>
      {/* Show when no book found */}
      {books.length === 0 ? (
        <p className="text-center text-gray-600">Sorry No books available.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* Using .map method to render book detail  */}
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-[#1e1e1e] border-2 border-purple-500 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Book Image  */}
              <img
                src={book.imageUrl}
                alt={book.title}
                className="flex items-center justify-center h-120 w-full object-cover"
              />
              <div className="p-4">
                {/* Book Title   */}
                <h2 className="text-lg font-semibold">Book: {book.title}</h2>
                {/* Book Author   */}
                <p className="text-sm text-gray-500">Author: {book.author}</p>
                {/* Book category   */}
                <p className="text-xs text-gray-400 mt-1">
                  Category: {book.category}
                </p>
                {/* book price   */}
                {/* <p className="mt-2 text-blue-600 font-bold">₹{book.price}</p> */}
              </div>
              {/* Book Download button   */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => handleDownload(book.imageUrl, book.title)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  📥 Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
