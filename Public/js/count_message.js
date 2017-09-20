
 var count=null;
 var click=null;
 var news=null;
 var publisher=null;
 var type=null;
 var view=null;

$(document).ready(function(){
	status();
})
function status(){
	$parent = $('<table>');
	$.get("/lib/Admin/Status/book",function(msg){
		$tr = $('<tr>');
		$tr.append($('<td>').html('书籍数量')).append($('<td>').html(msg.book));
		$parent.append($tr);
	});
  $.get("/lib/Admin/Status/click",function(msg){
	  $tr = $('<tr>');
		$tr.append($('<td>').html('书籍点击量')).append($('<td>').html(msg.click));
		$parent.append($tr);
	  });
  $.get("/lib/Admin/Status/news",function(msg){
	   $tr = $('<tr>');
		$tr.append($('<td>').html('新闻数量')).append($('<td>').html(msg.news));
		$parent.append($tr);
	  });
  $.get("/lib/Admin/Status/publisher",function(msg){msg.publisher;
   $tr = $('<tr>');
		$tr.append($('<td>').html('出版社数量')).append($('<td>').html(msg.publisher));
		$parent.append($tr);});
  $.get("/lib/Admin/Status/type",function(msg){
	   $tr = $('<tr>');
		$tr.append($('<td>').html('分类数量')).append($('<td>').html(msg.type));
		$parent.append($tr);});
 $.get("/lib/Admin/Status/view",function(msg){
	 
	  $tr = $('<tr>');
		$tr.append($('<td>').html('请求数量')).append($('<td>').html(msg.view));
		$parent.append($tr);
		});
 
	$("#div_right").append($parent);
}
