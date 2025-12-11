import React, { useState } from 'react';

const cardsData = [
  {
    id: 1,
    status: 'Giocata',
    statusIcon: 'check_circle',
    title: 'Cibo & Drink',
    description: 'Quantità e qualità del buffet',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYLbLdHuPPYBrocybJTbwO-3jOoLYZVRPI7A2u8V54Ynh4TsKnoQ538l4RcmGX5EfDA6BG8Kwlj1yqN1ScvwSoiSCkiHvuyhQY3qxzDFZq3fpQ4kIVT3iKuioqSbuX1WJOjv9xmrLwhAF6ITddC6qejDkSDWblGVwvPZzUeJeevE-vlO2ypuDka5RIVA-ZnBKwPfezUB2tH-H7l1jJqWbxwMraDTRhlATbJlsBo6DDnhrVOs3ZK_OnrZyQJNI_hbDE5XSQLQzUlWf5',
    isCompleted: true,
    score: 8.5,
    stars: 4,
  },
  {
    id: 2,
    title: 'Intrattenimento',
    description: 'Ritmo, divertimento e giochi',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIhwY4sdK193H8mXcg4QR3rbschcytjmR69ZJOKThbxc9ePmuZd_3ri59b1iJj5aIvpOw5AhK62HUJkZ_ToJBm14Gdgd1aboYGk04Nq1VImxrG0SxqdIow3VMEG7mvwEeR_WaSpvODlALyaNiF4zFAgNE0J8NmaTV9WJjcU4p8wS2_5oTekb7ze3eWmaNDkzl7pY3dzshLcRaF2kiXWynQo3SK1YL5iiHFM1J8s58jEvFfczqDc07R7id5oq1tX7Bx2zpY4y11u0As',
    isActive: true,
    initialValue: 7,
  },
  {
    id: 3,
    title: 'Atmosfera',
    description: 'Vibe generale',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdgHl2VNTyDUj4sGuuj6h2fEdP30v_sj2Ovf6-7ZzncEA2xs9WCYHYOBHC5iqPRTQS2eCzh5yu3-R-G7Y6JySPXyXXIVeQeu2Kj_SZeYZsDjaEzoNOJO-dNYpyFDX40g4tkJcLjZ06sA_fx-4KZ34YRZ5SZuYS3Lx9wSZVGzf0D6YzpKOBetf4gyLrJBBkrbMfTY2vvdFkg70ses4HkdU58NnI3-8mmeReDJLy5DFqjv46AdWyU4AhQl8MrF7O2lAGymvsWxjPZ96i',
    isLocked: true,
  },
  {
    id: 4,
    title: 'MVP Serata',
    description: 'Chi ha spaccato di più?',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1ov4bbQBkdUUuqZedz1yBb6WguXhMfnjxaRhg4zIc07eC_Sqj6FevmVxyQd976_iiSqHp64m8IcV-3Y0v7hoa9VxQ8nkpV_ykGYd2RpKewamdZWk07UBz39gEk33IaJeDnxiCD03dc91T6qffkWwH3zEn-3Y-DZKDqXg-PgxoYn-0Hs0_tF99TtRKzYxS4lx5DviHJLYCl_eGQAqokAFNV1R3-2JWJZ9VAHn1qbey6I7Z1EkRNeGqbrvXpSwdXfo17aGnGy4rSN7S',
    isLocked: true,
  },
];

const VotingCard = ({ card }) => {
  const [sliderValue, setSliderValue] = useState(card.initialValue || 5);

  const containerClasses = `relative group rounded-xl ${card.isCompleted ? 'p-1 bg-gradient-to-b from-primary/20 to-transparent' : ''
    } ${card.isActive ? 'p-1 bg-gradient-to-b from-white/10 to-transparent' : ''} ${card.isLocked ? 'opacity-60 grayscale-[0.5]' : ''
    }`;

  const cardBaseClasses = 'flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-card-dark overflow-hidden border border-white/5';
  const activeRing = card.isActive ? 'ring-2 ring-primary ring-offset-2 ring-offset-background-dark' : '';

  if (card.isLocked) {
    return (
      <div className={containerClasses}>
        <div className={`${cardBaseClasses} shadow-md`}>
          <div
            className="w-full aspect-[3/1] bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url("${card.imageUrl}")` }}
          ></div>
          <div className="p-5 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-bold">{card.title}</h3>
              <p className="text-[#9db9a8] text-sm">{card.description}</p>
            </div>
            <span className="material-symbols-outlined text-white/20 text-[32px]">lock</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <div className={`${cardBaseClasses} ${activeRing}`}>
        <div
          className="relative w-full aspect-video bg-cover bg-center"
          style={{ backgroundImage: `url("${card.imageUrl}")` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-t ${card.isActive ? 'from-card-dark via-card-dark/50' : 'from-card-dark'
            } to-transparent opacity-80`}></div>
          {card.isCompleted && (
            <div className="absolute bottom-3 left-4">
              <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-bold text-primary uppercase border border-primary/30">
                <span className="material-symbols-outlined text-[14px]">{card.statusIcon}</span>
                {card.status}
              </div>
            </div>
          )}
          {card.isActive && (
            <div className="absolute top-3 right-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-background-dark font-bold shadow-[0_0_10px_#2bee79]">2</span>
            </div>
          )}
        </div>

        <div className="flex w-full grow flex-col gap-4 p-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-white font-bold leading-tight ${card.isActive ? 'text-2xl' : 'text-xl'}`}>{card.title}</h3>
              <p className={`text-[#9db9a8] mt-1 ${card.isActive ? 'text-base' : 'text-sm'}`}>{card.description}</p>
            </div>
            {card.isCompleted && <div className="text-3xl font-bold text-primary">{card.score.toFixed(1)}</div>}
          </div>

          {card.isCompleted && (
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`material-symbols-outlined ${i < card.stars ? 'text-primary fill-1' : 'text-primary/30'}`}>star</span>
              ))}
            </div>
          )}

          {card.isActive && (
            <>
              <div className="flex flex-col gap-4 bg-surface-dark/50 p-4 rounded-lg border border-white/5">
                <div className="flex justify-between text-sm font-medium text-white/80 uppercase tracking-wider">
                  <span>Noia Mortale</span>
                  <span className="text-primary">Epico</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(e.target.value)}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-center mt-1">
                  <span className="text-4xl font-bold text-white tabular-nums">
                    {sliderValue}
                    <span className="text-xl text-white/40">/10</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-between pt-2 border-t border-white/5">
                <button className="flex items-center gap-2 text-[#9db9a8] hover:text-white transition-colors text-sm font-medium px-2 py-2">
                  <span className="material-symbols-outlined text-[20px]">comment</span>
                  Aggiungi Nota
                </button>
                <button className="flex cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-green-400 text-background-dark text-sm font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(43,238,121,0.3)] transition-all transform active:scale-95">
                  Gioca Carta
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


const EventVoting = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary selection:text-black antialiased">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pb-24 max-w-md mx-auto">
        <div className="sticky top-0 z-50 flex items-center bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
          <div className="text-white flex size-12 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-wide uppercase flex-1 text-center">Tavolo da Gioco</h2>
          <div className="flex size-12 items-center justify-center shrink-0 rounded-full active:bg-white/10 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[#9db9a8]">help</span>
          </div>
        </div>

        <div className="flex flex-col items-center pt-6 pb-2 px-4">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight text-center">Friday Night Poker</h1>
          <div className="flex items-center gap-2 mt-2 bg-surface-dark px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
            <p className="text-[#9db9a8] text-sm font-medium leading-normal">12 Ottobre • Casa di Marco</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-6 py-4">
          <div className="flex gap-6 justify-between items-center">
            <p className="text-white text-sm font-bold uppercase tracking-wider text-primary">Mano in corso</p>
            <p className="text-white text-sm font-bold">2/4 Carte</p>
          </div>
          <div className="rounded-full bg-surface-dark h-2 overflow-hidden">
            <div className="h-full rounded-full bg-primary shadow-[0_0_10px_rgba(43,238,121,0.5)]" style={{ width: '50%' }}></div>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-4 pt-2">
          {cardsData.map(card => <VotingCard key={card.id} card={card} />)}
        </div>

        <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent z-40 max-w-md mx-auto">
          <button className="w-full flex items-center justify-center gap-3 rounded-xl h-14 bg-[#1c2e24] border border-primary/20 text-white/50 text-base font-bold uppercase tracking-wider cursor-not-allowed">
            <span>Concludi Turno</span>
            <span className="material-symbols-outlined text-[20px]">lock</span>
          </button>
          <p className="text-center text-xs text-white/30 mt-3 font-medium">Completa tutte le carte per votare</p>
        </div>
      </div>
    </div>
  );
};

export default EventVoting;
