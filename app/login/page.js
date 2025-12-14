'use client';
import { useState } from 'react';
import axios from 'axios'; // API дуудлагад зориулж axios импортлох

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null); // Алдааны мэдээллийг хадгалах төлөв
  const [isLoading, setIsLoading] = useState(false); // Ачааллыг харуулах төлөв

  const handleChange = (e) => {
    // Алдааг дахин оролдох бүрт арилгах
    setError(null);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Илгээхээс өмнө өмнөх алдааг цэвэрлэх
    setIsLoading(true); // Ачааллаж эхэллээ

    // ** Try...Catch блок API дуудлагыг барих **
    try {
      // API дуудлага хийх (Энд таны жинхэнэ API endpoint байна)
      const response = await axios.post('/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      // Хэрэв амжилттай бол:
      console.log('Нэвтрэлт амжилттай:', response.data);
      alert('Амжилттай нэвтэрлээ!');
      
      // Үндсэн хуудас руу шилжүүлэх эсвэл төлөвийг шинэчлэх
      // router.push('/dashboard'); 

    } catch (err) {
      // Алдаа гарвал:
      console.error('Нэвтрэх үед алдаа гарлаа:', err);
      
      let errorMessage = 'Дотоод серверийн алдаа. Дахин оролдоно уу.';

      // Axios-ийн алдаа эсэхийг шалгах, мөн Response байгаа эсэхийг шалгах (4xx, 5xx)
      if (axios.isAxiosError(err) && err.response) {
        // Серверээс ирсэн алдааны мессежийг авах (Жишээ нь: 'Нууц үг буруу байна')
        // err.response.data нь backend-ийн хариунаас хамаарна.
        errorMessage = err.response.data.message || `Алдаа: ${err.response.status} ${err.response.statusText}`;
      } else if (err.message) {
        // Сүлжээний эсвэл бусад Javascript-ийн алдаа
        errorMessage = err.message;
      }
      
      // Алдааны төлөвт хадгалах
      setError(errorMessage);

    } finally {
      // Амжилттай эсвэл алдаатай байсан ч ачааллыг зогсоох
      setIsLoading(false); 
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-4xl mb-8 font-bold text-gray-700">Нэвтрэх</h1>
        
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 text-black">
          
          {/* ** Алдааг харуулах хэсэг ** */}
          {error && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Алдаа: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          {/* ** Алдааг харуулах хэсэг дуусав ** */}
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Email хаяг"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Нууц үг
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Нууц үг"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              type="submit"
              disabled={isLoading} // Ачааллаж байвал товчийг идэвхгүй болгох
            >
              {isLoading ? 'Нэвтэрч байна...' : 'Нэвтрэх'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}