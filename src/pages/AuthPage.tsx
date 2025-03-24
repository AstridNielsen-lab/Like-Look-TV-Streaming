import React, { useState } from 'react';
import { Play, ArrowRight, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const MERCADO_PAGO_SUBSCRIPTION_URL = 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808495be9ff00195c6e19ae3048c';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle authentication and check subscription status
    navigate('/home');
  };

  const handleSubscribe = () => {
    window.location.href = MERCADO_PAGO_SUBSCRIPTION_URL;
  };

  const handleWhatsAppSupport = () => {
    window.open('https://wa.me/5511970603441', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="max-w-md w-full">
          <div className="flex items-center gap-2 mb-8">
            <Play className="w-8 h-8 text-purple-500" />
            <span className="text-xl md:text-2xl font-bold text-white">Like Look TV</span>
          </div>

          {isLogin ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Bem-vindo de volta!</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Entrar <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Comece sua jornada!</h2>
              <p className="text-gray-300 mb-8">
                Assine agora e tenha acesso ilimitado a filmes, séries e TV ao vivo.
              </p>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl mb-8">
                <p className="text-xl md:text-2xl font-bold text-white">Oferta Especial</p>
                <p className="text-3xl md:text-4xl font-bold text-white">R$4,99/mês</p>
                <p className="text-sm text-gray-200 mt-2">Cancele quando quiser</p>
              </div>
              <button
                onClick={handleSubscribe}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 mb-4"
              >
                Assinar Agora <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          <p className="mt-4 text-center text-gray-400">
            {isLogin ? 'Ainda não é assinante?' : 'Já é assinante?'}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-400 hover:text-purple-300"
            >
              {isLogin ? 'Assine agora' : 'Fazer login'}
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=1200&auto=format&fit=crop&q=60"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 p-12 h-full flex items-center">
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Seu entretenimento favorito por apenas R$4,99/mês
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Assista a milhares de filmes, séries e programas de TV ao vivo em um só lugar.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Support Button */}
      <button
        onClick={handleWhatsAppSupport}
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50 flex items-center gap-2"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline">Suporte</span>
      </button>
    </div>
  );
}

export default AuthPage;
