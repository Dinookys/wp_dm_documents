<div class="dm-categories">
    <ul class="dm-sidebar-categories">
        <?php foreach($this->all_cats as $key => $cat): ?>
        <li class="<?php echo ( $this->currentCat_ID == $cat->ID) ? "dm-category-active" : "" ?>" >
            <a class="dm-category" href="?dmc=<?php echo $this->root_category->ID . '-' . $cat->ID_parent . '-' . $cat->ID ?>" style="padding-left: <?php echo $cat->level > 1 ? $cat->level * 10 : 0; ?>px" >
                <span class="dm-icon <?php echo ( $this->currentCat_ID == $cat->ID) || $key == 0 ? "dm-category-opened" : "dm-category-closed" ?>" ></span> <?php echo $cat->titulo_curto; ?>
            </a>
        </li>
        <?php endforeach; ?>
    </ul>
    <div class="dm-list-items">
        <?php foreach($this->sub_cats as $cat) : ?>
            <a class="dm-list-item dm-category" href="?dmc=<?php echo $this->root_category->ID . '-' . $cat->ID_parent . '-' . $cat->ID ?>" >
                <span class="dm-icon dm-category-closed" ></span>
                <span class="dm-id"><?php echo $cat->ID; ?></span>
                <span class="dm-title">
                    <?php echo $cat->titulo_curto; ?>
                </span>
            </a>
        <?php endforeach; ?>

        <?php if($this->documents['items']): ?>
            <?php foreach($this->documents['items'] as $document): ?>
                <a class="dm-list-item dm-document" href="<?php echo $document->link ?>" target="_new" >
                    <span class="dm-data"><?php echo $document->data; ?></span>
                    <span class="dm-id"><?php echo $document->ID; ?></span>
                    <span class="dm-icon" style="background-image: url(<?php echo $this->icons[$document->icon] ?>);" ></span>
                    <span class="dm-title" ><?php echo $document->titulo; ?></span>
                    <span><?php echo $document->descricao; ?></span>
                </a>
            <?php endforeach; ?>
        <?php endif; ?>

        <?php if(!$this->documents['items'] && !$this->sub_cats) :?>
            <div class="dm-no-items">
                <span>Nada por aqui...</span>
            </div>
        <?php endif; ?>

        <div class="dm-loading" style="display: none;" >
            <span class="loading"></span>&nbsp;Carregando...
        </div>
    </div>
    <?php $total_pages = $this->documents['total_pages'];
        if($total_pages > 1) : ?>
        <div class="dm-pagination" ></div>
        <div class="dm-pagination" >
            <?php 
                echo paginate_links(array(
                    'base' => $this->u . '?dmc=' . $this->c . '%_%',
                    'total' => $total_pages,
                    'format' => '&dmp=%#%',
                    'current' => max(1, $this->p)
                ));  
            ?>
        </div>
    <?php endif; ?>
</div>