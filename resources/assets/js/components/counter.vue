<template>

		<div>
				<h2>Count : {{ count }}</h2>
				<button @click='count = count + 100'>add</button>
		</div>

</template>


<script>

	export default {
		data(){
			return {
					count:0
			}
		}
	}

</script>
