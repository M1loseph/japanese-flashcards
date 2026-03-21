# Animation Ideas for RandomShuffleGamePage

## 1. Flashcard Flip Transition
When the user taps "Show Answer", the card does a smooth 3D Y-axis flip (like turning a physical flashcard). The question fades out on the front face and the answer is revealed on the back. Use `perspective`, `rotateY`, and `backface-visibility` via Tailwind + motion/react.

## 2. Card Swipe Out on Correct/Wrong
After marking correct or wrong, the flashcard swipes out to the right (correct, with a green glow trail) or to the left (wrong, with a red glow trail). The next card slides in from the bottom with a subtle scale-up spring animation. Gives a satisfying Tinder-like feel.

## 3. Streak Flame Effect
Track consecutive correct answers. After 3+ correct in a row, show a small animated flame icon next to the progress bar that grows with the streak. On streak break, the flame puffs out with a smoke particle burst. Motivates the user to keep going.

## 4. Progress Bar Pulse on Advance
Each time a card is answered, the progress bar fill pulses briefly (scale Y up then back) with a subtle glow effect at the leading edge, like a liquid filling a tube. Add a small particle burst at the progress front edge.

## 5. Entrance Choreography
When the page first loads, stagger-animate elements in sequence:
1. Progress bar slides down from top (0ms)
2. Flashcard scales up from center with a spring bounce (150ms)
3. Buttons fade up from below (300ms)

This makes the page feel alive instead of everything appearing at once.

## 6. Shake on Mistake
When the user marks a card as wrong, the flashcard shakes horizontally (a quick left-right-left wiggle). Pair with a brief red border flash. Gives tactile feedback that the answer was incorrect without being punishing.

## 7. Floating Kanji Particles Background
Subtle, slow-moving translucent kanji characters (randomly picked from the current deck) float upward in the background like bubbles. Very low opacity (~5-10%) so they don't distract, but add atmosphere.

## 8. Card Counter Flip Animation
The "cards remaining" number in the progress metadata does a vertical digit flip animation (like an airport departure board) each time it decrements. Small detail that adds polish.

## 9. Answer Reveal Typewriter Effect
Instead of the answer text appearing instantly, have it "type" in character by character (especially cool for Japanese characters). Each character could have a brief scale pop as it lands. Short duration (~400ms total) so it doesn't slow down the user.

## 10. Correct Answer Celebration Micro-animation
On correct: a small burst of 3-5 green sparkle particles emanates from the "Correct" button and arcs toward the progress bar. On wrong: the card briefly tints red and does a subtle downward sag before exiting. Keeps energy high without being over the top.

## 11. Session Timer Breathing Glow
The elapsed time display has a very subtle pulsing glow (opacity oscillating between 0.6 and 1.0 on a 2-second cycle), like a heartbeat. Reminds the user time is passing without being distracting.

## 12. Flashcard Depth Stack Preview
Show a subtle stack of 2-3 cards peeking behind the current card (offset by a few pixels and slightly smaller), giving the impression of a physical deck. As cards are answered, the stack visually shrinks. When only 1-2 remain, the stack disappears, building anticipation.

## 13. Button Press Ripple Effect
Add a Material-style ripple effect on the Correct/Wrong/Show buttons when pressed. The ripple color matches the button color (green ripple for correct, red for wrong, blue for show). Gives satisfying click feedback.

## 14. Page Transition to Summary
When the last card is answered, instead of an instant navigate, have all elements gracefully exit: buttons fade down, card floats up and shrinks into the progress bar, progress bar fills to 100% with a golden glow, then the whole page fades to the summary. Creates a rewarding "completion" moment.
