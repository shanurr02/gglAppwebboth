
import React from 'react';
import { Screen, Course } from '../types';

interface Props {
  onNavigate: (screen: Screen) => void;
  onOpenProfile: () => void;
}

const Courses: React.FC<Props> = ({ onNavigate, onOpenProfile }) => {
  const courses: Course[] = [
    {
      id: 'c1',
      title: 'Intro to Network Marketing',
      category: 'Sales',
      level: 'Beginner',
      duration: '28m left',
      progress: 65,
      status: 'IN PROGRESS',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 'c2',
      title: 'Mastering the Autoclub Model',
      category: 'Sales',
      level: 'Beginner',
      duration: '45:00',
      status: 'NOT STARTED',
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 'c3',
      title: 'Advanced Sales Techniques',
      category: 'Advanced',
      level: 'Advanced',
      duration: '1:15:20',
      status: 'COMPLETED',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 'c4',
      title: 'Global Leadership Strategies',
      category: 'Leadership',
      level: 'Expert',
      duration: '2:00:00',
      status: 'NOT STARTED',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop'
    }
  ];

  const continueLearning = courses.find(c => c.status === 'IN PROGRESS');
  const allOtherCourses = courses.filter(c => c.id !== continueLearning?.id);

  return (
    <div className="flex-1 flex flex-col bg-[#f8fafc]">
      <header className="h-16 flex items-center justify-between px-6 bg-white shrink-0 sticky top-0 z-20 shadow-sm">
        <button onClick={onOpenProfile} className="text-slate-600 p-1 active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <h1 className="font-bold text-slate-800 text-lg">GGL Academy</h1>
        <button className="p-2 text-slate-400 active:scale-90 transition-transform" onClick={() => onNavigate('RESOURCE_CENTER')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
        </button>
      </header>

      <div className="px-6 py-4 space-y-8">
        {continueLearning && (
          <section>
            <h2 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">Continue Learning</h2>
            <div 
              className="bg-white rounded-3xl shadow-soft border border-slate-50 overflow-hidden cursor-pointer active:scale-[0.98] transition-all"
              onClick={() => onNavigate('COURSE_DETAILS')}
            >
              <div className="relative aspect-video">
                <img src={continueLearning.thumbnail} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/60 rounded text-[10px] font-bold text-white">
                  {continueLearning.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-800 text-sm">{continueLearning.title}</h3>
                <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-blue-600 mb-1.5 uppercase tracking-widest">
                  <span>In Progress</span>
                  <span>{continueLearning.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: `${continueLearning.progress}%` }}></div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section>
          <h2 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">All Courses</h2>
          <div className="space-y-4">
            {allOtherCourses.map(course => (
              <div key={course.id} className="bg-white rounded-3xl shadow-soft border border-slate-50 overflow-hidden">
                <div className="relative aspect-video">
                  <img src={course.thumbnail} className="w-full h-full object-cover" alt="" />
                  {course.status === 'COMPLETED' && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/60 rounded text-[10px] font-bold text-white">
                    {course.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-800 text-sm">{course.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[9px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded tracking-widest">{course.level}</span>
                    <span className="text-[9px] font-bold text-slate-400">• {course.category}</span>
                  </div>
                  
                  {course.status === 'COMPLETED' ? (
                    <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-green-500 uppercase tracking-widest">
                       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 12 12 8"></polyline></svg>
                       Course Completed
                    </div>
                  ) : (
                    <button 
                      onClick={() => course.id === 'c2' ? onNavigate('CHECKOUT') : onNavigate('COURSE_DETAILS')}
                      className={`w-full py-2.5 mt-4 rounded-xl text-xs font-bold transition-all active:scale-95
                        ${course.id === 'c2' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-blue-600 text-white shadow-lg shadow-blue-100'}
                      `}
                    >
                      {course.id === 'c2' ? 'Get for ₹1180' : 'Start Lesson'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
