<template>

<footer>
    <p>© {{ date }} made by Tabinka</p>
</footer>

</template>

<script>

    export default {
        setup () {
            const date = new Date().getFullYear()

            return {
                date
            }
        }
    }

</script>