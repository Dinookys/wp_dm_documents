<?php

class DM_Document_Model extends DM_Base_Model
{
    protected $tableName = 'dm_documents_documents';
    protected $fields = [
        'ID',
        'ID_category',
        'titulo',
        'data',
        'descricao',
        'link',
        'icon',
        'status'
    ];

    protected $scaffold = [
        'ID_category' => '',
        'titulo' => '',
        'descricao' => '',
        'data' => '',
        'link' => '',
        'icon' => 'file',
        'status' => 'publish',
    ];

    public function createTable()
    {        
        $this->db->query(
            "CREATE TABLE IF NOT EXISTS `$this->tableName` (
      `ID` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
      `ID_category` INT(11) NOT NULL DEFAULT 0,
      `titulo` VARCHAR(255) NOT NULL DEFAULT '',
      `descricao` TEXT NULL,
      `data` VARCHAR(255),
      `icon` VARCHAR(255),
      `link` TEXT NULL,
      `status` VARCHAR(255) NOT NULL DEFAULT 'publish',
      PRIMARY KEY (`ID`));"
        );

        return parent::createTable();
    }

    public function updateTable ()
    {
        $currentVersion = get_option("dm_document_version", null);
        if(version_compare('2.0.0', $currentVersion)) {
            $this->db->query("ALTER TABLE `$this->tableName` ADD `link` TEXT NULL");          
            $this->db->query("ALTER TABLE `$this->tableName` ADD `icon` VARCHAR(255)");
            $this->migrateDocuments_V2_From_V1();
        }
        
        return parent::updateTable();
    }

    protected function migrateDocuments_V2_From_V1() {
        $documents = $this->getAllByQuery("1");
        $icons = array_keys(dm_get_icon_list());

        foreach($documents as $document) {
            $uploads = json_decode($document->documentos);

            foreach($uploads as $section) {
                if(isset($section[0]) && !empty($section[0]->url)) {
                    $url = $section[0]->url;
                    $info = pathinfo($url);

                    $icon = '';
                    if($info['extension']) {
                        $icon = $info['extension'];
                    }

                    if(!in_array($icon, $icons)) {
                        $icon = 'file';
                    }

                    $this->db->query($this->db->prepare("UPDATE `$this->tableName` SET link=%s, icon=%s WHERE ID=%d", $url, $icon,  $document->ID));
                }
            }
        }
    }

    public function getScaffold()
    {
        $this->scaffold['data'] = date('d/m/Y');        
        return $this->scaffold;
    }
}
