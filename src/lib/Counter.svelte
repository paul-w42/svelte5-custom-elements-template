<svelte:options
  customElement={{
    tag: "ui-counter",
    props: {
      startCount: { attribute: 'start-count', type: 'Number'},
      step: { attribute: 'step', type: 'Number'}
    }
  }}
/>

<script lang="ts">
  let {startCount = 0, step = 1} = $props();

  let count: number = $derived(startCount)

  const increment = () => {
    count += step;
  }
</script>

<button onclick={increment}>
  count is {count}
</button>


<style>
  /* Style is automatically scoped to the component */
  button {
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    padding: 0.5em 1em;
    color: black;
    border-radius: 5px;
    background-color: rgba(176, 202, 235, 0.979);
    border: 1px solid #b5b7d8b9;
    outline: none;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:hover {
    border: 1px solid #0011f883;
  }

  button:focus {
    border: 2px solid #0011f883;
  }

</style>

