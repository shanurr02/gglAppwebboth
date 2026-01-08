
import React, { useState } from 'react';
import { Screen, User } from './types';
import { motion, AnimatePresence } from 'framer-motion';

// Views
import Splash from './views/Splash';
import Login from './views/Login';
import Register from './views/Register';
import ForgotPassword from './views/ForgotPassword';
import Dashboard from './views/Dashboard';
import Wallet from './views/Wallet';
import Network from './views/Network';
import Courses from './views/Courses';
import CourseDetails from './views/CourseDetails';
import Checkout from './views/Checkout';
import Confirmation from './views/Confirmation';
import WithdrawalLocked from './views/WithdrawalLocked';
import WithdrawalForm from './views/WithdrawalForm';
import KYCDetails from './views/KYCDetails';
import WithdrawalPreview from './views/WithdrawalPreview';
import WithdrawalHistory from './views/WithdrawalHistory';
import AutoclubLanding from './views/AutoclubLanding';
import AutoclubOnboarding from './views/AutoclubOnboarding';
import AutoclubDashboard from './views/AutoclubDashboard';
import AutoclubWallet from './views/AutoclubWallet';
import AutoclubTransfer from './views/AutoclubTransfer';
import OfficialDocuments from './views/OfficialDocuments';
import SupportChat from './views/SupportChat';
import ResourceCenter from './views/ResourceCenter';
import SocialConnect from './views/SocialConnect';
import TermsConditions from './views/TermsConditions';
import Community from './views/Community';
import ProfileSettings from './views/ProfileSettings';
import HelpSupport from './views/HelpSupport';
import Testimonials from './views/Testimonials';

// Components
import ProfileDrawer from './components/ProfileDrawer';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('SPLASH');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Global User State
  const [user, setUser] = useState<User>({
    name: 'Jonathan Doe',
    mobile: '+1 555-012-3456',
    referralCode: 'GGL-REF-00392',
    balance: 45250.00,
    autoclubBalance: 1240.50,
    activeTeam: 42,
    isKycVerified: false,
    withdrawalUnlocked: false,
    isAutoclubMember: false
  });

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
    setIsProfileOpen(false);
    window.scrollTo(0, 0);
  };

  const openDrawer = () => setIsProfileOpen(true);

  // Define Auth screens where Persistent Nav is Hidden
  const isAuthScreen = ['SPLASH', 'LOGIN', 'REGISTER', 'FORGOT_PASSWORD'].includes(currentScreen);

  const renderScreen = () => {
    const viewProps = { onNavigate: navigate, onOpenProfile: openDrawer, user };

    switch (currentScreen) {
      case 'SPLASH': return <Splash onNext={navigate} />;
      case 'LOGIN': return <Login onNavigate={navigate} />;
      case 'REGISTER': return <Register onNavigate={navigate} />;
      case 'FORGOT_PASSWORD': return <ForgotPassword onNavigate={navigate} />;
      case 'DASHBOARD': return <Dashboard {...viewProps} />;
      case 'WALLET': return <Wallet {...viewProps} />;
      case 'NETWORK': return <Network {...viewProps} />;
      case 'COURSES': return <Courses {...viewProps} />;
      case 'COURSE_DETAILS': return <CourseDetails onNavigate={navigate} />;
      case 'CHECKOUT': return <Checkout onNavigate={navigate} />;
      case 'CONFIRMATION': return <Confirmation onNavigate={navigate} />;
      case 'WITHDRAWAL_LOCKED': return <WithdrawalLocked onNavigate={navigate} user={user} />;
      case 'WITHDRAWAL_FORM': return <WithdrawalForm onNavigate={navigate} user={user} />;
      case 'KYC_DETAILS': return <KYCDetails onNavigate={navigate} onUpdate={() => setUser(prev => ({...prev, isKycVerified: true}))} />;
      case 'WITHDRAWAL_PREVIEW': return <WithdrawalPreview onNavigate={navigate} />;
      case 'WITHDRAWAL_HISTORY': return <WithdrawalHistory onNavigate={navigate} onOpenProfile={openDrawer} />;
      case 'AUTOCLUB_LANDING': return <AutoclubLanding onNavigate={navigate} user={user} />;
      case 'AUTOCLUB_ONBOARDING': return <AutoclubOnboarding onNavigate={navigate} onJoin={() => setUser(prev => ({...prev, isAutoclubMember: true}))} />;
      case 'AUTOCLUB_DASHBOARD': return <AutoclubDashboard {...viewProps} />;
      case 'AUTOCLUB_WALLET': return <AutoclubWallet onNavigate={navigate} user={user} />;
      case 'AUTOCLUB_TRANSFER': return <AutoclubTransfer onNavigate={navigate} user={user} onTransfer={(amt) => setUser(prev => ({...prev, autoclubBalance: prev.autoclubBalance - amt, balance: prev.balance + amt}))} />;
      case 'OFFICIAL_DOCUMENTS': return <OfficialDocuments {...viewProps} />;
      case 'SUPPORT_CHAT': return <SupportChat onNavigate={navigate} onOpenProfile={openDrawer} />;
      case 'RESOURCE_CENTER': return <ResourceCenter onNavigate={navigate} onOpenProfile={openDrawer} />;
      case 'SOCIAL_CONNECT': return <SocialConnect onNavigate={navigate} onOpenProfile={openDrawer} />;
      case 'TERMS_CONDITIONS': return <TermsConditions onNavigate={navigate} onOpenProfile={openDrawer} />;
      case 'COMMUNITY': return <Community onNavigate={navigate} onOpenProfile={openDrawer} />;
      case 'PROFILE_SETTINGS': return <ProfileSettings onNavigate={navigate} user={user} />;
      case 'HELP_SUPPORT': return <HelpSupport {...viewProps} />;
      case 'TESTIMONIALS': return <Testimonials onNavigate={navigate} onOpenProfile={openDrawer} />;
      default: return <Splash onNext={navigate} />;
    }
  };

  const getActiveTab = () => {
    if (['DASHBOARD', 'AUTOCLUB_DASHBOARD', 'COMMUNITY', 'RESOURCE_CENTER'].includes(currentScreen)) return 'Home';
    if (['COURSES', 'COURSE_DETAILS'].includes(currentScreen)) return 'Courses';
    if (currentScreen === 'NETWORK') return 'Network';
    if (currentScreen === 'PROFILE_SETTINGS') return 'Profile';
    return '';
  };

  return (
    <div className="max-w-[450px] mx-auto min-h-screen bg-white relative overflow-hidden flex flex-col shadow-2xl">
      <div className={`flex-1 flex flex-col overflow-y-auto custom-scrollbar ${!isAuthScreen ? 'pb-24' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.15 }}
            className="flex-1 flex flex-col"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>

      {!isAuthScreen && (
        <>
          <BottomNav active={getActiveTab()} onNavigate={navigate} />
          <ProfileDrawer 
            isOpen={isProfileOpen} 
            onClose={() => setIsProfileOpen(false)} 
            user={user} 
            onLogout={() => navigate('LOGIN')}
            onNavigate={navigate}
          />
        </>
      )}
    </div>
  );
};

export default App;
