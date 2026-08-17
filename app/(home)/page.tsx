import Preloader from "./_components/preloader";
import Hero from "./_components/hero";
import About from "./_components/about";
import AtAGlance from "./_components/at-a-glance";
import SignatureTalks from "./_components/signature-talks";
import WaysToInvite from "./_components/ways-to-invite";
import RecentSessions from "./_components/recent-sessions";
import TrackRecord from "./_components/track-record";
import TheGuild from "./_components/the-guild";
import TheStudio from "./_components/the-studio";
import Recognition from "./_components/recognition";
import OriginalProgramming from "./_components/original-programming";
import Booking from "./_components/booking";

export default function Home() {
  return (
    <main className="w-full bg-background text-foreground">
      <Preloader />
      <Hero />
      <About />
      <AtAGlance />
      <SignatureTalks />
      <WaysToInvite />
      <RecentSessions />
      <TrackRecord />
      <TheGuild />
      <TheStudio />
      <Recognition />
      <OriginalProgramming />
      <Booking />
    </main>
  );
}
