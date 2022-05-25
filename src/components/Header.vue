<template>
    <header>
        <ul>
            <li>
                <router-link to="/">menu 1</router-link>
            </li>
            <li>
                <router-link to="/about">menu 2</router-link>
            </li>
        </ul>
        <div>toggle switch</div>
    </header>
    <router-view></router-view>
</template>