<?php
namespace Admin\Controller;

use Think\Controller;

class StatusController extends Controller {
	public function _initialize(){
		if(session('user_type') != 'admin'){
//			$this->ajaxReturn(array('status'=>'error'));
		}
	}

	public function index(){

	}

	//书籍数量
	public function book(){
		$book = M('Book');
		$count = $book->where(array('isAvailable'=>1))->count();
		$this->ajaxReturn(array('book'=>$count));
	}

	//书籍点击量
	public function click(){
		$book = M('Book');
		$sum = $book->where(array('isAvailable'=>1))->sum('count');
		$this->ajaxReturn(array('click'=>$sum));
	}

	//新闻数量
	public function news(){
		$news = M('News');
		$count = $news->where(array('isAvailable'=>1))->count();
		$this->ajaxReturn(array('news'=>$count));
	}

	//出版社数量
	public function publisher(){
		$publisher = M('Publisher');
		$count = $publisher->where(array('isAvailable'=>1))->count();
		$this->ajaxReturn(array('publisher'=>$count));
	}

	//分类数量
	public function type(){
		$type = M('Type');
		$count = $type->where(array('isAvailable'=>1))->count();
		$this->ajaxReturn(array('type'=>$count));
	}

	//请求数量
	public function view(){
		$request = M('request');
		$count = $request->count();
		$this->ajaxReturn(array('view'=>$count));
	}
}
