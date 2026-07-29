$(document).ready(() => {
  const $btn = $('#nextMessageBtn');
  const $box = $('#messageBox');

  // Pools
  const starts = ["🚀 Keep", "🔥 Always", "🎨 Keep drawing and", "🤖 Build", "🌊 Flow like water and", "💡 Remember to", "⚡ Never forget to", "📚 Learn", "🎯 Aim to", "🛠️ Try to"];
  const middles = ["pushing limits", "exploring ideas", "creating mods", "designing smarter", "thinking big", "sharing knowledge", "improving daily", "breaking barriers", "leveling up", "challenging yourself"];
  const ends = ["because greatness awaits ✨", "and the world will notice 🌍", "until the dream comes true 🌟", "and success will follow 💯", "because you’re unstoppable 🔥", "for the future is yours 🚀", "because you’re Nexus Tribarixa 😎", "and your skills are legendary 🏆", "because limits are illusions 💫", "and victory is near 🥇"];

  function generateMessage() {
    const start = starts[Math.floor(Math.random() * starts.length)];
    const middle = middles[Math.floor(Math.random() * middles.length)];
    const end = ends[Math.floor(Math.random() * ends.length)];
    return `${start} ${middle} ${end}`;
  }

  function renderMessage(msg, instant = false) {
    if (instant) {
      $box.text(msg).addClass('show');
      return;
    }
    
    $box.removeClass('show');
    setTimeout(() => {
      $box.text(msg).addClass('show');
    }, 500); // 500ms matches the style.css transition time
  }

  // New message on refresh
  let msg = generateMessage();
  renderMessage(msg, true);

  // Button click
  $btn.on('click', () => {
    let next = generateMessage();
    while (next === $box.text()) {
      next = generateMessage(); // avoid duplicate
    }
    renderMessage(next);
  });
});
