<script>
    if(window.jQuery != undefined) {
        (function($){
            $('body').on('click', '.dm-category', function(e){
                e.preventDefault();

                let url = new URL(e.target.href);
                let self = $(e.target);
                
                self.parents('.dm-categories').find('.dm-list-item, .dm-no-items').css({display: 'none'});
                self.parents('.dm-categories').find('.dm-loading').css({display: 'flex'});

                $.ajax({
                    method: "POST",
                    url: '<?php echo admin_url( 'admin-ajax.php' ); ?>',
                    data: {
                        action: 'dm_category',
                        dmc: new URLSearchParams(url.search).get('dmc'),
                    }
                }).success((res) => {
                    self.parents('.dm-categories').html($(res).html());
                }).fail(() => {
                    window.location.href = window.location.href;
                });
                
                window.history.pushState(null,document.querySelector('title').innerText, url.href);
                
            });

            $('body').on('click', '.dm-pagination a.page-numbers', function(e){
                e.preventDefault();

                let url = new URL(e.target.href);
                let self = $(e.target);
                
                self.parents('.dm-categories').find('.dm-list-item, .dm-no-items').css({display: 'none'});
                self.parents('.dm-categories').find('.dm-loading').css({display: 'flex'});

                let search = new URLSearchParams(url.search);

                $.ajax({
                    method: "POST",
                    url: '<?php echo admin_url( 'admin-ajax.php' ); ?>',
                    data: {
                        action: 'dm_category',
                        dmc: search.get('dmc'),
                        dmp: search.get('dmp'),
                        u: '<?php echo $this->u; ?>'
                    }
                }).success((res) => {
                    self.parents('.dm-categories').html($(res).html());
                }).fail(() => {
                    window.location.href = window.location.href;
                });
                
                window.history.pushState(null,document.querySelector('title').innerText, url.href);
                
            });
            
        })(jQuery);
    }
</script>