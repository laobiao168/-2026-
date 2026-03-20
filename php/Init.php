<?php

namespace app\api\controller;

use app\common\controller\Api;
use QL\QueryList;
use think\Db;
use think\Config;

/**
 * 首页接口
 */
class Init extends Api
{
    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];




}
