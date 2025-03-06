import { AnimatedSpan, Terminal } from './ui/terminal';

const HeadingNewAnimation = () => {
    return (
<Terminal className={'bg-transparent bg-white'}>
  <AnimatedSpan>&gt; npx create-react-router@latest</AnimatedSpan>

  <AnimatedSpan delay={200} className="text-green-500">
    <span>✔ Preflight checks... 🚀</span>
  </AnimatedSpan>

  <AnimatedSpan delay={500} className="text-green-500">
    <span>✔ Detecting framework... Next.js found! ⚡</span>
  </AnimatedSpan>

  <AnimatedSpan delay={800} className="text-green-500">
    <span>✔ Tailwind CSS detected! Styling like a pro. 🎨</span>
  </AnimatedSpan>

  <AnimatedSpan delay={1100} className="text-green-500">
    <span>✔ Import aliases validated. No spaghetti code here! 🍜</span>
  </AnimatedSpan>

  <AnimatedSpan delay={1400} className="text-green-500">
    <span>✔ Writing components.json... Organizing the magic. ✨</span>
  </AnimatedSpan>

  <AnimatedSpan delay={1700} className="text-green-500">
    <span>✔ Checking registry... All systems go! ✅</span>
  </AnimatedSpan>

  <AnimatedSpan delay={2000} className="text-green-500">
    <span>✔ Updating tailwind.config.ts... Customizing the power. 🎛️</span>
  </AnimatedSpan>

  <AnimatedSpan delay={2300} className="text-green-500">
    <span>✔ Updating app/globals.css... Fresh styles incoming. 💅</span>
  </AnimatedSpan>

  <AnimatedSpan delay={2600} className="text-green-500">
    <span>✔ Installing dependencies... Grab a coffee ☕</span>
  </AnimatedSpan>

  <AnimatedSpan delay={2900} className="text-blue-500">
    <span>ℹ Updated 1 file:</span>
    <span className="pl-2">- lib/utils.ts</span>
  </AnimatedSpan>

  <AnimatedSpan delay={3200} className="text-muted-foreground">
    🎉 Success! Project initialization completed.
  </AnimatedSpan>

  <AnimatedSpan delay={3500} className="text-muted-foreground">
    🛠️Let the coding begin! 💻
  </AnimatedSpan>
</Terminal>

    );
};

export default HeadingNewAnimation;