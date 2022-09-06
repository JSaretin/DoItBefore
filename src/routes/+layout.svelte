<section>
	<slot />
</section>

<style>
	section {
		width: 100%;
		min-height: 100vh;
		background-color: #f0f2f5;
		/* background-color: red; */
        padding: 1rem;
		overflow: auto;
	}

	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
        
	}
</style>
