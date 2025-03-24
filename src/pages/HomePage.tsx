import React from 'react';
import { Play, Tv, Film, TrendingUp, Star, ChevronRight } from 'lucide-react';

function HomePage() {
  const featuredMovies = [
    { title: "Inception", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&auto=format&fit=crop&q=60" },
    { title: "The Matrix", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=60" },
    { title: "Interstellar", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=60" }
  ];

  const popularSeries = [
    { title: "Breaking Bad", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&auto=format&fit=crop&q=60" },
    { title: "Stranger Things", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=600&auto=format&fit=crop&q=60" },
    { title: "The Crown", image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?w=600&auto=format&fit=crop&q=60" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&auto=format&fit=crop&q=60"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <nav className="relative z-20 flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-2">
            <Play className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold">Like Look TV</span>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold transition-colors">
            Assinar Agora
          </button>
        </nav>

        <div className="relative z-20 max-w-4xl mx-auto px-8 pt-32">
          <h1 className="text-6xl font-bold mb-6">Seu entretenimento favorito em um só lugar</h1>
          <p className="text-xl mb-8">Filmes, séries e TV ao vivo por apenas R$4,99/mês</p>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 inline-block px-8 py-4 rounded-xl">
            <p className="text-2xl font-bold">Oferta Especial</p>
            <p className="text-4xl font-bold">R$4,99/mês</p>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          <div className="text-center">
            <Film className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Filmes Exclusivos</h3>
            <p className="text-gray-400">Milhares de filmes para todos os gostos</p>
          </div>
          <div className="text-center">
            <Tv className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">TV ao Vivo</h3>
            <p className="text-gray-400">Seus canais favoritos em tempo real</p>
          </div>
          <div className="text-center">
            <Star className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Séries Premiadas</h3>
            <p className="text-gray-400">As melhores séries do momento</p>
          </div>
        </div>
      </section>

      {/* Featured Movies */}
      <section className="py-16 px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Filmes em Destaque</h2>
            <button className="flex items-center text-purple-400 hover:text-purple-300">
              Ver todos <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {featuredMovies.map((movie, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={movie.image} alt={movie.title} className="w-full h-72 object-cover rounded-lg" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-semibold">{movie.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Series */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Séries Populares</h2>
            <button className="flex items-center text-purple-400 hover:text-purple-300">
              Ver todas <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {popularSeries.map((series, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={series.image} alt={series.title} className="w-full h-72 object-cover rounded-lg" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-semibold">{series.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Comece a assistir hoje mesmo</h2>
          <p className="text-xl mb-8">Cancele quando quiser. Sem compromisso.</p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            Experimente por R$4,99/mês
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Like Look TV Streaming. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;