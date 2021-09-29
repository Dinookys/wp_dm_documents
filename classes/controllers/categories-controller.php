<?php

class DM_Categories_Controller extends DM_Base_Controller
{    

    protected $validationFields = [
        'titulo' => 'required'
    ];
    
    public function __construct()
    {        
        $this->model = new DM_Category_Model();        
        
        /**
         * Recuperando a lista de campos da tabela
         */
        $this->fields = $this->model->fields;

        parent::__construct();
    }

    public function save(WP_REST_Request $request)
    {
        $result = parent::save($request);

        if(isset($result['messages']['notice_success'])) {
            $result['categories'] = $this->model->getCategoriesOrder();
        }

        return $result;
    }

    public function delete(WP_REST_Request $request)
    {

        $ID = $request->get_param('ID');
        $result = [];

        if($ID) {

            /**
             * @var wpdb
             */
            $db = $this->model->getDB();
            
            $hasSubCategories = $db->get_var(
                $db->prepare(
                    "SELECT COUNT(1) FROM  {$this->model->getTableName()} WHERE ID_parent=%d",
                    $ID
                )
            );

            $hasDocuments = $db->get_var(
                $db->prepare(
                    "SELECT COUNT(1) FROM {$db->prefix}dm_documents_documents WHERE ID_category=%d",
                    $ID
                )               
            );

            if($hasSubCategories OR $hasDocuments) {
                $result["messages"] = 'Remova as categorias filhas e documentos antes.';
            } else {
                $this->model->delete($ID);                
                $result["categories"] = $this->model->getCategoriesOrder();
            }
        }

        return $result;

    }

    public function listItems (WP_REST_Request $request)
    {
        if($term = $request->get_param('term')) {
            $request->set_param('filter', array(
                'AND' => array(
                    'titulo LIKE' => "%$term%"
                )
                ));
        }
        return parent::listItems($request);
    }

}
