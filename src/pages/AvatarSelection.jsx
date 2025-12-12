
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const avatars = [
  {
    id: 1,
    name: 'Il Leader',
    trait: 'Carisma +10',
    icon: 'military_tech',
    color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
    taken: true,
  },
  {
    id: 2,
    name: 'Il Jolly',
    trait: 'Imprevedibile',
    icon: 'casino',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
    taken: false,
  },
  {
    id: 3,
    name: 'Il Gourmet',
    trait: 'Gusto raffinato',
    icon: 'restaurant',
    color: 'bg-gradient-to-br from-red-500 to-rose-600',
    taken: false,
  },
  {
    id: 4,
    name: 'L\'Intellettuale',
    trait: 'Sapere è potere',
    icon: 'school',
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    taken: false,
  },
  {
    id: 5,
    name: 'Il Festaiolo',
    trait: 'Anima della festa',
    icon: 'celebration',
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    taken: false,
  },
  {
    id: 6,
    name: 'Lo Zen',
    trait: 'Calma interiore',
    icon: 'spa',
    color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    taken: false,
  },
];

const AvatarCard = ({ avatar, isSelected, onSelect }) => {
  const { name, trait, icon, color, taken } = avatar;

  const cardClasses = `relative group cursor-pointer transition-all duration-300 ease-out ${
    isSelected ? 'scale-[1.03]' : 'hover:scale-[1.01]'
  } ${taken ? 'opacity-60 grayscale cursor-not-allowed' : ''}`;

  return (
    <div className={cardClasses} onClick={() => !taken && onSelect(avatar.id)}>
      {taken && (
        <div className="absolute inset-0 z-10 bg-black/40 rounded-2xl flex items-center justify-center backdrop-blur-sm">
          <div className="bg-black/70 text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/20 flex items-center gap-1.5 shadow-lg">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            Occupato
          </div>
        </div>
      )}
      <div
        className={`relative aspect-[3/4] w-full overflow-hidden rounded-2xl transition-all duration-300 ${
          isSelected
            ? 'border-2 border-primary shadow-neon'
            : 'border border-white/10 shadow-card group-hover:border-white/25 group-hover:shadow-md'
        }`}
      >
        {isSelected && (
          <div className="absolute top-3 right-3 z-10 bg-primary text-background-dark rounded-full p-1.5 shadow-elevated animate-scale-in">
            <span className="material-symbols-outlined text-[18px] font-bold block">check</span>
          </div>
        )}
        {!isSelected && !taken && (
          <div className="absolute top-3 right-3 z-10 size-6 rounded-full border-2 border-white/25 bg-black/10 backdrop-blur-sm transition-all group-hover:border-white/40"></div>
        )}
        <div className={`absolute inset-0 ${color} transition-transform duration-500 group-hover:scale-105`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
        {isSelected && (
          <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent opacity-60"></div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-[80px] drop-shadow-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
            {icon}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className={`text-lg font-bold leading-tight mb-0.5 ${isSelected ? 'text-primary' : 'text-white'}`}>
            {name}
          </p>
          <p className={`text-xs font-medium ${isSelected ? 'text-white/85' : 'text-white/65'}`}>
            {trait}
          </p>
        </div>
      </div>
    </div>
  );
};

const AvatarSelection = () => {
  const [selectedAvatarId, setSelectedAvatarId] = useState(2);
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-background-dark min-h-screen">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl">
        <div className="sticky top-0 z-30 flex items-center bg-background-light/98 dark:bg-background-dark/98 backdrop-blur-lg p-4 justify-between border-b border-black/5 dark:border-white/8 shadow-sm">
          <button className="text-slate-900 dark:text-white flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/8 transition-all duration-200 active:scale-95">
            <span className="material-symbols-outlined text-[22px]">arrow_back</span>
          </button>
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-white/55">Partita #8291</span>
          </div>
          <div className="size-11"></div>
        </div>

        <div className="flex flex-col px-6 pt-8 pb-4">
          <h2 className="text-slate-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight text-center mb-2">
            Chi sei stasera?
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-[15px] font-medium leading-relaxed text-center">
            Scegli la tua carta. <span className="text-primary font-semibold">Giocatore 1 di 6</span>
          </p>
        </div>

        <div className="flex-1 px-4 py-4 pb-28">
          <div className="grid grid-cols-2 gap-3.5">
            {avatars.map(avatar => (
              <AvatarCard
                key={avatar.id}
                avatar={avatar}
                isSelected={selectedAvatarId === avatar.id}
                onSelect={setSelectedAvatarId}
              />
            ))}
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-background-dark via-background-dark/98 to-transparent pt-8 pb-6 px-5 max-w-md mx-auto">
          <button 
            onClick={() => navigate('/events')}
            className="w-full cursor-pointer flex items-center justify-center rounded-full h-14 bg-primary text-background-dark shadow-elevated hover:bg-[#1fd465] hover:shadow-neon transition-all duration-200 active:scale-[0.97]"
          >
            <span className="text-base font-bold tracking-wide mr-2">Entra in partita</span>
            <span className="material-symbols-outlined font-bold">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarSelection;