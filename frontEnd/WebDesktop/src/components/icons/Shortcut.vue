<template>
<div>
<slot name="Shortcut">
    <div class = "icon">
        <h1>CHMAR</h1>
        <div class = "icon__border">
            <div class = "icon__inner">
                <div class = "icon__initial">{{ text }}</div>
            </div>
        </div>            
        <div class = "icon__name">Facebook</div>
    </div>
</slot>
</div>
</template>

<script>
    export default {
        name: 'Shortcut',
        props: ['text']
    }
</script>


<style scoped>    
    body{
        font-family: 'Open Sans';
    }

    .icon{
        width: 64px;
        margin-top: 50px;
        margin-left: 50px;

        -webkit-user-select: none;  
        -moz-user-select: none;     
        -ms-user-select: none;
    }

    .icon__border{
        position: relative;
        color: white;
        width: 64px;
        height: 64px;
        background-color: #4d648d;
        border-radius: 200px;
        padding: 0,0,0,0;
    }

    .icon__inner{
        height: 54px;
        width: 54px;
        display: inline-block;
        background-color: #283655;
        border-radius: 200px;
        position: absolute;
        margin-left: -27px;
        margin-top: -27px;
        left: 50%;
        top: 50%;
    }

    .icon__initial{
        font-size: 32px;
        text-align: center;
        margin-top: 5px;
    }

    .icon__name{
        font-size: 14px;
        margin-top: 5px;
        text-align: center;
    }

    .icon__border:hover{
        cursor: pointer;
    }

    .icon__inner:active{
        background-color: #4d648d;
    }
</style>