
import React, { useState } from 'react';

const avatars = [
  {
    id: 1,
    name: 'Il Leader',
    trait: 'Carisma +10',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjg3CrDfAPAh75onLUkZYHybjQVknmMKuEQO_OFZNXi3f7XnsHkAtmwmB-hzzo0WxSG2Lo5ihg5uR0aDr6BQd9Av-zjNF_QOeF9vToChkDfYc9BL4_LeyeIXQTrgKmlYB5iOqc3YVEz2JN3Z4-7Hx5q9xBTHK4JoxlUvc-n3Sj-DQMMYVG1BefTojq2ofoCLbbswT2-3YRW5-lcMRxb1le8LtGCeHGWAiHKk-f9LYnt-xYRiEPLLf1I5CYtdLEcimUzRh7uQvyRHlA',
    taken: true,
  },
  {
    id: 2,
    name: 'Il Jolly',
    trait: 'Imprevedibile',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT_85OGdw0i30o7gOmH949FR0f3CVjguPSCXb2wIekDvxtp5yy-HJDQsq0H7cF8fBy7HVN7fEvPo9De1X7Ku0wRn31ljesSulmQSOV3b23YuJeWVBGtirrPUOxUu1HxHhBZk3FeaSlTBh9Or1ySqv9IrudSWSoBLm-6eTWBB-C-Ds437xlmP3hyfa85OtKCH2VhZ5nhfFWPsuhpAdt4MexO16GPdTT_MWUWznRlRB8d4HaE-z07CPQaLCGUbqbKQs4TRiExyJ-vjQn',
    taken: false,
  },
  {
    id: 3,
    name: 'Il Gourmet',
    trait: 'Gusto raffinato',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBaYNUF6LOO0lpddrAO9bzBgNTfiRzijejjDTKAY4lM0WCJ-TwlEPLKyeJ_kyZOyAVX2cRB66fcfbvRNtHpNnp7nXM3h2l--RDwZgwbriv7Vn5Pnf6drskAw5gKdt8tM_o971lYoNBQqD8w0JApyvdR5E2k_vZGNisYFjAtxz8q2yg6zqpvz4YOQ8iYYDUxJnvu9Q-sjSvVRdPQmRyjUGcY07J9NJPYnVj8w34dJWuksILsfVb9VuIgdneqIcMcS5WiBlEGKty0z92',
    taken: false,
  },
  {
    id: 4,
    name: 'L\'Intellettuale',
    trait: 'Sapere è potere',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyI3NKkB-vzoVB-fKFxYRckNBZj-NEieKPHXL4FBz-76Ckz-dqdKQF7OF6XQUbD5AtZEZCW6w1Yb__9gDbvYe2FTtIp5NVisIBwkAsKSxOV1LGWITD39y2-HDx46KMaujuSvIO0-CNDHgQIVwr1Un-DCeuj9hUBJ1OoFUNzLYY9PdUTv2ekSzqhzXV-dzzCiEVQDerLL9zjgMp9HAXovhMN9zxjR7ORppFe2zVRBm6qHp22E1bcRGH2ePhBefUdbAC9lg-DKVbCW0S',
    taken: false,
  },
  {
    id: 5,
    name: 'Il Festaiolo',
    trait: 'Anima della festa',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_yU_w1flO8EGm1Mk4K_vxH5cZOVxN2lpw0m66NRQ6CtWzfahstm4nstvwsmXN0B04YY_KvFjYx4Yy98k2QDfUCUViQXU0dhggsFFH8NVJx3xU_Dev__kTpb2gnaZy-XkkTw-JRpENlD5hp3voGG_zLs27BWS-QNDS5xUGwhSNtxC3gUBQ9nO1Av8mv2wgNSX9t84z_ugmWSTn0G7-D50rDbUw93crU4pd-3n7OcEKJZ-6-9moK7cXrfWA7PEz_BSvVnStoh-wtll1',
    taken: false,
  },
  {
    id: 6,
    name: 'Lo Zen',
    trait: 'Calma interiore',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9q-UsQoD7oMhq84S1EcQ3bePqwB7qCZR1HKimrH7OhYWgTdKFxOJy7EoFNotWfJ0w9zpGCH9PSNPIp6orUIbFlMIKPDnolRgYiDsXOXczy30crycgJAmXAYQ2F12M-DPePNX3DIwabgdkKYxcRdUlO54Xf--gvlPH7NVLGp_tWxX27EcA98Y-iTvChVfq7pvZcy1VzlIOSp2pdxGQpN2PzI9Q-QVpHJM0HloU4XZC9dVBwf8JFSHiL6ct8I7d501eorhy5lZKVnpC',
    taken: false,
  },
];

const AvatarCard = ({ avatar, isSelected, onSelect }) => {
  const { name, trait, imageUrl, taken } = avatar;

  const cardClasses = `relative group cursor-pointer transition-all duration-300 ${isSelected ? 'scale-105' : 'hover:scale-[1.02]'
    } ${taken ? 'opacity-60 grayscale cursor-not-allowed' : ''}`;

  return (
    <div className={cardClasses} onClick={() => !taken && onSelect(avatar.id)}>
      {taken && (
        <div className="absolute inset-0 z-10 bg-black/40 rounded-xl flex items-center justify-center">
          <div className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            Occupato
          </div>
        </div>
      )}
      <div
        className={`relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-card-dark transition-all duration-300 ${isSelected
            ? 'border-2 border-primary shadow-[0_0_20px_rgba(43,238,121,0.3)]'
            : 'border border-white/10 group-hover:border-white/30'
          }`}
      >
        {isSelected && (
          <div className="absolute top-3 right-3 z-10 bg-primary text-background-dark rounded-full p-1 shadow-lg">
            <span className="material-symbols-outlined text-[20px] font-bold block">check</span>
          </div>
        )}
        {!isSelected && !taken && (
          <div className="absolute top-3 right-3 z-10 size-6 rounded-full border-2 border-white/30 bg-black/20 backdrop-blur-sm"></div>
        )}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        {isSelected && <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-50"></div>}
        <div className="absolute bottom-3 left-3 right-3">
          <p className={`text-lg font-bold leading-tight ${isSelected ? 'text-primary' : 'text-white'}`}>{name}</p>
          <p className={`text-xs font-normal ${isSelected ? 'text-white/80' : 'text-white/60'}`}>{trait}</p>
        </div>
      </div>
    </div>
  );
};

const AvatarSelection = () => {
  const [selectedAvatarId, setSelectedAvatarId] = useState(2);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-background-dark min-h-screen">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl">
        <div className="sticky top-0 z-30 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-black/5 dark:border-white/5">
          <button className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-white/60">Partita #8291</span>
          </div>
          <div className="size-12"></div>
        </div>

        <div className="flex flex-col px-6 pt-6 pb-2">
          <h2 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center">
            Chi sei stasera?
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-base font-medium leading-normal pt-2 text-center">
            Scegli la tua carta. <span className="text-primary font-bold">Giocatore 1 di 6</span>
          </p>
        </div>

        <div className="flex-1 px-4 py-6 pb-28">
          <div className="grid grid-cols-2 gap-4">
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

        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent pt-8 pb-6 px-4 max-w-md mx-auto">
          <button className="w-full cursor-pointer flex items-center justify-center rounded-full h-14 bg-primary text-background-dark shadow-[0_4px_20px_rgba(43,238,121,0.25)] hover:bg-[#1fd465] hover:shadow-[0_4px_25px_rgba(43,238,121,0.4)] transition-all active:scale-[0.98]">
            <span className="text-lg font-bold tracking-wide mr-2">Entra in partita</span>
            <span className="material-symbols-outlined font-bold">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarSelection;