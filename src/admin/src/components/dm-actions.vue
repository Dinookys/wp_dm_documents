<template>
  <div class="dm-actions" >
    <a href="" title="Editar" @click.prevent="e => $emit('edit', e)" >
        <dm-icon icon="pen" ></dm-icon>
    </a>
    <a href="" title="ShortCode" @click.prevent="e => $emit('shortcode', e)" >
        <dm-icon icon="shortcode" ></dm-icon>
    </a>
    <a href="" title="Remover" @click.prevent="e => $emit('trash', e)" >
        <dm-icon icon="trash" ></dm-icon>
    </a>
  </div>
</template>
<style>
    .dm-actions {
        display: inline-flex;                          
        background-color: #e5e5e5;
        border-left: 1px solid #ccc;
        align-items: center;
        overflow: hidden;     
        flex-direction: column;   
    }
    .dm-actions a {
        padding: 5px;
        transition: .1s linear;
    }
    .dm-actions .icon {        
        vertical-align: middle;
    }
    .dm-actions a:hover {        
        background-color: var(--dm-primary);
    }
</style>