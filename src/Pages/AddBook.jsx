import dotenv from "dotenv";
dotenv.config({
  path: "../../.env",
});
//import from react
import { useState } from "react";
//import from firebase
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.js";
// import from react toast for notification
import { toast } from "react-toastify";
// import loading button
import LoadingButton from "../Components/LoadingButton.jsx";

export default function AddBook() {
  const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Cloudinary details
  const CLOUD_NAME = process.env.CLOUD_NAME;
  const UPLOAD_PRESET = process.env.UPLOAD_PRESET;

  // Run After form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // If any fild is not fill by user the show alert.
    if (!title || !author || !category || !file) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);

    try {
      // Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      const imageUrl = data.secure_url;

      // Add book to Firestore
      await addDoc(collection(db, "books"), {
        title,
        // price: Number(price),
        author,
        category,
        imageUrl,
        createdAt: serverTimestamp(),
      });


      toast.success("Book added successfully!", { autoClose: 2000 });


      // Reset form
      setTitle("");
      // setPrice("");
      setAuthor("");
      setCategory("");
      setFile(null);
    } catch (err) {
      toast.error("❌ Failed to add book", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        {/* Title   */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          📚 Add a New Book
        </h2>
        {/* Main Form   */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Book Title  */}
          <input
            type="text"
            placeholder="Book Title"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* Book Price   */}
          {/* <input
            type="number"
            placeholder="Price"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          /> */}
          {/* Book Author   */}
          <input
            type="text"
            placeholder="Author"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {/* Book Category   */}
          <input
            type="text"
            placeholder="Category (e.g., Fiction, Programming)"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {/* Book Image upload  */}
          <input
            type="file"
            accept="image/*"
            className="w-full px-4 py-3 border rounded-lg text-black"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {/* Submit Button   */}
          <LoadingButton
            loading={loading}
            type={"submit"}
            children={"Add Book"}
            BtnText={"Uploading..."}
          />
        </form>
      </div>
    </div>
  );
}














