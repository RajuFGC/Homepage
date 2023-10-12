import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

setInterval(() => {
  const currentDate = new Date();
  if (currentDate.getHours() === currentDate.getMinutes()) {
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
   })
  }
}, 1000)