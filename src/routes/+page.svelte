<script>
  import Second from "../components/Second.svelte";
  import * as GPTService from "../services/gpt";

  const completion = GPTService.chat();
  const computedTokens = GPTService.computeTokens();
</script>

<Second />
<p>Turbo: {computedTokens.turbo}</p>
<p>GPT4: {computedTokens.gpt4}</p>
{#await completion}
  <p>waiting...</p>
{:then response}
  <p>hey {response}</p>
{:catch error}
  <p>error {error}</p>
{/await}
