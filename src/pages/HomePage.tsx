import React from 'react';
import { Play, Tv, Film, Star, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const MERCADO_PAGO_SUBSCRIPTION_URL = 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808495be9ff00195c6e19ae3048c';

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

  const handleSubscribe = () => {
    window.location.href = MERCADO_PAGO_SUBSCRIPTION_URL;
  };

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
          <button 
            onClick={handleSubscribe}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold transition-colors"
          >
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

      {/* Rest of the sections... */}
      
      {/* Footer */}
      <footer className="py-8 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Play className="w-6 h-6 text-purple-500" />
                <span className="text-xl font-bold">Like Look TV</span>
              </div>
              <p className="text-gray-400">
                Desenvolvido por Like Look Solutions
              </p>
              <a 
                href="https://likelook.wixsite.com/solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                www.likelook.solutions
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <a 
                href="https://wa.me/11970603441" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white block mb-2"
              >
                WhatsApp: (11) 97060-3441
              </a>
              <p className="text-gray-400">Desenvolvedor: Julio Campos Machado</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <a 
                href="https://likelook.wixsite.com/solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white block mb-2"
              >
                Sobre a Like Look Solutions
              </a>
              <button 
                onClick={handleSubscribe}
                className="text-gray-400 hover:text-white block"
              >
                Assinar Agora
              </button>
            </div>
          </div>
          <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
            <p>© 2024 Like Look TV Streaming. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;