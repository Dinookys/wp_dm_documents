<?php

class DM_Documents_Controller extends DM_Base_Controller
{
    protected $validationFields = [
        'titulo' => 'required',
        'ID_category' => 'required',
    ];

    public function __construct()
    {
        $this->model = new DM_Document_Model();

        /**
         * Recuperando a lista de campos da tabela
         */
        $this->fields = $this->model->fields;

        parent::__construct();
    }

    public function save(WP_REST_Request $request)
    {
        // $request->set_param('documentos', json_encode($request->get_param('documentos') ?? [], JSON_UNESCAPED_UNICODE));
        $save = parent::save($request);
        return $save;
    }

    public function edit(WP_REST_Request $request)
    {
        $edit = parent::edit($request);

        // if ($edit) {
        //     if ($edit['documentos']) {
        //         $edit['documentos'] = json_decode($edit['documentos'], true);
        //     } else {
        //         $edit['documentos'] = $this->model->getScaffold()['documentos'];
        //     }
        // }

        return $edit;
    }

    public function listItems (WP_REST_Request $request)
    {
        $filter = [];
        $columns = $this->model->getFields();
        $terms = json_decode($request->get_param('term'), true);

        if(is_array($terms)) {
            foreach($terms as $column => $v) {
                $value = filter_var($v);
                if(in_array($column, $columns) && $value) {
                    $filter['AND'][$column . ' LIKE'] = "%$value%";
                }

            }
        }

        if($cat_ID = $request->get_param('ID_category')) {
            $filter['AND']['ID_category = '] = $cat_ID;
        }
        
        $request->set_param('filter', $filter);

        return parent::listItems($request);
    }
}
