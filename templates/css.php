<style>
    .dm-categories {
        display: grid;
        grid-template-columns: 200px auto;
        grid-auto-rows: auto;
        border: 1px solid #ccc;
    }

    .dm-categories .dm-sidebar-categories {
        background-color: #ececec;
        list-style: none;
        padding: 10px 0 0 0;
        border-right: 1px solid #ccc;
        margin: 0 !important;
    }

    .dm-categories .dm-sidebar-categories li:not(:first-child) {
        border-top: 1px solid #ccc;
        padding-top: 10px;
    }

    .dm-list-item,
    .dm-list-item:hover,
    .dm-categories .dm-sidebar-categories a {
        color: #383838;
    }

    .dm-icon {
        display: inline-block;
        height: 25px;
        width: 25px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin: 0 5px;
        vertical-align: middle;
    }

    .dm-sidebar-categories .dm-icon {
        filter: grayscale(100%);
    }

    .dm-category-closed {
        background-image: url("<?php echo DM_DOCUMENTS_URL ?>/assets/images/icons/folder-closed.svg");
    }

    .dm-category-opened {
        background-image: url("<?php echo DM_DOCUMENTS_URL ?>/assets/images/icons/folder-opened.svg");
    }

    .dm-list-items {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        padding: 10px;
        align-content: flex-start;
        box-sizing: border-box;
        position: relative;
        min-height: 80px;
    }

    .dm-list-item {
        border: 1px solid #ccc;
        display: block;
        padding: 10px;
        text-align: center;
        position: relative;
        transition: .1s linear;
    }

    .dm-category {
        position: relative;
        display: block;
    }

    .dm-category::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
    }

    .dm-title {
        word-wrap: break-word;
        width: calc(100% - 10px);
        font-size: 12px;
        display: inline-block;
        margin-top: 5px;
    }

    .dm-no-items {
        display: flex;
    }

    .dm-loading,
    .dm-no-items {                
        font-weight: bold;
        font-size: .70em;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-transform: uppercase;
    }

    .dm-data {
        font-size: 10px;
        position: absolute;
        left: 5px;
        top: 5px;
    }

    .dm-id {
        font-size: 10px;
        position: absolute;
        right: 5px;
        bottom: 0;
        opacity: .6;        
    }

    span.loading {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #ccc;
        display: block;
        box-shadow: 1px -1px 0px 1px white inset, 0px 0px 0px 2px rgba(0, 0, 0, .6) inset;
        animation: loading .500s linear infinite;
    }

    .dm-category-active span.dm-icon {
        filter: grayscale(0%);
    }

    .dm-list-item:hover {
        border-color: #585858;
    }

    .dm-pagination {
        text-align: right;
        padding: 5px 15px;
        background-color: #ececec;
        border-top: 1px solid #ccc;
    }

    .dm-pagination a,
    .dm-pagination span {
        padding: 5px;
    }

    @keyframes loading {
        100% {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 767px) {
        .dm-categories,        
        .dm-list-items {
            grid-template-columns: 1fr;
        }

        .dm-categories .dm-sidebar-categories {
            height: 100px;
            overflow-x: auto;
        }
    }

    @media (max-width: 767px) AND (orientation: landscape) {        
        .dm-list-items {
            grid-template-columns: 1fr 1fr;
        }
    }
    
</style>