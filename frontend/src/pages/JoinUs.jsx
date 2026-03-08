import { useEffect } from 'react';

const roles = [
  { 
    title: 'Event Volunteer', 
    desc: 'Help organise and run our on-ground events across cities. Perfect for those who love being in the action.', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> 
  },
  { 
    title: 'Content Creator', 
    desc: 'Write blogs, shoot videos, or manage our social media presence. Help us tell our story to the world.', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /> 
  },
  { 
    title: 'Community Ambassador', 
    desc: 'Represent us in your city, build local partnerships, and help expand our grassroots network.', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> 
  },
  { 
    title: 'Fundraising', 
    desc: 'Help us plan campaigns and connect with potential donors to sustain our operations.', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> 
  },
  { 
    title: 'Teaching & Mentoring', 
    desc: 'Conduct workshops, tutor students, and mentor youth in underserved areas.', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /> 
  },
  { 
    title: 'Logistics & Support', 
    desc: 'The backbone of our operations. Help with transport, inventory, and coordination during major drives.', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> 
  },
];

export default function JoinUs() {
  
  // Replace this URL with your actual WhatsApp Group Invite Link
  const whatsappGroupLink = "https://chat.whatsapp.com/YOUR_INVITE_CODE_HERE";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory pb-24">
      
      {/* ── Hero Banner ── */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-crimson-dark via-crimson to-saffron">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 border-[50px] border-white" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="w-16 h-1 rounded-full bg-white mb-6" />
          <h1 className="font-display text-5xl md:text-6xl text-ivory font-bold mb-4 drop-shadow-md">Join the Movement</h1>
          <p className="text-ivory-dark/90 text-xl max-w-2xl font-body leading-relaxed">
            Be part of a passionate community making a real difference. No experience needed—just heart and a willingness to help.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-1">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L720 20L1440 60V60H0Z" fill="var(--ivory)"/></svg>
        </div>
      </section>

      {/* ── WhatsApp CTA ── */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden">
          
          {/* Subtle WhatsApp green glow in background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#25D366] rounded-full blur-[120px] opacity-10 pointer-events-none" />

          <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-[#25D366]/30 relative z-10">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          
          <h2 className="font-display text-4xl text-charcoal font-bold mb-4 relative z-10">Join the group.</h2>
          <p className="text-muted font-body text-lg leading-relaxed max-w-2xl mx-auto mb-10 relative z-10">
            We coordinate all our events, drives, and volunteer opportunities directly through our official WhatsApp Community. Join the group to introduce yourself and see where we need help today.
          </p>
          
          <a 
            href={whatsappGroupLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#25D366] text-white font-display font-bold text-lg rounded-full hover:bg-[#20bd5a] hover:scale-105 transition-all shadow-lg shadow-[#25D366]/30 relative z-10 w-full sm:w-auto"
          >
            Join WhatsApp Group
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </section>

      {/* ── Roles Grid ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-saffron to-crimson mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl text-charcoal font-bold mb-4">How You Can Help</h2>
          <p className="text-muted font-body text-lg max-w-2xl mx-auto">
            Once you join the WhatsApp group, let us know what you're good at. We need all kinds of skills to keep our initiatives running smoothly.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map(({ title, desc, icon }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-center">
              <div className="w-16 h-16 rounded-full bg-charcoal/5 flex items-center justify-center text-charcoal mx-auto mb-6 group-hover:bg-saffron group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {icon}
                </svg>
              </div>
              <h3 className="font-display text-2xl text-charcoal font-bold mb-3">{title}</h3>
              <p className="text-muted font-body text-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}