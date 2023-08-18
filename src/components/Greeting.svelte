<script>
  export let messages;

  let randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  let greeting = randomMessage()

  function handleClick() {
    greeting = randomMessage();
  }
</script>

<div>
    <h3>{greeting}! Thank you for visiting!</h3>
    <button on:click={handleClick}>
      New Greeting
    </button>
  </div>