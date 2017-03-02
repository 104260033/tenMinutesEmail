<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showLogin()
    {
        return view('user.login');

    }

    public function login()
    {
        /**
         * 验证
         */
        $this->validate(request(),[
            'email'    => 'required',
            'password' => 'required',
        ]);

    }

}
