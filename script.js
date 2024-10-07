$(document).ready(function () {
    function includeHTML() {
        $('[include-html]').each(function () {
            var $this = $(this);
            var file = $this.attr('include-html');
            if (file) {
                $.ajax({
                    url: file,
                    method: 'GET',
                    success: function (data) {
                        $this.html(data);
                        console.log('Successfully included:', file);
                    },
                    error: function () {
                        $this.html('An error has occurred while loading this asset.');
                        console.error('Failed to include:', file);
                    },
                    complete: function () {
                        $this.removeAttr('include-html');
                        includeHTML();
                    }
                });
            }
        });
    }

    includeHTML();
});
