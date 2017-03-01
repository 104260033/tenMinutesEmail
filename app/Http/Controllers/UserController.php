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

    public function login(Request $request)
    {
        /**
         * 验证
         */
        $validator = Validator::make($request->all(), [
            'email'    => 'required',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            $firstError = current(current(current($validator->errors())));
            $error = $firstError ?: 'Request Parameter error';
            return $validator->errors();
        }
    }

}
