<?php

class DM_HasInPage {
    protected static $instance = null;
    protected $pagesId = [];

    private function __construct(){}
    private function __clone(){}

    public static function getInstance()
    {
        if(is_null(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    public function hasInPage ($id)
    {
        if(!in_array($id, $this->pagesId)) {
            $this->pagesId[] = $id;
            return false;
        }
        return true;
    }
}

class DM_Shortcode_Category
{

    protected $root_category;
    protected $all_cats = [];
    protected $sub_cats = [];
    protected $documents = [];
    protected $icons = [];
    protected $currentCat_ID;
    protected $model;
    protected $c;
    protected $p = 1;
    protected $u;

    public function __construct()
    {
        add_shortcode('dm_category', array($this, 'category'));
        add_action("wp_ajax_nopriv_dm_category", array($this, 'ajaxGetCategory'));
        add_action("wp_ajax_dm_category", array($this, 'ajaxGetCategory'));
        $this->model = new DM_Category_Model();
        $this->root_category = new stdClass();
    }

    public function category($attrs)
    {
        
        if(DM_HasInPage::getInstance()->hasInPage(get_the_ID())) {
            return false;
        }
        
        $attrs = shortcode_atts(array('cat' => ''), $attrs);
        $root_category = $this->getCategory($attrs['cat']);

        if (empty($root_category)) return false;

        $this->root_category = (object) $root_category;

        $this->c = filter_input(INPUT_GET, 'dmc') ?? $this->root_category->ID;
        $this->p = filter_input(INPUT_GET, 'dmp');
        $this->u = $this->current_url();

        $catIDArr = explode('-', $this->c);
        $this->currentCat_ID = array_pop($catIDArr);

        ob_start();
                
        $this->renderCategory();
        require DM_DOCUMENTS_DIR . 'templates/css.php';
        require DM_DOCUMENTS_DIR . 'templates/script.php';

        return ob_get_clean();
    }

    public function ajaxGetCategory()
    {
        if ($_POST['dmc']) {

            $list_cats = explode('-', $_POST['dmc']);
            $this->currentCat_ID = array_pop($list_cats);

            $this->c = filter_input(INPUT_POST, 'dmc');
            $this->p = filter_input(INPUT_POST, 'dmp');
            $this->u = filter_input(INPUT_POST, 'u');

            $this->root_category = (object) $this->getCategory(isset($list_cats[0]) ? $list_cats[0] : $this->currentCat_ID);
            $this->renderCategory();
        }

        die();
    }

    protected function renderCategory()
    {

        if (!$this->root_category) return;

        $this->all_cats = $this->model->orderList(array_merge(
            [
                $this->root_category
            ],
            $this->loopCategories($this->root_category->ID)
        ));

        $currentCat_ID = $this->currentCat_ID;
        $this->documents = $this->getDocuments($currentCat_ID);

        $this->sub_cats = array_filter($this->all_cats, function ($cat) use ($currentCat_ID) {
            return $cat->ID_parent == $currentCat_ID;
        });

        $this->icons = dm_get_icon_list();

        require DM_DOCUMENTS_DIR . 'templates/category.php';
    }

    protected function getCategory($cat)
    {
        if (!$cat || !is_numeric($cat)) {
            return;
        }

        return $this->model->getByQuery('ID=' . $cat . ' AND status="publish"');
    }

    protected function loopCategories($cat_ID = 0)
    {
        $records = $this->model->getAllByQuery('ID_parent=' . $cat_ID . ' AND status="publish"');
        foreach ($records as $cat) {
            $records = array_merge(
                $records,
                $this->loopCategories($cat->ID)
            );
        }
        return $records;
    }


    protected function getSubCategories($ID)
    {
        if (!$ID || !is_numeric($ID)) {
            return;
        }

        return $this->model->getAllByQuery('ID_parent=' . $ID . ' AND status="publish"');
    }

    protected function getDocuments($cat)
    {
        if (!$cat || !is_numeric($cat)) {
            return;
        }

        $model = new DM_Document_Model();

        $likeName = filter_input(INPUT_GET, 'docname');

        $filter = [
            'AND' => [
                'status=' => 'publish',
                'ID_category=' => $cat,
            ],
        ];

        if ($likeName) {
            $filter['AND']['titulo LIKE'] = "%{$likeName}%";
        }

        $documentos = $model->listItems([
            'filter' => $filter,
            'page' => $this->p,
        ]);

        $total_pages = $model->totalPages($filter)->pages;

        return [
            'items' => $documentos,
            'total_pages' => $total_pages,
        ];
    }

    protected function current_url()
    {
        return get_permalink(get_the_ID());
    }
}


class DM_Shortcode_Document
{
    public function __construct()
    {
        add_shortcode('dm_document', array($this, 'document'));
    }

    public function document($attrs)
    {
        $attrs = shortcode_atts(array(
            'doc' => '',
        ), $attrs);

        ob_start();

        $documento = $this->getDocument($attrs['doc']);

        if ($documento) {
            require DM_DOCUMENTS_DIR . 'templates/parts/documento_single.php';            
        }

        return ob_get_clean();
    }

    protected function getDocument($ID)
    {
        if (!$ID || !is_numeric($ID)) {
            return;
        }

        $model = new DM_Document_Model();
        return $model->getByQuery('ID=' . $ID . ' AND status="publish"', OBJECT);
    }
}

new DM_Shortcode_Document();
new DM_Shortcode_Category();
