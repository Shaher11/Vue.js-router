<template>
    <div>
        <h3>Edit User {{ $route.params.id}}</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>

    </div>
</template>