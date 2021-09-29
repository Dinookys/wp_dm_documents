<?php 

function dm_create_breadcrumbs_HTML($objects = [], $firstbreadcrumb = 'Lista', $return = false) {
    global $wp;
    $current_url = home_url($wp->request);
    $html = '';

    if($objects) {

        $total = count($objects) - 1;

        $html .= '<nav class="dm-breadcrumbs" >';
        $html .= '<a href="'. $current_url .'" >'. $firstbreadcrumb .'</a> // ';

        foreach($objects as $key => $ob) {
            if($key < $total) {
                $url = $current_url . '?dmcat=' . $ob->ID;
                $html .= '<a href="'. $url .'" >'. $ob->titulo .'</a> // ';
            } else {
                $html .= '<span>'. $ob->titulo .'</span>';
            }
        }
        $html .= '</nav>';
    }    

    if($return) {
        return $html;
    }

    echo $html;

}

function dm_get_icon_list() {
    
    $path = DM_DOCUMENTS_DIR . 'assets/images/icons';
    $icons = [];

    if(is_dir($path)) {
        $icons_dir = opendir($path);
        while(($icon = readdir($icons_dir)) !== false) {            
            $arr = pathinfo($icon);
            if(is_array($arr) && $arr['extension'] == 'svg') {
                $icons[$arr['filename']] = DM_DOCUMENTS_URL . 'assets/images/icons/' . $icon;
            }
        }
    }

    asort($icons);

    return apply_filters('dm_get_icon_list', $icons);
}

function dm_user_can($role) {
    if(!$role) return true;
    return current_user_can(get_role($role));
}