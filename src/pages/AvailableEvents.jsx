import React from 'react';

const events = [
  {
    status: 'DA VOTARE',
    statusIcon: 'stars',
    title: 'Pizza & Boardgames',
    date: 'Venerdì, 24 Nov',
    participants: '8 Amici',
    location: 'Casa di Marco',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyxxQ7a3objr7ab5kR7Um1qDP06C5gDRVGrmTXKawhSGD2KvAGpFHf_5v_ukZlyroMnZD9SjQ5Nn8yXdxd1aq2MGH3H8VSBY3TaFN7rtre-Q2oPVD9tEPyDkUZywUR5x-IEdp4pmF6i5J40oluAl6Vf4TZ0vYl3UX6kHeDaCRpMgDKMLvu4lQbPcMDwjcGBJEoGdX9RTZPZV9Cf5eTNTW8ui6wFVFFedgprb3veZ8bY8No-T5_2MJQEDEid84ZsuFou_Gt_OQobGxf',
    actionText: 'VOTA ORA',
    actionIcon: 'how_to_vote',
    active: true,
  },
  {
    status: 'NUOVA',
    statusIcon: 'new_releases',
    title: 'Serata Sushi',
    date: 'Sabato, 02 Dic',
    participants: '4 Amici',
    location: 'Kiyomi Restaurant',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHo7zd2AhYSKNwuj8jbZggqNKqnGbOeEComh_OxGyEyeWPJivq5ZXkSyYEkSceuMEDzI7RM5DQg_djrcU7VXZfpgIYVskNjak6AvKCaqrJfptlSpbeSI42apNMejbWLNDvvdbRThSi1818NZTg0qZk8CEYTS5hmRsGPufITNbG0JrGqx8Muj0SuARfoc8Qv62oanYYQwi7po8__WlzupjH5MYoCoAELCWLg0QSvNtrTc_Nkn-PFg3b7VkuyF1AhHqKJ_7PS-3wQHQO',
    actionText: 'VOTA ORA',
    actionIcon: 'how_to_vote',
    active: true,
  },
  {
    status: 'IN ATTESA',
    statusIcon: 'hourglass_empty',
    title: 'Maratona Horror',
    date: 'Martedì, 31 Ott',
    participants: '',
    location: '',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJKA7M8MUee5GtUw7orBbVNpsbrcxHrfDDEy-jMZCwMJ_EyazTQh0Y15D_V_QCyedReb05UAqLMEzFtD6ao7vCVcHXBUfMWWEJJppM2Z1H9DeRaArtDMwnnv3PHOvUoINUzLGjDLHWMIsDugaPgHM4ysUYn9qFw27fFFnaDM_EvIIpPKRdIJsfYDQMUnAVb6EY_6BZ9fwHBGfIgOmtFcwR-LZR_qe6vzc_bsYf0HY5GsznjZruCjWaktQKR-zHh-lJxrUkn93lb9yR',
    actionText: 'NON DISPONIBILE',
    actionIcon: null,
    active: false,
  },
];

const EventCard = ({ event }) => {
  const { status, statusIcon, title, date, participants, location, imageUrl, actionText, actionIcon, active } = event;

  const cardClasses = `group relative w-full bg-surface-dark rounded-2xl overflow-hidden shadow-card border border-white/5 transition-transform duration-300 ${active ? 'hover:scale-[1.02] active:scale-[0.98]' : 'bg-surface-dark/50 shadow-none'
    }`;

  return (
    <article className={cardClasses}>
      <div className={`absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md border text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 ${active ? 'border-primary/30 text-primary' : 'border-white/10 text-gray-400'
        }`}>
        <span className="material-symbols-outlined text-[14px]">{statusIcon}</span>
        {status}
      </div>
      <div className={`w-full relative overflow-hidden ${active ? 'h-48' : 'h-40 grayscale opacity-60'}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent z-[1]"></div>
        <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" src={imageUrl} alt={title} />
      </div>
      <div className={`p-5 pt-2 relative z-10 ${!active && 'opacity-70'}`}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className={`font-bold text-white tracking-tight mb-1 ${active ? 'text-2xl' : 'text-xl'}`}>{title}</h3>
            <div className="flex items-center text-gray-400 text-sm font-medium gap-1">
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              {date}
            </div>
          </div>
        </div>
        {active && (
          <div className="flex gap-4 mt-4 mb-6 border-t border-white/5 pt-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Partecipanti</span>
              <span className="text-white font-bold text-sm">{participants}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Luogo</span>
              <span className="text-white font-bold text-sm">{location}</span>
            </div>
          </div>
        )}
        <button
          className={`w-full h-12 rounded-full flex items-center justify-center gap-2 transition-all font-extrabold ${active
              ? 'bg-primary hover:bg-[#25d96d] text-background-dark text-base tracking-wide shadow-[0_0_15px_rgba(43,238,121,0.2)]'
              : 'mt-4 h-10 border border-white/10 bg-transparent text-gray-400 font-bold text-sm tracking-wide cursor-not-allowed'
            }`}
          disabled={!active}
        >
          {actionIcon && <span className="material-symbols-outlined">{actionIcon}</span>}
          {actionText}
        </button>
      </div>
    </article>
  );
};


const AvailableEvents = () => {
  const filters = ['Tutte', 'Da Votare', 'In Sospeso', 'Completate'];
  const [activeFilter, setActiveFilter] = React.useState('Tutte');

  return (
    <div className="font-display bg-background-light dark:bg-background-dark antialiased h-screen w-full overflow-hidden text-gray-900 dark:text-white select-none">
      <div className="relative flex flex-col h-full w-full max-w-md mx-auto bg-background-light dark:bg-background-dark overflow-hidden shadow-2xl">
        <header className="flex items-center justify-between p-5 pt-6 z-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm sticky top-0">
          <button className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">style</span>
            <h1 className="text-lg font-bold tracking-tight uppercase">Serate Disponibili</h1>
          </div>
          <button className="flex items-center justify-center size-10 overflow-hidden rounded-full border-2 border-surface-dark bg-surface-dark">
            <img alt="Profile avatar of a user" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvFoJlmiS-ZTjR5EQy6P7KHaP_Vd4WKPE9RSkArDvxfSrC4u4du3fewsqNFM5OW9MTr018nLzoIF_RHiwlSWr2rbZP0i-EErYiPacFrMNnPCkZ2atxeWZHfuCq2LayN1xaDy8xhAeB1q5d4PxJvdrmbFPJEZTn7cVXcxiMalPdTOJBRxl4_GNdKpL_4TvBuKsr8aQaycojJ8lbSS0V78apzVzND_KRdaSqLVc_BLlWq_cs_XzB0JBjSdI8xNLzoMpwta4QP9cKsUXV" />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar pb-24 relative z-10">
          <div className="px-5 pt-2 pb-6">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-1">Il tuo mazzo</p>
            <h2 className="text-3xl font-bold leading-none">Scegli la tua<br />prossima giocata</h2>
          </div>

          <div className="flex gap-3 px-5 pb-8 overflow-x-auto no-scrollbar">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex shrink-0 items-center justify-center h-10 px-6 rounded-full font-bold text-sm transition-all duration-200 ${activeFilter === filter
                    ? 'bg-primary text-background-dark shadow-neon'
                    : 'bg-surface-dark border border-white/5 text-gray-300 hover:bg-white/5'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6 px-5">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
            <div className="h-10"></div>
          </div>
        </main>

        <div className="absolute bottom-6 right-6 z-30">
          <button className="size-14 rounded-full bg-white text-background-dark shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[32px]">add</span>
          </button>
        </div>

        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent pointer-events-none z-20"></div>
      </div>
    </div>
  );
};

export default AvailableEvents;
