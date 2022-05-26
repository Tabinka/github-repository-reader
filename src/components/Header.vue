<template>
    <header>
        <input type="checkbox" id="sidebar" name="sidebar">
        <label for="sidebar">
            <BootstrapIcon icon="list" size="3x"/>
        </label>
        <div id="sidebar-menu">
            <label for="sidebar"><BootstrapIcon icon="x" size="4x"/></label>
            <ul>
                <li>
                    <router-link to="/">repositories</router-link>
                </li>
                <li>
                    <router-link to="/about">about</router-link>
                </li>
            </ul>
        </div>
    </header>
    <router-view></router-view>
</template>