<script lang="ts">
	export let name: string;
</script>

<label>
	{name}
	<input type="password" name={name.toLocaleLowerCase().replaceAll(' ', '_')} required />
</label>

<style>
	label {
		display: flex;
		flex-direction: column;
	}

	label input {
		outline: none;
		padding: 0.2rem;
		border-radius: 0.2rem;
		border: none;
		background-color: rgb(210, 210, 210);
	}
</style>
