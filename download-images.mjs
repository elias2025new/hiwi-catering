import fs from 'fs';
import path from 'path';

const images = [
  // Hero banquet background (stunning luxury dining setup)
  { name: 'hero-bg.jpg', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&auto=format&fit=crop&q=85' },
  // Weddings
  { name: 'wedding-catering.jpg', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&auto=format&fit=crop&q=80' },
  // Corporate Events
  { name: 'corporate-catering.jpg', url: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1000&auto=format&fit=crop&q=80' },
  // Social / Family Events
  { name: 'social-catering.jpg', url: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=1000&auto=format&fit=crop&q=80' },
  // Testimonial couple
  { name: 'testimonial-couple.jpg', url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1000&auto=format&fit=crop&q=80' },
  // Seasonal Menus
  { name: 'traditional-feast.jpg', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&auto=format&fit=crop&q=80' },
  { name: 'fasting-special.jpg', url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000&auto=format&fit=crop&q=80' },
  { name: 'vip-buffet.jpg', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&auto=format&fit=crop&q=80' },
  // Venues
  { name: 'venue-1.jpg', url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80' },
  { name: 'venue-2.jpg', url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=80' },
  { name: 'venue-3.jpg', url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop&q=80' },
  // Contact form background
  { name: 'contact-bg.jpg', url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1600&auto=format&fit=crop&q=80' },
  // Gallery items
  { name: 'gallery-1.jpg', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80' },
  { name: 'gallery-2.jpg', url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80' },
  { name: 'gallery-3.jpg', url: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=80' },
  { name: 'gallery-4.jpg', url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80' },
  { name: 'gallery-5.jpg', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80' },
  { name: 'gallery-6.jpg', url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=80' },
];

async function run() {
  const dir = path.resolve('public', 'images');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const item of images) {
    try {
      const res = await fetch(item.url);
      if (res.ok) {
        const buf = await res.arrayBuffer();
        fs.writeFileSync(path.join(dir, item.name), Buffer.from(buf));
        console.log(`Saved ${item.name} (${buf.byteLength} bytes)`);
      } else {
        console.warn(`Failed ${item.name}: ${res.status}`);
      }
    } catch (e) {
      console.error(`Error downloading ${item.name}:`, e.message);
    }
  }
  console.log('All images downloaded successfully!');
}

run();
