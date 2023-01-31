// MY CUSTOM JQUERY PLUGIN = printList

(function ($) {
 
    $.fn.printList = function(){
        var print_window = window.open();
        var list_title = '<p style="font-size:16pt">List:</p>';
        print_window.document.write(list_title);
        
        $("li").each(function(){
            var notes = $(this).text();
            print_window.document.write('<p style="font-size:14pt;font-weight:bold;color:black;">', notes, '</p>');
        });
        
        print_window.print();
        print_window.close();
        return this;
    };
    
}(jQuery)); // end printList plugin/function