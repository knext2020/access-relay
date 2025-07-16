import { useEffect, useState } from 'react';

function App() {
  const urls = [
    'https://tabelog.com/osaka/A2701/A270201/27145904/',
    'https://tabelog.com/ishikawa/A1701/A170101/17101269/',
    'https://maps.app.goo.gl/gjNoi7BYbGv3vdDa6',
    'http://knext2020.com',
    'https://example.com/sample2'
  ];

  const [count, setCount] = useState(0);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      const url = urls[index];
      setCurrentUrl(url);

      const win = window.open(url, '_blank');
      if (win) {
        win.blur();
        window.focus();
        setTimeout(() => {
          win.close();
        }, 90000);
      }

      index = (index + 1) % urls.length;
      setCount((prev) => prev + 1);
    }, 90000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    {
      src: 'https://i.imgur.com/BpJ2WQx.jpg',
      label: '金沢ケムリとカオリ店',
    },
    {
      src: 'https://i.imgur.com/6BZwV3X.jpg',
      label: 'おいしいはなし北堀江店',
    },
    {
      src: 'https://i.imgur.com/RTWyre1.jpg',
      label: 'おいしいはなし北堀江ß店（Googleマップ）',
    },
     {
      src: 'https://i.imgur.com/07UV7Cz.jpeg',
      label: 'K-NEXT株式会社',
    }
  ];

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h1 style={{ fontSize: '2.8rem', color: '#1e293b' }}>🚀 アクセスリレー稼働中 🚀</h1>

      <h2 style={{ marginTop: '20px', fontSize: '1.6rem' }}>現在アクセス中のURL：</h2>
      <a
        href={currentUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#2563eb', fontSize: '1.2rem' }}
      >
        {currentUrl}
      </a>

      <h2 style={{ marginTop: '20px', fontSize: '2rem', color: '#334155' }}>
        自動アクセス回数：{count}
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '40px'
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              width: '300px',
              overflow: 'hidden',
              border: '2px solid #ccc',
              borderRadius: '12px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              textAlign: 'center',
              background: '#fff',
              paddingBottom: '10px'
            }}
          >
            <img
              src={img.src}
              alt={img.label}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#334155' }}>{img.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;