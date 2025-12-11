import React from 'react';

const podiumData = [
  {
    rank: 2,
    name: 'Pub Crawl',
    date: '12 Feb',
    score: 9.2,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPFohut1bqgdwHa3Z2j6Vx1BX_FfN7iWGLBE52GaL_-aG4U656pLh_ZD7Ze-7eLaU4jGJCSVHboTRHDFVsAEsP7P2zZ34C6EZf3ukxTd4R4fWm0wEAIybBNX8ReCjCZw8NH8YcdtZ1ipm6wZxG43J9zwaiU-CcZ2zfRSjnlWR7MqYiXC62tABf08bUA-t5x-HknUtuiWexJr7dZksdc7WX1uASyh0HKXZbpI6tys_f_gfOsfYSqmkZ24no5uo0m54o0CfGwrgDsGpx',
    order: 1,
    isWinner: false,
  },
  {
    rank: 1,
    name: 'Pizza Legend',
    date: '14 Feb',
    score: 9.8,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_dWIcVMayDEscfTDXln9rMdWdw4ItXAI16ZBSgDKZNGMuMYfUICoyz6aDMBIIIUcM0GUWO97FBzbG6lukVpXnyhQn0x81ZgQl7HyjRq8jpBevoTwRBq0D1irdFSjH8ZgNR_mTrRrk0fd3x33XJRsBM6-qY8GAB0iF9yQcmBUeChDlk4phvcXMQTLTTUK2h51fHUb-D6hsdOVK3dW1yEM2sQIOVK8xhd-demOkjF-loDPb-Wwt3t9EbGkQalFWoEYl8o3_ekUHEjLG',
    order: 2,
    isWinner: true,
  },
  {
    rank: 3,
    name: 'Game Night',
    date: '02 Feb',
    score: 8.8,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsmKUYJEFHhukNIXVGg9Y28oTUFv-yCQEbGrOBl3ExCQqSOeovsbFRNiYswCfD4YKUT35-0MlPJJXBD0P9f2RLEVWGHzFGCT-0z51NN2WNwhM6tgKs2UpH7sNYZo_IFv1kPbga7bnRIOZH4kvZscOb3g2NTNCunNWIv1ndkt4P7w3GwYC9ilxP8Mb6yKunTjzYMrOQEwyG_QB6wTxqXbMRruV6YbOFKXlffauBoVY4nNRydieb7T42ealZgVZHhgUO2o2tVFdx9Rvd',
    order: 3,
    isWinner: false,
  },
];

const listData = [
  { rank: 4, trend: 'down', name: 'Cinema & Chill', date: '20 Gen', location: 'Milano', score: 7.5, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4SYgYMP7n0XFQV7jLfQWU8OxK8g4204YGetD5D02CW38Jb_hC7yc7GbwAX9059PsHza85Cc4ypEs-NUtZR5HhWhMFjPukxpDL_t2ooiTA0VdKA7ZrQHbkshjMaoXDtr_83n946fUJ-2aVN6JTFm79Mhd-9ZXHR4FhIC18fsdXotyd0r7GkHj2ysnN0QNJpXknu7RRdBw5d0ZFZm3gH-5Qf09mEXSt2__YoraFAs7YjoG02mUjvc6UL8mRBugc4YHXp5F8GT41DgyB', starFill: true },
  { rank: 5, trend: 'up', name: 'Aperitivo Lungo', date: '15 Gen', location: 'Navigli', score: 6.8, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw9qPlgEEX-Zi1tB7e10Vq_0uTD4SjX7mw0_Nc-xsNUhBhMh-JXBTSN5ia26f5j9cbrXttv6eqa1RglGM6kvbIXl1zxg6fTAWEs8opHiZZelCw_7qOp4iMLTB_96P19uyjwVnjZwU1RY7tztfqJ5bkFbi4CwgX4m9pvYIbaj-ZbeCvV-xPijq0xcgieWzhx-2MCcq0xcpn6IPK17hZBDz2Xr_jZuDF_UAueC6t3bhpMwpL9CeWHWkZpX-sMoeBpJrcoSsd3CH-n4k_', starFill: false },
  { rank: 6, trend: 'same', name: 'Bowling Disaster', date: '10 Gen', location: 'Monza', score: 5.4, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh0uBNjDmE0TvuzE7vSJXI-qHXIMRg7ZHVwA11jrmKf28KlJJoKqRkbvN5-__tYcBhmPPOK2mj54TDS26GDEs038GmZJ-kvIuNLHQgRv--3o5Fwxsuh3yFcUv5Hjeicr_nyfBa5xZ79awpuhFH5Kd43M-kS6Y7amHPoxj4W6UAKpfIs_h_oLPY8MeqJGmsfl8zjJz4ziQbCEHUh04FY_Z4lpaIza7uNh7fN1uKILhUbDHh0TA7l0dgvG91xWlHl45tUS6OoCNugNJs', starFill: false },
];

const PodiumItem = ({ item }) => {
  const { rank, name, date, score, imageUrl, order, isWinner } = item;
  const sizeClass = isWinner ? 'w-[38%]' : 'w-1/3';
  const positionClass = isWinner ? 'order-2 -mt-6 z-10 relative' : `order-${order} translate-y-4`;

  return (
    <div className={`flex flex-col items-center gap-3 ${sizeClass} ${positionClass}`}>
      {isWinner && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-yellow-400 text-3xl drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">crown</span>
        </div>
      )}
      <div className={`relative group w-full aspect-[3/4] rounded-2xl overflow-hidden bg-card-dark ${isWinner ? 'border-2 border-primary shadow-[0_0_30px_rgba(43,238,121,0.15)]' : 'border border-white/10 shadow-lg'}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
        <img alt={name} className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${!isWinner && 'opacity-80'}`} src={imageUrl} />
        <div className="absolute top-2 left-2 z-20">
          <div className={`rounded-full flex items-center justify-center ${isWinner ? 'w-10 h-10 bg-primary shadow-lg' : 'w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20'}`}>
            <span className={`font-bold ${isWinner ? 'text-base text-black' : 'text-sm text-white'}`}>#{rank}</span>
          </div>
        </div>
        <div className="absolute bottom-2 left-0 right-0 text-center z-20 px-1">
          <span className={`font-bold drop-shadow-md text-primary ${isWinner ? 'text-2xl' : 'text-lg'}`}>{score}</span>
        </div>
      </div>
      <div className="text-center">
        <p className={`font-bold truncate w-full ${isWinner ? 'text-base text-primary' : 'text-sm'}`}>{name}</p>
        <p className="text-xs text-white/50">{date}</p>
      </div>
    </div>
  );
};

const LeaderboardItem = ({ item }) => {
  const { rank, trend, name, date, location, score, imageUrl, starFill } = item;
  const trendIcon = {
    up: 'arrow_drop_up',
    down: 'arrow_drop_down',
    same: 'remove',
  };
  const trendColor = {
    up: 'text-primary',
    down: 'text-white/20',
    same: 'text-white/20',
  };

  return (
    <div className="group relative flex items-center gap-4 bg-card-surface hover:bg-white/10 border border-white/5 p-3 rounded-2xl transition-all duration-300">
      <div className="flex w-8 shrink-0 flex-col items-center justify-center gap-1">
        <span className="text-lg font-bold text-white/40">{rank}</span>
        <span className={`material-symbols-outlined text-[16px] ${trendColor[trend]}`}>{trendIcon[trend]}</span>
      </div>
      <div className="h-16 w-16 shrink-0 rounded-xl bg-cover bg-center overflow-hidden border border-white/10" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
      <div className="flex flex-1 flex-col justify-center">
        <h3 className="text-base font-bold text-white leading-tight">{name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-white/50">{date}</span>
          <span className="h-1 w-1 rounded-full bg-white/20"></span>
          <span className="text-xs text-white/50">{location}</span>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center pr-2">
        <div className="flex items-center gap-1">
          <span className={`material-symbols-outlined text-[18px] ${starFill ? 'text-yellow-500' : 'text-white/20'}`} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-lg font-bold text-white">{score}</span>
        </div>
      </div>
    </div>
  );
};

const EventLeaderboard = () => {
  const filters = ['Tutto il tempo', 'Questo mese', 'Quest\'anno'];
  const [activeFilter, setActiveFilter] = React.useState(filters[0]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-black min-h-screen">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 max-w-md mx-auto">
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-white/5">
          <div className="flex items-center p-4 justify-between">
            <div className="w-10"></div>
            <h1 className="text-xl font-bold tracking-tight text-center">Classifica Serate</h1>
            <button className="flex w-10 h-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>filter_list</span>
            </button>
          </div>
          <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-9 shrink-0 items-center justify-center rounded-full px-5 transition-transform active:scale-95 ${activeFilter === filter ? 'bg-primary shadow-[0_0_15px_rgba(43,238,121,0.3)]' : 'bg-card-surface border border-white/5'}`}
              >
                <p className={`text-sm font-bold ${activeFilter === filter ? 'text-black' : 'text-white/70'}`}>{filter}</p>
              </button>
            ))}
          </div>
        </header>

        <section className="mt-6 px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">trophy</span>
            Il Podio
          </h2>
          <div className="flex items-end justify-center gap-3 w-full max-w-md mx-auto relative z-0">
            {podiumData.map(item => <PodiumItem key={item.rank} item={item} />)}
          </div>
        </section>

        <section className="mt-10 px-4 flex-1">
          <h2 className="text-lg font-bold mb-4 px-1 text-white/90">Classifica Completa</h2>
          <div className="flex flex-col gap-3">
            {listData.map(item => <LeaderboardItem key={item.rank} item={item} />)}
          </div>
        </section>

        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm">
          <nav className="flex items-center justify-between bg-[#1A2C23]/90 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl">
            <button className="flex flex-col items-center justify-center gap-1 text-white/50 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl">home</span>
              <span className="text-[10px] font-medium">Home</span>
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-black shadow-[0_0_15px_rgba(43,238,121,0.4)] -mt-8 border-4 border-[#102217] transform transition hover:scale-105 active:scale-95">
              <span className="material-symbols-outlined text-3xl">add</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 text-primary">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>leaderboard</span>
              <span className="text-[10px] font-medium">Classifica</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default EventLeaderboard;
