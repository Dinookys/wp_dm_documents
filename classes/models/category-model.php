<?php

class DM_Category_Model extends DM_Base_Model
{

    protected $delimiter = " \ ";

    protected $tableName = 'dm_documents_categories';
    protected $fields = [
        'ID',
        'ID_parent',
        'titulo',
        'status',
    ];

    protected $scaffold = [
        'ID_parent' => 0,
        'titulo' => '',
        'status' => 'publish',
    ];

    public function createTable()
    {

        $this->db->query(
            "CREATE TABLE IF NOT EXISTS `$this->tableName` (
      `ID` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
      `ID_parent` INT(11) NULL DEFAULT 0,
      `titulo` VARCHAR(255) NOT NULL,
      `status` VARCHAR(255) NOT NULL DEFAULT 'publish',
      PRIMARY KEY (`ID`));"
        );

        return parent::createTable();
    }

    public function getCategoriesOrder()
    {
        $lista = $this->setItemsPerPage(-1)->listItems([
            'cols' => ['titulo', 'ID', 'ID_parent', 'status'],
            'order' => "COALESCE(ID_parent, ID), ID_parent IS NOT NULL, ID",
        ]);

        return $this->orderList($lista);
    }

    public function orderList ($lista = array())
    {

        // $newLista = [];
        foreach($lista as $key => $cat) {            
            $lista[$key]->titulo_curto = $cat->titulo;
        }        

        foreach($lista as $key => $cat) {
            $parentNames = $this->getNameFromList($cat, $lista);
            if(array_unique($parentNames)) {
                $parentNames = implode($this->delimiter, $this->getNameFromList($cat, $lista));
            }
            $lista[$key]->titulo =  $parentNames ? ($parentNames . $this->delimiter . $cat->titulo_curto) : $cat->titulo_curto;
            $lista[$key]->level  = count(explode($this->delimiter, $lista[$key]->titulo));
        }

        usort($lista, function ($a, $b) {
            return $a->titulo > $b->titulo ? 1 : 0;
        });

        return $lista;
    
    }

    private function getNameFromList($currentCat, $lista)
    {
        $names = [];        
        foreach ($lista as $cat) {
            if ($cat->ID == $currentCat->ID_parent) {
                $names[] = $cat->titulo_curto . '#' . $cat->ID;
                $names = array_merge(
                    $this->getNameFromList($cat, $lista),
                    array_reverse($names),
                );
            }
        }
        return $names;
    }

}
