import Image from "next/image";

const Home = () => {
  return (
    <main className="bg-gray-100">
      <div className="flex flex-col items-center text-black">
        <h1 className="text-3xl font-bold mb-4">Henry Filberto Shenelo</h1>
        <div className="mb-4">
          <Image src="/photo.jpg" alt="foto diri" width={300} height={300} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-2xl mb-4">
          <h2 className="text-2xl font-semibold mb-2">Penjelasan Singkat</h2>
          <p>
            Saya adalah mahasiswa Teknik Informatika ITB tahun kedua yang menjalani SPARTA 2023
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-2xl mb-4">
          <h2 className="text-2xl font-semibold mb-2">Minat dan Bakat</h2>
          <p>
            Saya memiliki minat pada bidang software engineering dan bakat saya adalah matematika dan programming in Python
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-2xl mb-4">
          <h2 className="text-2xl font-semibold mb-2">Projek dan Kepanitiaan</h2>
          <p>
            Saya pernah membuat projek game yang terinspirasi dari Pokemon dan membuat website untuk TEC.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-2xl mb-4">
          <h2 className="text-2xl font-semibold mb-2">Pencapaian</h2>
          <p>
            Saya telah memenangkan beberapa perlombaan selama masa studi saya.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-2xl mb-4">
          <h2 className="text-2xl font-semibold mb-2">Kontak</h2>
          <p>Email: 19623212@mahasiswa.itb.ac.id</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/henry-filberto-shenelo-209b732b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">linkedin.com/in/henryfilbertoshenelo</a></p>
        </div>
      </div>
    </main>
  );
};

export default Home;
