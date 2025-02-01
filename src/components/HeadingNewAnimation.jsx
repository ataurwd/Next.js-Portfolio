import React from 'react';
import { AnimatedSpan, Terminal, TypingAnimation } from './ui/terminal';

const HeadingNewAnimation = () => {
    return (
<Terminal>
  <TypingAnimation>&gt; npx create-react-router@latest</TypingAnimation>

  <AnimatedSpan delay={2000} className="text-green-500">
    <span>✔ Preflight checks... 🚀</span>
  </AnimatedSpan>

  <AnimatedSpan delay={2500} className="text-green-500">
    <span>✔ Detecting framework... Next.js found! ⚡</span>
  </AnimatedSpan>

  <AnimatedSpan delay={3000} className="text-green-500">
    <span>✔ Tailwind CSS detected! Styling like a pro. 🎨</span>
  </AnimatedSpan>

  <AnimatedSpan delay={3500} className="text-green-500">
    <span>✔ Import aliases validated. No spaghetti code here! 🍜</span>
  </AnimatedSpan>

  <AnimatedSpan delay={4000} className="text-green-500">
    <span>✔ Writing components.json... Organizing the magic. ✨</span>
  </AnimatedSpan>

  <AnimatedSpan delay={4500} className="text-green-500">
    <span>✔ Checking registry... All systems go! ✅</span>
  </AnimatedSpan>

  <AnimatedSpan delay={5000} className="text-green-500">
    <span>✔ Updating tailwind.config.ts... Customizing the power. 🎛️</span>
  </AnimatedSpan>

  <AnimatedSpan delay={5500} className="text-green-500">
    <span>✔ Updating app/globals.css... Fresh styles incoming. 💅</span>
  </AnimatedSpan>

  <AnimatedSpan delay={6000} className="text-green-500">
    <span>✔ Installing dependencies... Grab a coffee ☕</span>
  </AnimatedSpan>

  <AnimatedSpan delay={6500} className="text-blue-500">
    <span>ℹ Updated 1 file:</span>
    <span className="pl-2">- lib/utils.ts</span>
  </AnimatedSpan>

  <TypingAnimation delay={7000} className="text-muted-foreground">
    🎉 Success! Project initialization completed.
  </TypingAnimation>

  <TypingAnimation delay={9500} className="text-muted-foreground">
    🛠️Let the coding begin! 💻
  </TypingAnimation>
</Terminal>

    );
};

export default HeadingNewAnimation;